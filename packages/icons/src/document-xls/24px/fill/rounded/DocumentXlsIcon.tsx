import React, { forwardRef } from 'react';

export const DocumentXlsIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.00015 6.32195C3.00013 6.33098 3.00013 6.3355 3.00005 6.33815C2.99721 6.43933 2.9282 6.51651 2.82796 6.53059C2.82534 6.53096 2.81907 6.53168 2.80653 6.5331C2.48564 6.56956 2.11334 6.6571 1.7742 6.92017C1.64163 7.023 1.52253 7.1421 1.4197 7.27466C1.15663 7.61381 1.06909 7.9861 1.03263 8.30699C0.999889 8.5952 0.999946 8.94041 1 9.29526V14.7057C0.999946 15.0605 0.999889 15.4058 1.03263 15.694C1.06909 16.0148 1.15663 16.3871 1.4197 16.7263C1.52253 16.8589 1.64163 16.978 1.7742 17.0808C2.11334 17.3439 2.48564 17.4314 2.80653 17.4679C2.81907 17.4693 2.82534 17.47 2.82796 17.4704C2.9282 17.4844 2.99721 17.5616 3.00005 17.6628C3.00013 17.6655 3.00013 17.67 3.00015 17.679C3.0011 18.2924 3.00814 18.8282 3.05886 19.2746C3.12154 19.8263 3.26155 20.3648 3.62954 20.8392C3.78378 21.0381 3.96243 21.2167 4.16128 21.371C4.6357 21.7389 5.17415 21.879 5.72592 21.9416C6.24453 22.0006 6.88381 22.0005 7.62532 22.0005H16.3747C17.1162 22.0005 17.7555 22.0006 18.2741 21.9416C18.8259 21.879 19.3643 21.7389 19.8387 21.371C20.0376 21.2167 20.2162 21.0381 20.3705 20.8392C20.7385 20.3648 20.8785 19.8263 20.9412 19.2746C20.9919 18.8282 20.9989 18.2924 20.9999 17.679C20.9999 17.67 20.9999 17.6655 21 17.6628C21.0028 17.5616 21.0718 17.4845 21.172 17.4704C21.1747 17.47 21.1809 17.4693 21.1935 17.4679C21.5144 17.4314 21.8867 17.3439 22.2258 17.0808C22.3584 16.978 22.4775 16.8589 22.5803 16.7263C22.8434 16.3871 22.9309 16.0148 22.9674 15.694C23.0001 15.4058 23.0001 15.0606 23 14.7057V9.29526C23.0001 8.94043 23.0001 8.59519 22.9674 8.30699C22.9309 7.9861 22.8434 7.61381 22.5803 7.27466C22.4775 7.1421 22.3584 7.023 22.2258 6.92017C21.8867 6.6571 21.5144 6.56956 21.1935 6.5331C21.1809 6.53167 21.1747 6.53096 21.172 6.53059C21.0718 6.5165 21.0028 6.43933 21 6.33816C20.9999 6.3355 20.9999 6.33098 20.9999 6.32194C20.9989 5.70854 20.9919 5.17278 20.9412 4.72641C20.8785 4.17464 20.7385 3.63618 20.3705 3.16177C20.2162 2.96292 20.0376 2.78427 19.8387 2.63003C19.3643 2.26203 18.8259 2.12203 18.2741 2.05934C17.7555 2.00043 17.1162 2.00046 16.3747 2.00049L7.62532 2.00049C6.88383 2.00046 6.24452 2.00043 5.72592 2.05935C5.17415 2.12203 4.6357 2.26203 4.16128 2.63003C3.96243 2.78427 3.78378 2.96292 3.62954 3.16177C3.26155 3.63618 3.12154 4.17464 3.05886 4.72641C3.00814 5.17278 3.0011 5.70855 3.00015 6.32195ZM5.40029 17.5005C5.21131 17.5005 5.11682 17.5005 5.05817 17.5594C4.99953 17.6184 5.00004 17.7126 5.00106 17.9009C5.00373 18.3973 5.01316 18.7591 5.04607 19.0488C5.08831 19.4206 5.15815 19.5468 5.20985 19.6134C5.26126 19.6797 5.32081 19.7392 5.3871 19.7906C5.45374 19.8423 5.57994 19.9122 5.95169 19.9544C6.34389 19.999 6.8683 20.0005 7.68 20.0005H16.32C17.1317 20.0005 17.6561 19.999 18.0483 19.9544C18.4201 19.9122 18.5463 19.8423 18.6129 19.7906C18.6792 19.7392 18.7387 19.6797 18.7902 19.6134C18.8419 19.5468 18.9117 19.4206 18.9539 19.0488C18.9868 18.7591 18.9963 18.3973 18.999 17.9009C19 17.7126 19.0005 17.6184 18.9418 17.5594C18.8832 17.5005 18.7887 17.5005 18.5997 17.5005L5.40029 17.5005ZM18.999 6.10008C19 6.28839 19.0005 6.38255 18.9418 6.44151C18.8832 6.50047 18.7887 6.50047 18.5997 6.50047H5.40029C5.21131 6.50047 5.11682 6.50047 5.05817 6.44151C4.99953 6.38255 5.00004 6.28839 5.00106 6.10008C5.00374 5.60366 5.01316 5.24186 5.04607 4.95218C5.08831 4.58043 5.15815 4.45423 5.20985 4.38758C5.26126 4.3213 5.32081 4.26175 5.3871 4.21034C5.45374 4.15864 5.57994 4.0888 5.95169 4.04656C6.34389 4.002 6.8683 4.00049 7.68 4.00049L16.32 4.00049C17.1317 4.00049 17.6561 4.002 18.0483 4.04656C18.4201 4.0888 18.5463 4.15864 18.6129 4.21034C18.6792 4.26175 18.7387 4.3213 18.7902 4.38758C18.8419 4.45423 18.9117 4.58043 18.9539 4.95218C18.9868 5.24186 18.9963 5.60366 18.999 6.10008ZM6.40021 12.0589C6.41743 12.0286 6.41763 11.9915 6.40073 11.961L5.19363 9.78312C5.11975 9.64982 5.21615 9.48617 5.36856 9.48617H6.79451C6.86785 9.48617 6.93531 9.52631 6.97029 9.59077L7.54963 10.6582C7.56837 10.6927 7.61781 10.6932 7.63712 10.6589L8.24128 9.5879C8.27674 9.52505 8.34331 9.48617 8.41548 9.48617H9.82534C9.98045 9.48617 10.0765 9.65508 9.99724 9.78839L8.71636 11.9423C8.69775 11.9736 8.69762 12.0125 8.71602 12.044L10.0695 14.3551C10.1476 14.4884 10.0514 14.6562 9.89692 14.6562H8.44902C8.37762 14.6562 8.31163 14.6181 8.27588 14.5563L7.59222 13.3741C7.57273 13.3404 7.52389 13.3409 7.50513 13.375L6.85725 14.5526C6.82209 14.6165 6.75495 14.6562 6.68202 14.6562H5.268C5.11465 14.6562 5.01835 14.4907 5.09411 14.3574L6.40021 12.0589ZM10.8041 9.78617C10.8041 9.62048 10.9384 9.48617 11.1041 9.48617H12.1365C12.3022 9.48617 12.4365 9.62048 12.4365 9.78617V13.0162C12.4365 13.0714 12.4813 13.1162 12.5365 13.1162H14.1693C14.335 13.1162 14.4693 13.2505 14.4693 13.4162V14.3562C14.4693 14.5219 14.335 14.6562 14.1693 14.6562L11.1041 14.6562C10.9384 14.6562 10.8041 14.5219 10.8041 14.3562V9.78617ZM15.4349 12.8396L15.1457 12.5906C15.0809 12.5347 14.9805 12.5808 14.9805 12.6663V14.1502C14.9805 14.2491 15.0336 14.3403 15.1195 14.3892C15.5134 14.6132 16.1607 14.742 16.7867 14.742C17.4839 14.742 18.0313 14.6094 18.4086 14.315C18.7994 14.0102 18.9625 13.5684 18.9625 13.0612C18.9625 12.5492 18.7884 12.1748 18.5119 11.9036C18.2459 11.6425 17.9033 11.4952 17.5976 11.3916C17.4704 11.3485 17.3425 11.3108 17.2261 11.2764L17.1551 11.2555C17.0165 11.2143 16.9002 11.1779 16.8045 11.1383C16.602 11.0545 16.6056 11.0043 16.6063 10.9954C16.6063 10.9464 16.6159 10.9337 16.6429 10.916C16.6948 10.882 16.8271 10.8348 17.1233 10.8348C17.5597 10.8348 18.0079 10.9944 18.2952 11.1898L18.5685 11.3757C18.6349 11.4209 18.7248 11.3733 18.7248 11.293V9.89981C18.7248 9.78881 18.6581 9.68868 18.5556 9.64592C18.1946 9.4955 17.6474 9.40037 17.0375 9.40037C16.3506 9.40037 15.8252 9.53108 15.4686 9.81965C15.0995 10.1183 14.9607 10.5445 14.9607 11.0152C14.9607 11.5253 15.127 11.899 15.3942 12.1713C15.6518 12.4338 15.984 12.5818 16.2793 12.686C16.3979 12.7279 16.5174 12.765 16.6264 12.7988L16.7055 12.8234C16.8387 12.8651 16.9495 12.902 17.0403 12.942C17.2312 13.0263 17.2311 13.0778 17.2311 13.1008C17.2311 13.161 17.2136 13.1924 17.1696 13.2218C17.1082 13.2626 16.9768 13.3076 16.7273 13.3076C16.0751 13.3076 15.6414 13.0174 15.4349 12.8396Z" fill="currentColor" />
    </svg>
));
