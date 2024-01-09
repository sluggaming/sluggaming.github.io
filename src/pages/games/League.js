import React from 'react';
import leagueTeamData from '../../data/League Team.json';
import TeamCard from '../../components/Teams Page/TeamCard';

const League = () => {
    return (
        <div className="">
            <section className=' pt-[87px] flex justify-center' id='Banner'>
                <div className='absolute h-[300px] w-full overflow-hidden'>
                    <img
                        src={require(`../../images/Team Page/Esports Banner/LoL Banner.png`)}
                        className="h-full object-cover"
                        loading="lazy"
                        alt='LoL Banner'
                    />
                </div>
                <div className='absolute pt-5 sm:w-max w-[80%]'>
                    <img
                        src={require(`../../images/Team Page/Esports Banner/LoL Logo.png`)}
                        loading="lazy"
                        alt='LoL Logo'
                    />
                </div>
            </section>
                <section className='pt-80 font-Montserrat'>
                    <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F]'>
                        UCSC Black
                    </div>
                    <div className='flex justify-center max-[1100px]:px-[50px] pt-3'>
                        <img src={require('../../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
                    </div>
                    <div className='min-[1100px]:px-[215px] px-[50px] text-[25px] pt-[30px] text-center'>
                        University of California, Santa Cruz | League of Legends Varsity Team
                    </div>
                    <div className='container mx-auto pt-10 pb-24 px-8 '>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                            {leagueTeamData.map((teamMember) => (
                                <TeamCard key={teamMember.id} {...teamMember} />
                            ))}
                        </div>
                    </div>
                </section>
        </div >
    )
}

export default League;
