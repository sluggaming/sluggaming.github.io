import React from 'react'
import { Link } from 'react-router-dom'

const Recruitment = () => {
  return (
    <div className='font-Montserrat pt-36'>
      <section id='Recruitment'>
        <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F]'>
          Recruitment
        </div>
        <div className='flex justify-center max-[1100px]:px-12 pt-3'>
          <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
        </div>
        <div className='container mx-auto px-8 sm:text-2xl text-lg py-3 text-center text-slate-800'>
          Slug Esports is always looking out for new talent to join our teams for our collegiate games! If you are interested, here’s some basic information to help make this process easier.
        </div>
      </section>
      <section id='Requirements' className='container mx-auto sm:py-12 py-8 px-8'>
        <div className='text-black sm:text-4xl text-2xl'>
          Requirements
        </div>
        <ul className='list-disc sm:text-xl text-base pl-6 sm:leading-10 leading-1 text-slate-700'>
          <li>Must be a current or incoming full-time student at UCSC</li>
          <ul className='list-disc list-inside pl-5'>
            <li>Learn more about <u><a href='https://admissions.ucsc.edu/'>UCSC Admissions</a></u></li>
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


      <section id='Application Process' className='container mx-auto sm:pb-12 pb-8 px-8'>
        <div className='text-black sm:text-4xl text-2xl'>
          Application Process
        </div>
        <ul className='list-disc sm:text-xl text-base pl-6 sm:leading-10 leading-1 text-slate-700'>
          <li>Fill out our <u><a href='https://docs.google.com/forms/u/5/d/e/1FAIpQLSd23cajjT7NUSil7XdLnuHbh3DKDNCVmdSIZYrb4Ruzz7Tzxg/viewform?usp=send_form'>Recruitment Interest</a></u> form if you are an incoming or prospective student to help us track your UC application/status.</li>
          <li>Eligible applicants will be invited to try out as we prepare rosters for the new year.</li>
          <ul className='list-disc list-inside pl-[20px]'>
            <li>Please note that we may not respond to every applicant</li>
            <li>If you have any questions, feel free to email us (<u><a href='mailto:ucscesportsclub@gmail.com'>ucscesportsclub@gmail.com</a></u>)</li>
          </ul>
          <li>Tryout application forms will be released on our website, discord, and social media for current students and eligible incoming students.</li>
          <ul className='list-disc list-inside pl-[20px]'>
            <li>Please note the deadlines for the forms and dates for tryouts!</li>
          </ul>
          <li>Tryouts will be held during or shortly before the school year, depending on the season’s schedule.</li>
          <li>A final roster will be finalized before the season begins.</li>
        </ul>
      </section>


      <section id='Perks of Collegiate Player' className='container mx-auto sm:pb-12 pb-8 px-8'>
        <div className='text-black sm:text-4xl text-2xl'>
          Perks of Collegiate Player
        </div>
        <ul className='list-disc sm:text-xl text-base pl-6 sm:leading-10 leading-1 text-slate-700'>
          <li>Free Player Jersey for Varsity Team</li>
          <ul className='list-disc pl-6 sm:leading-10 leading-1'>
            <li>Discounted Player Jersey for Junior Varsity Team</li>
          </ul>
          <li>Social Media Advertisement (MVP, Team Rosters, Player Portraits, Play of the Game clips, and more)</li>
          <li>Discord role of “Collegiate Player”</li>
          <li>Shoutout in General Meeting after Tournaments</li>
          <li>Extra Entry in Giveaways</li>
        </ul>
      </section>


      <section id='Achievements' className='container mx-auto sm:pb-12 pb-8 px-8'>
        <div className='text-black sm:text-4xl text-2xl'>
          Achievements
        </div>
        <div className='sm:text-xl text-base sm:leading-10 leading-1 text-slate-700'>
          Check out our team's awesome achievements – from epic wins to incredible comebacks, our players have shown true gaming prowess and teamwork that's at the heart of Slug Gaming!
        </div>
        <div className='text-white py-8'>
          <Link to={'/achievements'} className='bg-[#00588F] sm:px-14 px-4 sm:py-7 py-4 rounded-3xl min-[1100px]:text-xl text-lg'>
            VIEW ACHIEVEMENTS
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Recruitment