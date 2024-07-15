import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
}

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'

    return (
        <nav>
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 font-bold`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-28`}>
                        {/* LEFT SIDE */}
                        <img src={Logo} alt="Logo" className='w-[150px] md:w-[200px]' />

                        {/* RIGHT SIDE */}
                        {isAboveMediumScreen ? ( 
                            <div className={`${flexBetween} w-full`}>
                                {/* links */}
                                <div className={`${flexBetween} gap-8 text-base`}>
                                    <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                </div>
                                {/* button */}
                                <div className={`${flexBetween} gap-8 text-lg`}>
                                    <p>Sign In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Be a member</ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button className='rounded-full bg-secondary-500 p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className='h-6 w-6 text-white' />
                            </button>   
                        )}
                    </div>
                </div>
            </div>

            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreen && isMenuToggled && (
                <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                    <div className='flex justify-end p-12'>
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className='h-6 w-6 text-gray-400' />
                        </button>
                    </div>
                    <div className='ml-[25%] flex flex-col gap-10 text-2xl'>
                        <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar