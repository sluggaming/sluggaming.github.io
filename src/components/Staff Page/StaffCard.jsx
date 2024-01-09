import React from 'react'
// import ReactCardFlip from 'react-card-flip'
// import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaXTwitter, FaTwitch, FaGithub, FaTiktok } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";

const StaffCard = ({ name, role, location, image, username, pronouns, content, linkedin, instagram, twitter, personal, twitch, github, tiktok }) => {
  // const [isFlipped, setIsFlipped] = useState(false);

  // function flipCard() {
  //   setIsFlipped(!isFlipped);
  // }
  return (
    // <div className=''>
    //   <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
    //     <section id='front' className='card' onClick={flipCard}>
    //       <div className='shadow-lg rounded-[25px] '>
    //         <div className=''>
    //           <div className='rounded-t-[25px] z-2'>
    //             <img src={require(`../../images/Staff Page/${image}`)} alt={name} loading="lazy" width="745" height='676' />
    //           </div>
    //         </div>
    //         <div className='px-7 pt-7 pb-14 bg-[#00588F] rounded-b-[25px]'>
    //           <div className='text-3xl text-[#FFCC04] mb-3'>
    //             {name}
    //           </div>
    //           <div className='text-white text-2xl pt-1'>
    //             {role}
    //           </div>
    //           <div className='text-white text-2xl flex items-center pt-1'>
    //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='mr-2'>
    //               <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //               <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //             </svg>
    //             {location}
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section id='back'>
    //       <div className='bg-[#CCC] shadow-lg rounded-[25px] card card-back' onClick={flipCard}>
    //         <div className='p-7'>

    //         </div>
    //       </div>
    //     </section>
    //   </ReactCardFlip>
    // </div>
    <div className="flex justify-center flex-col">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow  hover:shadow-gray/30 rounded-[25px]">
        <img src={require(`../../images/Staff Page/${image}`)} alt={name} loading="lazy" className="object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" width="745" height='676' />
        {/* Shadows */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <div className="mb-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className='text-[#FFCC04] text-2xl'>{username}&nbsp;{pronouns}</div>
            <div className='text-white pt-5 text-base'>{content}</div>
          </div>
          {/* Button/s */}
          <div className="flex gap-2">
            {linkedin && (
              <Link to={linkedin} className="text-white">
                <FaLinkedin className='w-8 h-8' />
              </Link>
            )}
            {instagram && (
              <Link to={instagram} className="text-white">
                <FaInstagram className='w-8 h-8' />
              </Link>
            )}
            {twitter && (
              <Link to={twitter} className="text-white">
                <FaXTwitter className='w-8 h-8' />
              </Link>
            )}
            {personal && (
              <Link to={personal} className="text-white">
                <BsPersonCircle className='w-8 h-8' />
              </Link>
            )}
            {twitch && (
              <Link to={twitch} className="text-white">
                <FaTwitch className='w-8 h-8' />
              </Link>
            )}
            {github && (
              <Link to={github} className="text-white">
                <FaGithub className='w-8 h-8' />
              </Link>
            )}
            {tiktok && (
              <Link to={tiktok} className="text-white">
                <FaTiktok className='w-8 h-8' />
              </Link>
            )}
          </div>
        </div>
        <div className='px-7 pt-7 pb-14 bg-[#00588F]'>
          <div className='text-3xl text-[#FFCC04] mb-3'>
            {name}
          </div>
          <div className='text-white text-2xl pt-1'>
            {role}
          </div>
          <div className='text-white text-2xl flex items-center pt-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='mr-2'>
              <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {location}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffCard

// Citations:  https://play.tailwindcss.com/t8hoEfMek9