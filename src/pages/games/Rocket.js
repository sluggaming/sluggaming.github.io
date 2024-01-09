import React from 'react'
import rocketTeamData from '../../data/Rocket Team.json'
import TeamCard from '../../components/Teams Page/TeamCard'

const Rocket = () => {
  return (
    <div>
      <section className=' pt-[87px] flex justify-center' id='Banner'>
        <div className='absolute h-[300px] w-full overflow-hidden'>
          <img
            src={require(`../../images/Team Page/Esports Banner/Rocket League Banner.png`)}
            className="h-full object-cover"
            loading="lazy"
            alt='Rocket League Banner'
          />
        </div>
        <div className='absolute pt-5 sm:w-max w-[80%]'>
          <img
            src={require(`../../images/Team Page/Esports Banner/Rocket League Logo.png`)}
            loading="lazy"
            alt='Rocket League Logo'
          />
        </div>
      </section>
        <section className='pt-80 font-Montserrat'>
          <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F]'>
            UCSC Gold
          </div>
          <div className='flex justify-center max-[1100px]:px-[50px] pt-3'>
            <img src={require('../../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
          </div>
          <div className='min-[1100px]:px-[215px] px-[50px] text-[25px] pt-[30px] text-center'>
            University of California, Santa Cruz | Rocket League Varsity Team
          </div>
          <div className='container mx-auto pb-24 pt-12 px-8 '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
              {rocketTeamData.map((teamMember) => (
                <TeamCard key={teamMember.id} {...teamMember} />
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default Rocket