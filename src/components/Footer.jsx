import React from 'react'
import { AiFillYoutube } from "react-icons/ai";
import { FaXTwitter, FaTiktok, FaInstagram, FaDiscord } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer className='bg-[#003c6b] py-6 font-barlow-condensed border-t-4 border-[#fac500] relative'>
            <div className="container mx-auto px-4">
                <div className="my-8 flex flex-col md:flex-row items-center justify-between">
                    <Link to={'/'} className="flex items-center">
                        <img src={require('../images/Footer Component/SlugLogo.png')} alt="Slug Gaming Logo" className="w-28 h-28 mr-4 drop-shadow-glow-yellow" />
                        <div className="text-[#fac500]">
                            <p className="text-3xl font-extrabold uppercase tracking-wide">Slug Gaming</p>
                            <p className="text-lg font-bold">UC Santa Cruz</p>
                            <p className="text-sm">EST. 2014</p>
                        </div>
                    </Link>
                    <div className="text-[#fac500]">
                        <p className="text-sm mb-3 font-bold md:pt-0 pt-6 uppercase">Connect With Us</p>
                        <div className="flex gap-x-4 items-center">
                            <a href="https://www.youtube.com/@sluggaming114" className="text-[#fac500] hover:text-[#12a5dc] transition-all duration-200">
                                <AiFillYoutube className='w-8 h-8 hover:drop-shadow-glow-cyan' />
                            </a>
                            <a href="https://www.tiktok.com/@sluggamingucsc?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1"
                                className="text-[#fac500] hover:text-[#12a5dc] transition-all duration-200">
                                <FaTiktok className="w-8 h-8 hover:drop-shadow-glow-cyan" />
                            </a>
                            <a href="https://twitter.com/sluggamingucsc?lang=en" className="text-[#fac500] hover:text-[#12a5dc] transition-all duration-200">
                                <FaXTwitter className='w-8 h-8 hover:drop-shadow-glow-cyan' />
                            </a>
                            <a href="https://www.instagram.com/sluggamingucsc/?hl=en" className="text-[#fac500] hover:text-[#12a5dc] transition-all duration-200">
                                <FaInstagram className='w-8 h-8 hover:drop-shadow-glow-cyan' />
                            </a>
                            <a href="https://discord.com/invite/GKQdtHf32t" className="text-[#fac500] hover:text-[#12a5dc] transition-all duration-200">
                                <FaDiscord className='w-8 h-8 hover:drop-shadow-glow-cyan' />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Banana Slug watermark for brand cohesion */}
                <div className="absolute left-0 bottom-0 w-full flex justify-center opacity-10 pointer-events-none">
                    <img src={require('../images/Footer Component/SlugLogo.png')} alt="Banana Slug Watermark" className="w-64 h-20 object-contain" />
                </div>
            </div>

            <p className="text-[#fac500] text-xs text-center px-4 pb-4">
                This group is open to all students consistent with state and federal law, the UC Nondiscrimination Statement and the Nondiscrimination Policy Statement for University of California Publications Regarding Student-Related Matters
            </p>
        </footer>
    )
}

export default Footer