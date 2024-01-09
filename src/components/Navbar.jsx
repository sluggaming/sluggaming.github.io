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
        <div className='fixed w-full shadow-lg z-10'>
            <div className='bg-[#00588F] items-center justify-between min-[1100px]:flex min-[1100px]:px-10 px-5'>
                <div className='font-bold text-[32px] tracking-[0.96px] cursor-pointer flex items-center text-[#FFCC04] font-Montserrat uppercase'>
                    <Link to={"/"} className='mr-5'>
                        {/* <img src={require('../images/Navigation Component/Slug.png')} alt='slug-logo' onClick={closeNavbar}></img> */}
                        <img src={require('../images/Navigation Component/SLUGS.png')} alt='slug-logo' onClick={closeNavbar} className='w-[100px]'></img>
                    </Link>
                    <Link to={"/"} className='sm:block hidden'> Slug Gaming </Link>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl text-[#FFCC04] absolute right-8 top-7 cursor-pointer min-[1100px]:hidden'>
                    <AiOutlineMenu />
                </div>
                <ul className={`ease-in duration-100 min-[1100px]:flex min-[1100px]:items-center min-[1100px]:pb-0 pb-2 absolute min-[1100px]:static min-[1100px]:z-auto z-[1] left-0 w-full min-[1100px]:w-auto min-[1100px]:pl-0 pl-9 bg-[#00588F] transition-all ${open ? '' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='min-[1100px]:ml-[32px] text-xl font-bold tracking-[0.96px] text-[32px] uppercase font-Montserrat min-[1100px]:my-0 my-7'>
                                <Link to={link.link} className='text-white hover:text-[#FFCC04] duration-500' onClick={closeNavbar}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar