import React from 'react'
import '../assets/master.css'

const Header = () => {
    return (
        <div className='flex justify-center w-full'>
            <header className='w-[80%]  h-[100px] flex'>
                <div className=' w-[50%] md:w-[25%] flex items-center justify-start'>
                    <svg width="163" height="49" viewBox="0 0 163 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_75_2)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.1499 7.92055L42.638 13.4086C42.6543 13.4218 42.6744 13.4292 42.6954 13.4299C43.5347 12.614 44.0124 11.496 44.0217 10.3254C44.0309 9.15484 43.5712 8.02943 42.7449 7.20029L39.0887 3.54417C38.2654 2.72014 37.1481 2.25708 35.9831 2.25708C34.8181 2.25708 33.7009 2.72014 32.8773 3.54424L21.9688 14.4584L23.7944 17.7214L25.9174 15.5984L33.5929 7.92055C34.5753 6.93879 36.1675 6.93879 37.1499 7.92055V7.92055Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5176 20.4474L20.2648 14.6338L20.2586 14.622L13.9432 3.33443C13.8492 3.16452 13.731 3.00905 13.5926 2.8729C13.0884 2.37236 12.3662 2.15906 11.6709 2.3052L17.2321 18.2561L23.5176 20.4474Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.92763 37.6296C4.92537 36.9624 5.19008 36.322 5.66277 35.8511L15.4667 26.0488L12.2037 24.2239L1.28879 35.1387C-0.424387 36.8548 -0.424387 39.6341 1.28879 41.3502L4.94491 45.0063C5.76785 45.8314 6.88532 46.2951 8.05062 46.2951C9.21593 46.2951 10.3334 45.8314 11.1563 45.0063V44.8994L5.66269 39.4082C5.19001 38.9374 4.92523 38.2969 4.92763 37.6296V37.6296Z" fill="black" />
                            <path d="M25.5894 32.4926C25.3122 32.4492 25.0791 32.2613 24.9777 31.9996L23.6945 28.6847C22.8516 29.1068 21.8838 29.208 20.9717 28.9693L22.5033 33.3724C22.5812 33.598 22.5522 33.8468 22.4247 34.0486C21.3806 35.7139 21.2516 38.3055 22.0867 40.8104C23.3132 44.4807 26.3365 46.926 28.6913 46.1429C29.5626 45.8218 30.2672 45.1622 30.6452 44.3141C31.4957 42.2808 31.5337 39.9987 30.7513 37.9383C29.7731 35.0102 27.6989 32.8228 25.5894 32.4926V32.4926ZM29.3076 43.1205C29.0698 43.6616 28.6244 44.0843 28.0716 44.2936C27.8867 44.355 27.6931 44.3858 27.4984 44.3848C26.0163 44.3848 24.2928 42.6991 23.5042 40.3442C22.9241 38.8229 22.937 37.139 23.5404 35.6266C23.7789 35.0849 24.2256 34.6621 24.7796 34.4535C26.3521 33.9291 28.4538 35.736 29.3462 38.4038C29.9255 39.9251 29.9117 41.6087 29.3076 43.1205V43.1205Z" fill="black" />
                            <path d="M38.5485 24.3534C36.0451 23.509 33.4567 23.6379 31.7921 24.6868C31.5893 24.8139 31.3401 24.8427 31.1136 24.7654L0.0482809 13.9299C-0.10019 14.6228 0.113328 15.3435 0.615182 15.8437C0.748339 15.982 0.900602 16.1006 1.0673 16.1959L19.951 26.7531L19.966 26.7618L20.8364 27.2485C21.7282 27.741 22.8379 27.5873 23.5624 26.8711C23.784 26.6458 24.0878 26.3458 24.3108 26.1257C24.7427 25.6913 25.3901 25.5527 25.962 25.7719L29.7463 27.2351C30.0087 27.3365 30.197 27.5703 30.2401 27.8484C30.5664 29.9611 32.7561 32.0345 35.6802 33.0086C37.7411 33.7927 40.0244 33.7553 42.0584 32.9041C42.9043 32.5273 43.5619 31.8247 43.8818 30.9557C44.6782 28.56 42.2848 25.5989 38.5485 24.3534V24.3534ZM21.3356 24.7073C21.1108 24.9322 20.7726 24.9995 20.4787 24.8778C20.1849 24.7561 19.9932 24.4695 19.9932 24.1514C19.9932 23.8333 20.1848 23.5466 20.4787 23.4249C20.7725 23.3032 21.1107 23.3705 21.3356 23.5955C21.641 23.9023 21.641 24.3981 21.3356 24.7049V24.7073ZM42.0387 30.329C41.83 30.8832 41.4069 31.3298 40.8648 31.5682C40.1706 31.888 39.4124 32.0445 38.6483 32.0258C37.797 32.02 36.952 31.8777 36.1456 31.6044C33.4786 30.7111 31.6694 28.6166 32.1947 27.037C32.4034 26.4829 32.8265 26.0362 33.3686 25.7978C34.8809 25.1947 36.5647 25.1818 38.0862 25.7616C40.7548 26.6509 42.5639 28.7424 42.0387 30.329V30.329Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8922 42.5241C15.5821 42.8282 15.0857 42.8282 14.7756 42.5241L7.99805 35.7386L9.10669 34.63L15.8922 41.4076C16.1988 41.7166 16.1988 42.2151 15.8922 42.5241Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8404 39.5758C18.5303 39.8799 18.0339 39.8799 17.7239 39.5758L10.9463 32.7903L12.0549 31.6817L18.8404 38.4593C19.147 38.7683 19.147 39.2668 18.8404 39.5758Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5542 34.2767C20.3289 34.8434 20.1706 35.4345 20.0825 36.0379L13.8945 29.85L15.0111 28.7335L20.5542 34.2767Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.78 22.3413C33.1763 22.4284 32.5851 22.5868 32.0187 22.813L26.4756 17.2698L27.5921 16.1533L33.78 22.3413Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3179 21.0983C37.0079 21.4024 36.5115 21.4024 36.2014 21.0983L29.4238 14.3207L30.5403 13.2042L37.3179 19.9818C37.6246 20.2909 37.6246 20.7894 37.3179 21.0983V21.0983Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.2662 18.1501C39.9561 18.4542 39.4597 18.4542 39.1497 18.1501L32.3721 11.3725L33.4886 10.256L40.2662 17.0336C40.5728 17.3426 40.5728 17.841 40.2662 18.1501V18.1501Z" fill="black" />
                        </g>
                        <path d="M64.9418 37V36.5303H56.1613L65.7367 12.0677V11.9593H53.0176V12.4291H61.22L51.7168 36.9277V37H64.9418ZM72.4641 37.3613C74.9573 37.3613 76.764 36.1689 77.5951 34.2177V37H81.4975V24.3171C81.4975 20.3785 78.5345 17.813 74.6321 17.813C70.7296 17.813 67.7306 20.3785 67.7306 23.9919H71.7053C71.7053 23.6305 71.6691 23.1608 71.6691 22.7633C71.6691 19.6197 73.0783 18.2827 74.6321 18.2827C76.2942 18.2827 77.5951 19.5835 77.5951 22.6188V26.2683H72.6086C69.0675 26.2683 66.502 28.5808 66.502 31.9051C66.502 35.0126 68.923 37.3613 72.4641 37.3613ZM74.0178 36.1689C71.8137 36.1689 70.4767 34.29 70.4767 31.6883C70.4767 28.7976 72.0305 26.738 74.596 26.738H77.5951V31.6883C77.5951 34.29 76.0774 36.1689 74.0178 36.1689ZM87.2874 14.7416C88.552 14.7416 89.5638 13.7299 89.5638 12.4291C89.5638 11.1283 88.552 10.1526 87.2874 10.1526C85.9504 10.1526 84.9387 11.1283 84.9387 12.4291C84.9387 13.7299 85.9504 14.7416 87.2874 14.7416ZM89.2024 37V18.1743H85.3V37H89.2024ZM97.0353 37V8.74343H93.1328V37H97.0353ZM110.217 37.3613C115.89 37.3613 120.19 33.3144 120.19 27.5691C120.19 21.86 115.89 17.813 110.217 17.813C104.544 17.813 100.244 21.86 100.244 27.5691C100.244 33.3144 104.544 37.3613 110.217 37.3613ZM110.217 36.8916C106.567 36.8916 104.255 33.0976 104.255 27.5691C104.255 21.6432 106.748 18.2827 110.217 18.2827C113.83 18.2827 116.179 22.0768 116.179 27.5691C116.179 33.5312 113.649 36.8916 110.217 36.8916ZM132.624 37.3613C138.297 37.3613 142.597 33.3144 142.597 27.5691C142.597 21.86 138.297 17.813 132.624 17.813C126.951 17.813 122.651 21.86 122.651 27.5691C122.651 33.3144 126.951 37.3613 132.624 37.3613ZM132.624 36.8916C128.974 36.8916 126.662 33.0976 126.662 27.5691C126.662 21.6432 129.155 18.2827 132.624 18.2827C136.237 18.2827 138.586 22.0768 138.586 27.5691C138.586 33.5312 136.057 36.8916 132.624 36.8916ZM156.693 37H160.596V23.7028C160.596 20.3062 158.211 17.813 154.886 17.813C152.429 17.813 150.55 19.1861 149.719 21.2457V18.1743H145.817V37H149.719V23.3776C149.719 21.0289 151.237 19.2222 153.26 19.2222C155.284 19.2222 156.693 21.1373 156.693 23.486V37Z" fill="black" />
                        <defs>
                            <clipPath id="clip0_75_2">
                                <rect width="44.038" height="44.038" fill="white" transform="translate(0 2.25879)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <nav className=' hidden md:flex md:w-[50%] h-full'>
                    <ul className='w-full h-full flex '>
                        <li className=' flex h-full items-center justify-center text-black mx-4 font-melo text-xl hover:text-[#3c3939]'>Home</li>
                        <li className=' flex h-full items-center justify-center text-black mx-4 font-melo text-xl hover:text-[#3c3939]'>About us</li>
                        <li className=' flex h-full items-center justify-center text-black mx-4 font-melo text-xl hover:text-[#3c3939]'>Services</li>
                        <li className=' flex h-full items-center justify-center text-black mx-4 font-melo text-xl hover:text-[#3c3939]'>shop</li>

                    </ul>
                </nav>
                <div className=' w-[50%] md:w-[25%] flex justify-evenly items-center'>
                    <div className=' flex justify-center items-center w-[50px] h-[50px] rounded-[50%] cursor-pointer'>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.765137 0.688667C0.765137 0.509906 0.836149 0.338467 0.962552 0.212064C1.08896 0.0856609 1.26039 0.0146484 1.43916 0.0146484H3.46121C3.61156 0.01469 3.75758 0.0649985 3.87604 0.157574C3.99451 0.250149 4.07862 0.379675 4.11501 0.525554L4.66096 2.71072H20.3117C20.4106 2.71081 20.5084 2.7327 20.5979 2.77482C20.6875 2.81695 20.7667 2.87828 20.8299 2.95445C20.893 3.03063 20.9387 3.11979 20.9635 3.21559C20.9883 3.31139 20.9918 3.41148 20.9736 3.50876L18.9515 14.2931C18.9226 14.4475 18.8406 14.587 18.7198 14.6874C18.5989 14.7879 18.4468 14.8429 18.2896 14.8431H6.15729C6.00015 14.8429 5.848 14.7879 5.72714 14.6874C5.60628 14.587 5.52431 14.4475 5.4954 14.2931L3.47469 3.52898L2.93548 1.36269H1.43916C1.26039 1.36269 1.08896 1.29167 0.962552 1.16527C0.836149 1.03887 0.765137 0.867428 0.765137 0.688667ZM4.94675 4.05876L6.71672 13.495H17.7302L19.5002 4.05876H4.94675ZM7.50532 14.8431C6.79028 14.8431 6.10452 15.1271 5.59891 15.6327C5.0933 16.1383 4.80925 16.8241 4.80925 17.5391C4.80925 18.2542 5.0933 18.9399 5.59891 19.4455C6.10452 19.9512 6.79028 20.2352 7.50532 20.2352C8.22037 20.2352 8.90612 19.9512 9.41173 19.4455C9.91735 18.9399 10.2014 18.2542 10.2014 17.5391C10.2014 16.8241 9.91735 16.1383 9.41173 15.6327C8.90612 15.1271 8.22037 14.8431 7.50532 14.8431ZM16.9416 14.8431C16.2265 14.8431 15.5408 15.1271 15.0352 15.6327C14.5296 16.1383 14.2455 16.8241 14.2455 17.5391C14.2455 18.2542 14.5296 18.9399 15.0352 19.4455C15.5408 19.9512 16.2265 20.2352 16.9416 20.2352C17.6566 20.2352 18.3424 19.9512 18.848 19.4455C19.3536 18.9399 19.6377 18.2542 19.6377 17.5391C19.6377 16.8241 19.3536 16.1383 18.848 15.6327C18.3424 15.1271 17.6566 14.8431 16.9416 14.8431ZM7.50532 16.1911C7.86284 16.1911 8.20572 16.3331 8.45853 16.5859C8.71133 16.8387 8.85336 17.1816 8.85336 17.5391C8.85336 17.8967 8.71133 18.2395 8.45853 18.4923C8.20572 18.7451 7.86284 18.8872 7.50532 18.8872C7.1478 18.8872 6.80492 18.7451 6.55212 18.4923C6.29931 18.2395 6.15729 17.8967 6.15729 17.5391C6.15729 17.1816 6.29931 16.8387 6.55212 16.5859C6.80492 16.3331 7.1478 16.1911 7.50532 16.1911ZM16.9416 16.1911C17.2991 16.1911 17.642 16.3331 17.8948 16.5859C18.1476 16.8387 18.2896 17.1816 18.2896 17.5391C18.2896 17.8967 18.1476 18.2395 17.8948 18.4923C17.642 18.7451 17.2991 18.8872 16.9416 18.8872C16.5841 18.8872 16.2412 18.7451 15.9884 18.4923C15.7356 18.2395 15.5935 17.8967 15.5935 17.5391C15.5935 17.1816 15.7356 16.8387 15.9884 16.5859C16.2412 16.3331 16.5841 16.1911 16.9416 16.1911Z" fill="#212123" />
                        </svg>

                    </div>
                    <button className=' flex justify-center items-center w-[150px] h-[50px] bg-[#0e0d0d] text-white font-melo'>Reserve Now</button>
                </div>

            </header>

        </div>
    )
}

export default Header