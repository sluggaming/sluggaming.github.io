import React from 'react'
import { FaInstagram, FaXTwitter, FaTwitch, FaYoutube, FaTiktok, FaFacebook, FaDiscord } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='font-Montserrat min-[1100px]:mx-[215px] sm:mx-20 mx-6'>
      <section id='Contact Us' className='leading-[50px] sm:pt-64 pt-36'>
        <div className='text-[#00588F] text-[40px]'>
          Contact Us
        </div>
        <div className='text-black sm:text-2xl text-lg'>
          Have a question or something to share? We're here to listen!
          Drop us a message through the contact form below and let's chat.
        </div>
      </section>
      <section id='Social' className='mt-[30px]'>
        <div className='text-3xl leading-10'> 
          Get Social With Us!
        </div>
        <div className='flex text-[#228BE6] flex-col sm:flex-row gap-5'>
          <span className='flex gap-5'>
            <Link to={"https://www.instagram.com/sluggamingucsc/?hl=en"}>
              <FaInstagram className='w-12 h-12 max-[600px]:w-9' />
            </Link>
            <Link to={"https://twitter.com/sluggamingucsc?lang=en"}>
              <FaXTwitter className='w-12 h-12 max-[600px]:w-9' />
            </Link>
            <Link to={"https://www.twitch.tv/slugesports"}>
              <FaTwitch className='w-12 h-12 max-[600px]:w-9' />
            </Link>
            <Link to={"https://www.youtube.com/@sluggaming114"}>
              <FaYoutube className='w-12 h-12 max-[600px]:w-9' />
            </Link>
          </span>
          <span className='flex gap-5'> 
            <Link to={"https://www.tiktok.com/@sluggamingucsc?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1"}>
              <FaTiktok className='w-12 h-12 max-[600px]:w-9' />
            </Link>
            <Link to={"https://www.facebook.com/sluggamingucsc/"}>
              <FaFacebook className='w-12 h-12 max-[600px]:w-9' />
            </Link>
            <Link to={"https://discord.com/invite/GKQdtHf32t"}>
              <FaDiscord className='w-12 h-12 max-[600px]:w-9' />
            </Link>
          </span>
        </div>
      </section>
      <section id='Contact Information' className='mt-5'>
        <div className='text-3xl leading-10'>
          Contact Information
        </div>
        <div className='text-black text-5'>
          1156 High Street<br />
          Santa Cruz, CA 95048<br />
          United States
        </div>
      </section>
      <section id="Button" className='pt-8 pb-24'>
        <div className='text-white'>
          <Link to={"mailto:ucscesportsclub@gmail.com"} className='min-[1100px]:text-base text-sm bg-[#228BE6] py-[20px] px-[34px] rounded-3xl'>
            Email Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Contact