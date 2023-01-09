import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react';

interface PropsContextInterface {
    props?: string;
    setProps: Dispatch<SetStateAction<string>>;
}

const PropsCtx = createContext<PropsContextInterface | null>(null);

export const PropsProvider: FC = ({ children }) => {
    const [props, setProps] = useState('');

    return (
        <PropsCtx.Provider value={{ props, setProps }}>
            {children}
        </PropsCtx.Provider>
    );
};

PropsProvider.defaultProps = {
    name: '',
    props: '',
};

export const usePropsContext = () => useContext(PropsCtx);
