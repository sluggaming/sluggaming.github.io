import React from 'react'
import { AiFillYoutube } from "react-icons/ai";
import { FaXTwitter, FaTiktok, FaInstagram, FaDiscord } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#00588F] py-1 font-Montserrat'>
            <div class="container mx-auto px-4">
                <div class="my-8 flex flex-col md:flex-row items-center justify-between">
                    <Link to={'/'} class="flex items-center">
                        <img src={require('../images/Footer Component/SlugLogo.png')} alt="Slug Gaming Logo" class="w-32 h-30 mr-2"></img>
                        <div class="text-white">
                            <p class="text-2xl font-bold ">Slug Gaming</p>
                            <p class="text-lg ">UC Santa Cruz</p>
                            <p class="text-sm">EST. 2014</p>
                        </div>
                    </Link>
                    <div class="text-white">
                        <p class="text-sm mb-3 font-bold md:pt-0 pt-6 ">Connect With Us</p>
                        <div class="flex gap-x-4 items-center">
                            <a href="https://www.youtube.com/@sluggaming114" class="text-white">
                                <AiFillYoutube className='w-8 h-8' />
                            </a>
                            <a href="https://www.tiktok.com/@sluggamingucsc?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1"
                                class="text-white">
                                <FaTiktok className="w-8 h-8" />
                            </a>
                            <a href="https://twitter.com/sluggamingucsc?lang=en" class="text-white">
                                <FaXTwitter className='w-8 h-8' />
                            </a>
                            <a href="https://www.instagram.com/sluggamingucsc/?hl=en" class="text-white">
                                <FaInstagram className='w-8 h-8' />
                            </a>
                            <a href="https://discord.com/invite/GKQdtHf32t" class="text-white">
                                <FaDiscord className='w-8 h-8' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer