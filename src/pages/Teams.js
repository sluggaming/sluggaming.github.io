import React from 'react'
import { Link } from 'react-router-dom'

const teams = [
  { name: 'Splatoon', image: '/splatoon.png', link: '/teams/splatoon' },
  { name: 'Apex', image: '/apex.png', link: '/teams/apex_legends' },
  { name: 'Overwatch', image: '/overwatch2.png', link: '/teams/overwatch' },
  { name: 'Valorant', image: '/valorant.png', link: '/teams/valorant' },
  { name: 'Rainbow Six', image: '/r6.png', link: '/teams/r6' },
  { name: 'League', image: '/league_of_legends.png', link: '/teams/league_of_legends' },
  { name: 'Marvel Rivals', image: '/marvel_rivals.png', link: '/teams/marvel_rivals' },
  { name: 'Counter Strike', image: '/counter_strike.png', link: '/teams/counter_strike' },
  { name: 'Rocket League', image: '/rocket_league.png', link: '/teams/rocket_league' },
  { name: 'Call of Duty', image: '/call_of_duty.png', link: '/teams/call_of_duty' },
]

const Teams = () => {
  return (
  <div className='pt-[21vh] pb-16 font-barlow-condensed bg-[#001a33] min-h-screen text-white'>
      <section className='max-w-7xl mx-auto px-4'>
        <div className='pb-6'>
          <div className='flex justify-center text-4xl md:text-6xl font-extrabold text-[#fac500] uppercase tracking-wide mb-2 drop-shadow-glow-cyan'>Our Esport Teams</div>
          <div className='flex justify-center pt-3 mb-6'>
            <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" className='w-48' />
          </div>
        </div>

        {/* Large screens: 5 pods per row, responsive grid */}
        <div className='hidden min-[1100px]:grid grid-cols-5 gap-6 p-4 justify-center items-stretch'>
          {teams.map((team) => (
            <Link to={team.link} key={team.name} className='relative w-full h-[180px] mx-1 rounded-2xl border-4 border-[#fac500] shadow-xl overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-glow-cyan cursor-pointer bg-[#012a4a]'>
              <img src={process.env.PUBLIC_URL + team.image} alt={team.name + " logo"} className='absolute inset-0 w-full h-full object-cover' />
              {team.name === 'Marvel Rivals' && (
                <span className='absolute top-2 right-2 bg-[#fac500] text-[#003c6b] text-[0.6rem] font-bold px-1 py-0.5 rounded-lg shadow-md z-10'>Coming Next Quarter</span>
              )}
            </Link>
          ))}
        </div>

        {/* Small screens: grid layout */}
        <div className='min-[1100px]:hidden grid grid-cols-2 gap-6 p-3'>
          {teams.map((team) => (
            <Link to={team.link} key={team.name} className='flex flex-col items-center justify-between bg-[#012a4a] rounded-2xl border-4 border-[#fac500] shadow-xl min-w-[140px] max-w-[180px] h-[220px] mx-auto relative transition-all duration-200 hover:scale-105 hover:shadow-glow-cyan cursor-pointer'>
              <img src={process.env.PUBLIC_URL + team.image} alt={team.name + " logo"} className='w-20 h-20 object-contain m-auto rounded-xl border-2 border-[#12a5dc] bg-[#003c6b]' />
              {team.name === 'Marvel Rivals' && (
                <span className='absolute top-2 right-2 bg-[#fac500] text-[#003c6b] text-xs font-bold px-2 py-1 rounded-lg shadow-md'>Coming Next Quarter</span>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Teams