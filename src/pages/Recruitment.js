import React from 'react';
import { Link } from 'react-router-dom';

const Recruitment = () => {
  return (
    <div className='pt-[12vh] pb-16 font-barlow-condensed bg-[#001a33] min-h-screen text-white'>
      <section id='Recruitment' className='max-w-4xl mx-auto px-4'>
        <div className='flex justify-center text-4xl md:text-6xl font-extrabold text-[#fac500] uppercase tracking-wide mb-2 drop-shadow-glow-cyan mt-[4vh]'>Recruitment</div>
        <div className='flex justify-center pt-3 mb-6'>
          <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" className='w-48' />
        </div>
        <div className='text-center text-lg md:text-2xl text-cyan-200 mb-8 font-inter mt-[2vh]'>Slug Esports is always looking out for new talent to join our teams for our collegiate games! If you are interested, here’s some basic information to help make this process easier.</div>
      </section>

      <section id='Requirements' className='max-w-4xl mx-auto bg-[#012a4a] rounded-2xl border-4 border-[#fac500] shadow-xl p-8 mb-10'>
        <div className='text-[#fac500] text-2xl md:text-4xl font-extrabold mb-4'>Requirements</div>
        <ul className='list-disc text-base md:text-xl pl-6 leading-8 text-cyan-200'>
          <li>Must be a current or incoming full-time student at UCSC</li>
          <ul className='list-disc list-inside pl-5'>
            <li>Learn more about <u><a href='https://admissions.ucsc.edu/' className='text-[#12a5dc] hover:text-[#fac500]'>UCSC Admissions</a></u></li>
          </ul>
          <li>Minimum Rank for each game: (Peak of last season)</li>
          <ul className='list-disc list-inside pl-5'>
            <li>League of Legends: Diamond</li>
            <li>Valorant: Immortal</li>
            <li>Overwatch: Grandmaster</li>
            <li>Apex Legends: Gold</li>
            <li>Rocket League: Diamond</li>
            <li>Call of Duty: None</li>
          </ul>
        </ul>
      </section>

      <section id='Application Process' className='max-w-4xl mx-auto bg-[#012a4a] rounded-2xl border-4 border-[#fac500] shadow-xl p-8 mb-10'>
        <div className='text-[#fac500] text-2xl md:text-4xl font-extrabold mb-4'>Application Process</div>
        <ul className='list-disc text-base md:text-xl pl-6 leading-8 text-cyan-200'>
          <li>Fill out our <u><a href='https://docs.google.com/forms/u/5/d/e/1FAIpQLSd23cajjT7NUSil7XdLnuHbh3DKDNCVmdSIZYrb4Ruzz7Tzxg/viewform?usp=send_form' className='text-[#12a5dc] hover:text-[#fac500]'>Recruitment Interest</a></u> form if you are an incoming or prospective student to help us track your UC application/status.</li>
          <li>Eligible applicants will be invited to try out as we prepare rosters for the new year.</li>
          <ul className='list-disc list-inside pl-5'>
            <li>Please note that we may not respond to every applicant</li>
            <li>If you have any questions, feel free to email us (<u><a href='mailto:ucscesportsclub@gmail.com' className='text-[#12a5dc] hover:text-[#fac500]'>ucscesportsclub@gmail.com</a></u>)</li>
          </ul>
          <li>Tryout application forms will be released on our website, discord, and social media for current students and eligible incoming students.</li>
          <ul className='list-disc list-inside pl-5'>
            <li>Please note the deadlines for the forms and dates for tryouts!</li>
          </ul>
          <li>Tryouts will be held during or shortly before the school year, depending on the season’s schedule.</li>
          <li>A final roster will be finalized before the season begins.</li>
        </ul>
      </section>

      <section id='Perks of Collegiate Player' className='max-w-4xl mx-auto bg-[#012a4a] rounded-2xl border-4 border-[#fac500] shadow-xl p-8 mb-10'>
        <div className='text-[#fac500] text-2xl md:text-4xl font-extrabold mb-4'>Perks of Collegiate Player</div>
        <ul className='list-disc text-base md:text-xl pl-6 leading-8 text-cyan-200'>
          <li>Free Player Jersey for Varsity Team</li>
          <ul className='list-disc pl-6'>
            <li>Discounted Player Jersey for Junior Varsity Team</li>
          </ul>
          <li>Social Media Advertisement (MVP, Team Rosters, Player Portraits, Play of the Game clips, and more)</li>
          <li>Discord role of “Collegiate Player”</li>
          <li>Shoutout in General Meeting after Tournaments</li>
          <li>Extra Entry in Giveaways</li>
        </ul>
      </section>

      <section id='Achievements' className='max-w-4xl mx-auto bg-[#012a4a] rounded-2xl border-4 border-[#fac500] shadow-xl p-8 mb-10'>
        <div className='text-[#fac500] text-2xl md:text-4xl font-extrabold mb-4'>Achievements</div>
        <div className='text-base md:text-xl leading-8 text-cyan-200 mb-6'>Check out our team's awesome achievements – from epic wins to incredible comebacks, our players have shown true gaming prowess and teamwork that's at the heart of Slug Gaming!</div>
        <div className='text-center'>
          <Link to={'/achievements'} className='bg-[#12a5dc] hover:bg-[#fac500] hover:text-[#003c6b] px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition-all'>VIEW ACHIEVEMENTS</Link>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;