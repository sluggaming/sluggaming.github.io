import React from 'react'

const COD = () => {
  return (

    <div>
      <section className=' pt-[87px] flex justify-center' id='Banner'>
        <div className='absolute h-[300px] w-full overflow-hidden'>
          <img
            src={require(`../../images/Team Page/Esports Banner/COD Banner.png`)}
            className="h-full object-cover"
            loading="lazy"
            alt='COD Banner'
          />
        </div>
        <div className='absolute pt-5 sm:w-max w-[80%]'>
          <img
            src={require(`../../images/Team Page/Esports Banner/COD Logo.png`)}
            loading="lazy"
            alt='COD Logo'
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
            Coming Soon...
          </div>
          <div className='container mx-auto py-24 px-8 '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
              {/* {leagueTeamData.map((teamMember) => (
                            <TeamCard key={teamMember.id} {...teamMember} />
                        ))} */}
            </div>
          </div>
        </section>
    </div>

  )
}

export default COD