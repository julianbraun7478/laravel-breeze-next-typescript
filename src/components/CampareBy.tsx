import React from 'react';

const CompareBy: React.FC = () => {
    return (
        <div className=" mt-20 flex w-[98.7vw] flex-col items-center gap-6 bg-black px-1 py-6">
            <span className="text-zinc-300">Compare with top players</span>
            <div className="flex flex-wrap items-center justify-center gap-20">
                <div className="flex flex-col items-center gap-2 w-[70px]">
                    {/* ChatGPT Icon */}
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#prefix__paint0_radial_980_20147)"/><defs><radialGradient id="prefix__paint0_radial_980_20147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"><stop offset=".067" stopColor="#9168C0"/><stop offset=".343" stopColor="#5684D1"/><stop offset=".672" stopColor="#1BA1E3"/></radialGradient></defs></svg>
                    <span className="text-zinc-300">Gemini</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-[70px]">
                    {/* Vercel Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512"><rect fill="#10A37F" width="512" height="512" rx="104.187" ry="105.042"/><path fill="#fff" fillRule="nonzero" d="M378.68 230.011a71.432 71.432 0 003.654-22.541 71.383 71.383 0 00-9.783-36.064c-12.871-22.404-36.747-36.236-62.587-36.236a72.31 72.31 0 00-15.145 1.604 71.362 71.362 0 00-53.37-23.991h-.453l-.17.001c-31.297 0-59.052 20.195-68.673 49.967a71.372 71.372 0 00-47.709 34.618 72.224 72.224 0 00-9.755 36.226 72.204 72.204 0 0018.628 48.395 71.395 71.395 0 00-3.655 22.541 71.388 71.388 0 009.783 36.064 72.187 72.187 0 0077.728 34.631 71.375 71.375 0 0053.374 23.992H271l.184-.001c31.314 0 59.06-20.196 68.681-49.995a71.384 71.384 0 0047.71-34.619 72.107 72.107 0 009.736-36.194 72.201 72.201 0 00-18.628-48.394l-.003-.004zM271.018 380.492h-.074a53.576 53.576 0 01-34.287-12.423 44.928 44.928 0 001.694-.96l57.032-32.943a9.278 9.278 0 004.688-8.06v-80.459l24.106 13.919a.859.859 0 01.469.661v66.586c-.033 29.604-24.022 53.619-53.628 53.679zm-115.329-49.257a53.563 53.563 0 01-7.196-26.798c0-3.069.268-6.146.79-9.17.424.254 1.164.706 1.695 1.011l57.032 32.943a9.289 9.289 0 009.37-.002l69.63-40.205v27.839l.001.048a.864.864 0 01-.345.691l-57.654 33.288a53.791 53.791 0 01-26.817 7.17 53.746 53.746 0 01-46.506-26.818v.003zm-15.004-124.506a53.5 53.5 0 0127.941-23.534c0 .491-.028 1.361-.028 1.965v65.887l-.001.054a9.27 9.27 0 004.681 8.053l69.63 40.199-24.105 13.919a.864.864 0 01-.813.074l-57.66-33.316a53.746 53.746 0 01-26.805-46.5 53.787 53.787 0 017.163-26.798l-.003-.003zm198.055 46.089l-69.63-40.204 24.106-13.914a.863.863 0 01.813-.074l57.659 33.288a53.71 53.71 0 0126.835 46.491c0 22.489-14.033 42.612-35.133 50.379v-67.857c.003-.025.003-.051.003-.076a9.265 9.265 0 00-4.653-8.033zm23.993-36.111a81.919 81.919 0 00-1.694-1.01l-57.032-32.944a9.31 9.31 0 00-4.684-1.266 9.31 9.31 0 00-4.684 1.266l-69.631 40.205v-27.839l-.001-.048c0-.272.129-.528.346-.691l57.654-33.26a53.696 53.696 0 0126.816-7.177c29.644 0 53.684 24.04 53.684 53.684a53.91 53.91 0 01-.774 9.077v.003zm-150.831 49.618l-24.111-13.919a.859.859 0 01-.469-.661v-66.587c.013-29.628 24.053-53.648 53.684-53.648a53.719 53.719 0 0134.349 12.426c-.434.237-1.191.655-1.694.96l-57.032 32.943a9.272 9.272 0 00-4.687 8.057v.053l-.04 80.376zm13.095-28.233l31.012-17.912 31.012 17.9v35.812l-31.012 17.901-31.012-17.901v-35.8z"/></svg>
                    <span className="text-zinc-300">ChatGPT</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-[70px]">
                    {/* GitHub Copilot Icon */}
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 678 1024"><path fillRule="evenodd" clipRule="evenodd" d="M342.444 322.924c-18.874 2.193-33.268 17.521-34.606 36.851-.577 8.329-.396 8.894 18.483 57.475 42.952 110.53 53.358 137.132 55.108 140.876 4.24 9.067 10.202 17.597 17.651 25.253 5.716 5.875 9.486 9.034 15.862 13.293 11.206 7.484 16.767 9.553 60.372 22.464 42.476 12.577 65.682 20.936 85.679 30.861 25.906 12.858 43.981 27.484 55.414 44.838 8.203 12.452 15.468 34.781 18.629 57.258 1.236 8.786 1.244 28.208.015 36.151-2.667 17.239-7.994 31.685-16.143 43.774-4.334 6.429-2.826 5.353 3.475-2.482 17.832-22.171 35.997-60.064 45.266-94.426 11.217-41.587 12.743-86.244 4.391-128.511-16.265-82.309-68.226-153.342-141.408-193.31-4.598-2.512-22.112-11.692-45.856-24.037a4043.836 4043.836 0 01-10.918-5.7 3538.72 3538.72 0 00-10.918-5.7c-3.603-1.873-13.975-7.277-23.049-12.008l-22.563-11.765a15928.295 15928.295 0 01-22.079-11.527c-23.528-12.317-33.487-17.296-36.326-18.16-2.978-.906-10.543-2.069-12.441-1.913-.4.033-2.217.233-4.038.445z" fill="url(#prefix__paint0_radial_2_17)"/><path d="M393.737 735.544c-1.304.772-3.134 1.89-4.068 2.483-.935.594-3.009 1.883-4.61 2.866a22001.025 22001.025 0 00-34.938 21.529 7534.492 7534.492 0 00-21.35 13.22c-4.004 2.484-8.262 5.102-9.463 5.818-1.201.716-6.332 3.876-11.403 7.022a7015.049 7015.049 0 01-19.652 12.132c-5.738 3.526-16.001 9.857-22.806 14.068a7967.29 7967.29 0 01-19.895 12.268c-4.137 2.536-7.958 4.986-8.492 5.444-.793.68-37.585 23.471-56.046 34.718-14.021 8.541-30.241 14.254-46.845 16.498-7.73 1.044-22.358 1.048-30.066.006-20.9-2.822-40.155-10.617-56.645-22.929-6.469-4.83-18.646-16.998-23.302-23.284-10.97-14.811-18.068-30.698-21.743-48.674-.846-4.137-1.646-7.63-1.778-7.764-.343-.347.277 5.902 1.397 14.072 1.164 8.497 3.644 20.787 6.316 31.298C29.023 907.68 87.856 973.842 167.5 1005.32c22.934 9.06 46.077 14.77 71.258 17.57 9.462 1.06 36.245 1.48 46.12.73 45.287-3.43 84.719-16.76 125.171-42.325 3.603-2.277 10.372-6.545 15.042-9.486 4.671-2.94 10.566-6.678 13.102-8.305 2.535-1.628 5.592-3.551 6.793-4.273a241.596 241.596 0 005.338-3.355c1.735-1.122 9.159-5.818 16.498-10.435l29.348-18.537 10.077-6.365.363-.229 1.11-.701.528-.334 7.419-4.686 25.64-16.195c32.67-20.529 42.412-27.736 57.59-42.604 6.328-6.197 15.868-16.777 16.342-18.12.096-.273 1.792-2.889 3.768-5.813 8.032-11.885 13.388-26.444 16.044-43.613 1.229-7.943 1.221-27.365-.015-36.151-2.389-16.987-7.817-36.255-13.669-48.524-9.597-20.118-30.041-38.398-59.41-53.12-8.109-4.065-16.483-7.785-17.418-7.736-.443.023-27.773 16.728-60.733 37.124-32.96 20.396-61.566 38.099-63.567 39.341a761.04 761.04 0 01-7.643 4.668l-18.859 11.698z" fill="url(#prefix__paint1_radial_2_17)"/><path d="M.141 637.697l.141 142.055 1.839 8.249c5.75 25.791 15.71 44.386 33.027 61.657 8.145 8.124 14.374 13.022 23.2 18.245 18.678 11.053 38.78 16.506 60.798 16.496 23.061-.012 43.01-5.764 63.567-18.329 3.469-2.12 17.062-10.489 30.206-18.598l23.898-14.743V495.643l-.007-154.186c-.005-98.368-.185-156.787-.496-161.37-1.96-28.801-14.005-55.278-34.259-75.305-6.216-6.146-11.527-10.251-27.349-21.14a76496.27 76496.27 0 01-32.026-22.056l-35.665-24.577C97.14 30.206 83.056 20.5 75.717 15.44 60.427 4.896 59.23 4.162 54.609 2.508 48.597.36 42.226-.43 36.169.224 18.517 2.13 4.386 14.876.712 32.204.14 34.9.034 70.78.027 265.516L.02 495.643H0l.141 142.054z" fill="url(#prefix__paint2_linear_2_17)"/><defs><radialGradient id="prefix__paint0_radial_2_17" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-130.909 491.984 211.76) scale(529.064 380.685)"><stop stopColor="#00CACC"/><stop offset="1" stopColor="#048FCE"/></radialGradient><radialGradient id="prefix__paint1_radial_2_17" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-23.195 2273.959 241.179) scale(572.26 953.69)"><stop stopColor="#00BBEC"/><stop offset="1" stopColor="#2756A9"/></radialGradient><linearGradient id="prefix__paint2_linear_2_17" x1="118.409" y1="0" x2="118.409" y2="884.399" gradientUnits="userSpaceOnUse"><stop stopColor="#00BBEC"/><stop offset="1" stopColor="#2756A9"/></linearGradient></defs></svg>
                    <span className="text-zinc-300">Bing AI</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-[70px]">
                    {/* Meta Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path d="M34.142 7.325A4.63 4.63 0 0029.7 4H28.35a4.63 4.63 0 00-4.554 3.794L21.48 20.407l.575-1.965a4.63 4.63 0 014.444-3.33h7.853l3.294 1.282 3.175-1.283h-.926a4.63 4.63 0 01-4.443-3.325l-1.31-4.461z" fill="url(#prefix__paint0_radial_56201_15503)"/><path d="M14.33 40.656A4.63 4.63 0 0018.779 44h2.87a4.63 4.63 0 004.629-4.51l.312-12.163-.654 2.233a4.63 4.63 0 01-4.443 3.329h-7.919l-2.823-1.532-3.057 1.532h.912a4.63 4.63 0 014.447 3.344l1.279 4.423z" fill="url(#prefix__paint1_radial_56201_15503)"/><path d="M29.5 4H13.46c-4.583 0-7.332 6.057-9.165 12.113C2.123 23.29-.72 32.885 7.503 32.885h6.925a4.63 4.63 0 004.456-3.358 2078.617 2078.617 0 014.971-17.156c.843-2.843 1.544-5.284 2.621-6.805C27.08 4.714 28.086 4 29.5 4z" fill="url(#prefix__paint2_linear_56201_15503)"/><path d="M29.5 4H13.46c-4.583 0-7.332 6.057-9.165 12.113C2.123 23.29-.72 32.885 7.503 32.885h6.925a4.63 4.63 0 004.456-3.358 2078.617 2078.617 0 014.971-17.156c.843-2.843 1.544-5.284 2.621-6.805C27.08 4.714 28.086 4 29.5 4z" fill="url(#prefix__paint3_linear_56201_15503)"/><path d="M18.498 44h16.04c4.582 0 7.332-6.058 9.165-12.115 2.171-7.177 5.013-16.775-3.208-16.775h-6.926a4.63 4.63 0 00-4.455 3.358 2084.036 2084.036 0 01-4.972 17.16c-.842 2.843-1.544 5.285-2.62 6.806-.604.852-1.61 1.566-3.024 1.566z" fill="url(#prefix__paint4_radial_56201_15503)"/><path d="M18.498 44h16.04c4.582 0 7.332-6.058 9.165-12.115 2.171-7.177 5.013-16.775-3.208-16.775h-6.926a4.63 4.63 0 00-4.455 3.358 2084.036 2084.036 0 01-4.972 17.16c-.842 2.843-1.544 5.285-2.62 6.806-.604.852-1.61 1.566-3.024 1.566z" fill="url(#prefix__paint5_linear_56201_15503)"/><defs><radialGradient id="prefix__paint0_radial_56201_15503" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-10.96051 -13.38922 12.59013 -10.30637 38.005 20.514)"><stop offset=".096" stopColor="#00AEFF"/><stop offset=".773" stopColor="#2253CE"/><stop offset="1" stopColor="#0736C4"/></radialGradient><radialGradient id="prefix__paint1_radial_56201_15503" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(51.84 -28.201 27.85) scale(15.9912 15.5119)"><stop stopColor="#FFB657"/><stop offset=".634" stopColor="#FF5F3D"/><stop offset=".923" stopColor="#C02B3C"/></radialGradient><radialGradient id="prefix__paint4_radial_56201_15503" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(109.274 16.301 20.802) scale(38.3873 45.9867)"><stop offset=".066" stopColor="#8C48FF"/><stop offset=".5" stopColor="#F2598A"/><stop offset=".896" stopColor="#FFB152"/></radialGradient><linearGradient id="prefix__paint2_linear_56201_15503" x1="12.5" y1="7.5" x2="14.788" y2="33.975" gradientUnits="userSpaceOnUse"><stop offset=".156" stopColor="#0D91E1"/><stop offset=".487" stopColor="#52B471"/><stop offset=".652" stopColor="#98BD42"/><stop offset=".937" stopColor="#FFC800"/></linearGradient><linearGradient id="prefix__paint3_linear_56201_15503" x1="14.5" y1="4" x2="15.75" y2="32.885" gradientUnits="userSpaceOnUse"><stop stopColor="#3DCBFF"/><stop offset=".247" stopColor="#0588F7" stopOpacity="0"/></linearGradient><linearGradient id="prefix__paint5_linear_56201_15503" x1="42.586" y1="13.346" x2="42.569" y2="21.215" gradientUnits="userSpaceOnUse"><stop offset=".058" stopColor="#F8ADFA"/><stop offset=".708" stopColor="#A86EDD" stopOpacity="0"/></linearGradient></defs></svg>
                    <span className="text-zinc-300">Copliot</span>
                </div>

                <div className="flex flex-col items-center gap-2 w-[70px]">
                    {/* Meta Icon */}
                    
                    <span className="text-zinc-300">Copliot</span>
                </div>
            </div>
        </div>
    );
};

export default CompareBy;
