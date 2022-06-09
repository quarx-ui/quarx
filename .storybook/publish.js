const AWS = require('aws-sdk');
const path = require("path");
const fs = require('fs');
const mime = require('mime-types');
const { execSync } = require('child_process');

const getBranchName = () => execSync('git branch --show-current').toString().replace(/[\/]/, '-').trim();

const s3Client = new AWS.S3({
    endpoint: '',
    s3ForcePathStyle: true,
});

const cleanDir = async (remotePath, branch = '', bucketName = 'storybook-bucket') => {
    const bucketPath = path.join(remotePath, branch);
    const params = {
        Bucket: bucketName,
        Prefix: bucketPath
    };

    await s3Client.listObjects(params).promise()
        .then(({ $response: { data } }) => {
            const list = [];
            data.Contents.forEach((content) => {
                list.push(content.Key);
            });
            if (!list.length) {
                throw Error('Empty folder');
            }
            return list;
        })
        .then((list) => {
            return {Bucket: bucketName, Delete: {Objects: list.map((key) => ({Key: key}))}};
        })
        .then((params) => s3Client.deleteObjects(params).promise().then(() => console.log(`Successfully deleted ${bucketPath} in ' ${bucketName}`)))
        .catch((err) => {
            console.log(err.message);
        });
}

const uploadFile =  async (localPath, filePath, remotePath, branch = '', bucketName = 'storybook-bucket') => {
    const bucketPath = path.join(remotePath, branch, filePath.substring(localPath.length+1));
    const params = { Bucket: bucketName, Key: bucketPath, Body: fs.readFileSync(filePath), ContentType: mime.lookup(filePath) };

    s3Client.putObject(params).promise()
        .then(() => {
            console.log(`Successfully uploaded ${bucketPath} (${mime.lookup(filePath)} to ${bucketName}`);
        });
}

const uploadDir = (localPath, remotePath, branch = '', bucketName = 'storybook-bucket') => {
    const walkSync = (currentDirPath, callback) => {
        fs.readdirSync(currentDirPath).forEach((name) => {
            const filePath = path.join(currentDirPath, name);
            const stat = fs.statSync(filePath);
            if (stat.isFile()) {
                callback(filePath);
            } else if (stat.isDirectory()) {
                walkSync(filePath, callback);
            }
        });
    }

    walkSync(localPath, (filePath) => {
        uploadFile(localPath, filePath, remotePath, branch, bucketName).finally()
    });
};

const publish = async (branch, remotePath) => {
    await cleanDir(remotePath, branch);
    await uploadDir('storybook-static', remotePath, branch);
}

if (getBranchName() === 'master') {
    publish('latest', 'kit').finally();
} else {
    publish(getBranchName(), 'kit/branches').finally();
}
