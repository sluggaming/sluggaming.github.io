import React from 'react'
import StaffCard from '../components/Staff Page/StaffCard'
import esportsDirectorData from '../data/Esports Director.json'
import executiveBoardData from '../data/Executive Board.json'
import teamLeadsData from '../data/Team Leads.json'

const Staff = () => {
  return (
    <div className='pt-36 font-Montserrat'>
      <section id='Executive Board'>
        <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F]'>
          Executive Board
        </div>
        <div className='flex justify-center max-[1100px]:px-[50px] pt-3'>
          <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
        </div>
        <div className='container mx-auto px-8 sm:text-2xl text-lg py-3 text-center'>
          Overseeing the backbone of Slug Gaming, the Executive Board arranges club meetings, sign-offs on official paperwork, and manages all the background tasks needed to keep the club running.
        </div>
        <div className='container mx-auto p-8'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {executiveBoardData.map((staffMember) => (
              <StaffCard key={staffMember.id} {...staffMember} />
            ))}
          </div>
        </div>
      </section>
      <section id='Esports Director'>
        <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F]'>
          Esports Director
        </div>
        <div className='flex justify-center max-[1100px]:px-[50px] pt-3'>
          <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
        </div>
        <div className='container mx-auto px-8 sm:text-2xl text-lg pt-3 text-center'>
          Working hard for our competitive teams, Esports Directors work with our variety of gaming teams to organize scrimmages, handle tournament schedules, and ensure success for our Esports scene.
        </div>
        <div className='container mx-auto p-8'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {esportsDirectorData.map((staffMember) => (
              <StaffCard key={staffMember.id} {...staffMember} />
            ))}
          </div>
        </div>
      </section>
      <section id='Team Leads' className='pb-[50px]'>
        <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F]'>
          Staff
        </div>
        <div className='flex justify-center max-[1100px]:px-[50px] pt-3'>
          <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
        </div>
        <div className='container mx-auto px-8 sm:text-2xl text-lg pt-3 text-center'>
          Dedicated to fostering a thriving gaming community, staff directors work to keep the community informed on the Esports scene through live streams, social media updates, and engaging social gaming nights.        </div>
        <div className='container mx-auto p-8'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {teamLeadsData.map((staffMember) => (
              <StaffCard key={staffMember.id} {...staffMember} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;