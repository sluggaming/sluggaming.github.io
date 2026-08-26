import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithSkeleton from '../components/ImageWithSkeleton'

const teams = [
  { name: 'Splatoon', image: require('../images/Team Page/Esports Banner/splatoon.jpg'), link: '/teams/splatoon' },
  // use old public images for these teams per request
  { name: 'Apex', image: '/apex.png', link: '/teams/apex_legends' },
  { name: 'Overwatch', image: '/overwatch2.png', link: '/teams/overwatch' },
  { name: 'Valorant', image: '/valorant.png', link: '/teams/valorant' },
  { name: 'Rainbow Six', image: require('../images/Team Page/Esports Banner/rainbowsix.jpg'), link: '/teams/r6' },
  { name: 'League', image: '/league_of_legends.png', link: '/teams/league_of_legends' },
  { name: 'Counter Strike', image: require('../images/Team Page/Esports Banner/cs2.jpeg'), link: '/teams/counter_strike' },
  { name: 'Rocket League', image: '/rocket_league.png', link: '/teams/rocket_league' },
  // Marvel Rivals is an upcoming team — placed last so it shows on the rightmost pod and is greyed out
  { name: 'Marvel Rivals', image: require('../images/Team Page/Esports Banner/rivals.jpg'), link: '/teams/marvel_rivals', upcoming: true },
]

const Teams = () => {
  const getImage = (img) => {
    // img can be a require() string (already resolved) or a public path like '/apex.png'
    if (typeof img === 'string' && img.startsWith('/')) return process.env.PUBLIC_URL + img;
    return img;
  }
  return (
    <div className='pt-[16vh] pb-16 font-barlow-condensed bg-[#001a33] min-h-screen text-white'>
      <section className='max-w-7xl mx-auto px-4'>
        <div className='pb-6'>
          <div className='flex justify-center text-4xl md:text-6xl font-extrabold text-[#fac500] uppercase tracking-wide mb-2 drop-shadow-glow-cyan'>Our Esport Teams</div>
          <div className='flex justify-center pt-3 mb-6'>
            <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" className='w-48' />
          </div>
        </div>

        {/* Desktop: 8 pods in the first row; upcoming teams (Marvel Rivals) centered on a second row */}
        <div className='hidden min-[1100px]:block'>
          <div className='grid gap-6 p-4 justify-center items-stretch' style={{ gridTemplateColumns: 'repeat(8, 15.375%)' }}>
            {teams.filter(t => !t.upcoming).map((team) => (
              <Link
                to={team.link}
                key={team.name}
                className={`relative h-[420px] mx-1 rounded-2xl border-4 border-[#fac500] shadow-xl overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-glow-cyan cursor-pointer bg-[#012a4a]`}>
                <ImageWithSkeleton
                  src={getImage(team.image)}
                  alt={team.name + " logo"}
                  containerClassName="w-full h-full absolute inset-0"
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
          {/* Second row: center upcoming teams (e.g., Marvel Rivals) */}
          <div className='flex justify-center mt-6'>
            {teams.filter(t => t.upcoming).map((team) => (
              <div key={team.name} className={`relative w-1/4 max-w-[320px] h-[420px] mx-2 rounded-2xl border-4 border-[#fac500] shadow-xl overflow-hidden opacity-40 filter grayscale`}>
                <ImageWithSkeleton
                  src={getImage(team.image)}
                  alt={team.name + " logo"}
                  containerClassName="w-full h-full absolute inset-0"
                  className="w-full h-full object-cover"
                />
                <span className='absolute top-4 right-4 bg-[#6b7280] text-white text-[0.9rem] font-bold px-3 py-1 rounded-lg shadow-md z-10'>Coming Soon</span>
              </div>
            ))}
          </div>
        </div>

        {/* Small screens: grid layout */}
        <div className='min-[1100px]:hidden grid grid-cols-2 gap-6 p-3'>
          {teams.map((team) => (
            <Link
              to={team.upcoming ? '#' : team.link}
              key={team.name}
              className={`flex flex-col items-center justify-between bg-[#012a4a] rounded-2xl border-4 border-[#fac500] shadow-xl min-w-[140px] max-w-[180px] h-[220px] mx-auto relative transition-all duration-200 ${team.upcoming ? 'opacity-40 pointer-events-none filter grayscale' : 'hover:scale-105 hover:shadow-glow-cyan'} cursor-pointer`}>
              <img src={process.env.PUBLIC_URL + team.image} alt={team.name + " logo"} className='w-20 h-20 object-contain m-auto rounded-xl border-2 border-[#12a5dc] bg-[#003c6b]' />
              {team.upcoming && (
                <span className='absolute top-2 right-2 bg-[#6b7280] text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md'>Coming Soon</span>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Teams