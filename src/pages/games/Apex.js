import React from 'react'

const Apex = () => {
    return (
        <div>
            <section className=' pt-[87px] flex justify-center' id='Banner'>
                <div className='absolute h-[300px] w-full overflow-hidden'>
                    <img
                        src={require(`../../images/Team Page/Esports Banner/Apex Banner.png`)}
                        className="h-full object-cover"
                        loading="lazy"
                        alt="Apex Banner"
                    />
                </div>
                <div className='absolute pt-5 sm:w-max w-[80%]'>
                    <img
                        src={require(`../../images/Team Page/Esports Banner/Apex Logo.png`)}
                        loading="lazy"
                        alt='Apex Logo'
                    />
                </div>
            </section>
                <section className='pt-80 font-Montserrat'>
                    <div id='varsity'>
                        <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F]'>
                            UCSC Wildfires
                        </div>
                        <div className='flex justify-center max-[1100px]:px-[50px] pt-3'>
                            <img src={require('../../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
                        </div>
                        <div className='min-[1100px]:px-[215px] px-[50px] text-[25px] pt-[30px] text-center'>
                            University of California, Santa Cruz | Apex Varsity Team
                        </div>
                        <div className='container mx-auto py-24 px-8 '>
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                                {/* {leagueTeamData.map((teamMember) => (
                                <TeamCard key={teamMember.id} {...teamMember} />
                            ))} */}
                            </div>
                        </div>
                    </div>
                    <div id='junior varsity'>
                        <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F]'>
                            UCSC Wolfpack
                        </div>
                        <div className='flex justify-center max-[1100px]:px-[50px] pt-3'>
                            <img src={require('../../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
                        </div>
                        <div className='min-[1100px]:px-[215px] px-[50px] text-[25px] pt-[30px] text-center'>
                            University of California, Santa Cruz | Apex Junior Varsity Team
                        </div>
                        <div className='container mx-auto py-24 px-8 '>
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                                {/* {leagueTeamData.map((teamMember) => (
                                <TeamCard key={teamMember.id} {...teamMember} />
                            ))} */}
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Apex