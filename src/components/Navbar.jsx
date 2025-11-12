import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    let Links = [
        { name: "About", link: "/about" },
        { name: "Staff", link: "/staff" },
        { name: "Contact", link: "/contact" },
        { name: "Recruitment", link: "/recruitment" },
        { name: "Teams", link: "/teams" },
    ];

    let [open, setOpen] = useState(false);
    const closeNavbar = () => {
        setOpen(false);
    };
    return (
    <div className='fixed w-full shadow-lg z-50 bg-[#003c6b] border-b-4 border-[#fac500]'>
        <div className='flex items-center justify-between px-8 py-2'>
            <div className='font-barlow-condensed font-extrabold text-[2.2rem] tracking-tight flex items-center text-[#fac500] uppercase rounded-xl px-2 py-1 bg-[#003c6b] shadow-lg' style={{letterSpacing: '2px'}}>
                <Link to={"/"} className='mr-5 flex items-center'>
                    <img src={require('../images/Navigation Component/SLUGS.png')} alt='slug-logo' onClick={closeNavbar} className='w-[90px] drop-shadow-glow-yellow' />
                </Link>
                {/* Optional: Add a subtle slug watermark or silhouette here */}
            </div>
            <div onClick={() => setOpen(!open)} className='text-3xl text-[#fac500] absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer min-[1100px]:hidden'>
                <AiOutlineMenu />
            </div>
            <ul className={`ease-in duration-100 min-[1100px]:flex min-[1100px]:items-center min-[1100px]:pb-0 pb-4 absolute min-[1100px]:static min-[1100px]:z-auto z-[1] left-0 w-full min-[1100px]:w-auto min-[1100px]:pl-0 pl-4 pr-4 bg-[#003c6b] transition-all ${open ? 'top-full' : 'top-[-490px]'} flex flex-col min-[1100px]:flex-row items-center justify-center`}>
                {
                    Links.map((link) => (
                        <li key={link.name} className='min-[1100px]:ml-[32px] text-lg min-[1100px]:text-xl font-barlow-condensed font-bold tracking-[2px] text-[#fac500] uppercase min-[1100px]:my-0 my-3 rounded-xl px-4 py-2 transition-all duration-200 hover:bg-[#006aad] hover:text-[#fac500] hover:shadow-glow-cyan w-full min-[1100px]:w-auto text-center'>
                            <Link to={link.link} className='text-[#fac500] hover:text-[#12a5dc] duration-200 block' onClick={closeNavbar}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
    )
}

export default Navbar