import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const About = () => {
  const [isOpenQuestion1, setOpenQuestion1] = useState(false);
  const [isOpenQuestion2, setOpenQuestion2] = useState(false);

  const toggleQuestion1 = () => {
    setOpenQuestion1(!isOpenQuestion1);
  };

  const toggleQuestion2 = () => {
    setOpenQuestion2(!isOpenQuestion2);
  };

  return (
    <div className='font-Montserrat'>
      <img src={require('../images/About Page/Banner.png')} alt='home-page-banner' loading="lazy" className='pt-20' />
      <section id="History of the Program">
        <div className=' flex-col justify-between m-8'>
          <p className='text-[#00588F] font-bold text-4xl'>History of the Program</p>
          <div className='text-black'>
            <p className='py-8 font-medium text-slate-800'>
              Slug Gaming is UC Santa Cruz’s student run gaming organization. We believe that gaming has created an outlet to bring people together, and provides a space where background, skill, interest, and other aspects of life are not the driving force for the community. We strive to make gaming and esports bigger, from not only the collegiate level, but as a whole.
            </p>
            <p className='font-medium text-slate-800'>
              Founder Andrew Cousins first developed the organization in hopes to unite the gaming community throughout UCSC. In order to unite gamers, Slug Gaming provides a welcoming and inclusive atmosphere for everyone no matter their background or skill level. Slug Gaming  host a variety of events and social gathers for games such as League of Legends, Overwatch, Hearthstone, etc. For those with a competitive drive Slug Gaming offers students a chance to compete with not  only each other, but against other universities. Slug Gaming continues to grow each year, and will eventually be the gamers home to not only UCSC but Santa Cruz.
            </p>
          </div>
        </div>
      </section>
      <div className='flex justify-center m-8'>
        <iframe src="https://calendar.google.com/calendar/embed?src=i4on7dqbm7f8dgnp2r4rrima1k%40group.calendar.google.com&ctz=America%2FLos_Angeles" title="calender" width="100%" height="800"></iframe>
      </div>
      <section id="Additional Info">
        <div className='flex-col justify-between m-8'>
          <div className='text-[#00588F] font-bold text-4xl mb-8'>
            About
          </div>
          <div className='text-black'>
            <div className='hover:bg-slate-100 border cursor-pointer' onClick={toggleQuestion1}>
              <button className='px-8 py-4 font-medium text-slate-800'>
                <div>How often does your student organization meet?</div>
              </button>
              {isOpenQuestion1 && (
                <div className='px-8 pb-4'>
                  We meet monthly in-person for a community game night and host quarterly intramurals for each game for members to play together in a mini Slug Gaming Tourney.
                </div>
              )}
            </div>
            <div className='hover:bg-slate-100 border cursor-pointer' onClick={toggleQuestion2}>
              <button className='px-8 py-4 font-medium text-slate-800'>
                What day and time does your student organization generally meet?
              </button>
              {isOpenQuestion2 && (
                <div className='px-8 pb-4'>
                  Community Game Nights are usually on FRIDAYS of the month at 6:30 PM. Check our socials for additional events such as: in-houses, watch parties, game nights, and more!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About