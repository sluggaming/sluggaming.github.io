import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Teams = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index)
  }

  const cardVariants = {
    expanded: {
      width: "400px"
    },
    collapsed: {
      width: "200px"
    }
  }

  const cardImages = [
    '/league_of_legends.png',
    '/valorant.png',
    '/overwatch2.png',
    '/apex.png',
    '/rocket_league.png',
    '/call_of_duty.png',

  ];

  const cardLink = [
    "/teams/league_of_legends",
    "/teams/valorant",
    "/teams/overwatch",
    "/teams/apex_legends",
    "/teams/rocket_league",
    "/teams/call_of_duty"
  ]

  return (
    <div className='pt-36 font-Montserrat'>
      <section className=''>
        <div className='pb-3'>
          <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F] font-semibold'>
            Our Esport Teams
          </div>
          <div className='flex justify-center max-[1100px]:px-[50px] pt-3'>
            <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
          </div>
        </div>

        {/* Bigger Screens */}
        <div className='flex-row justify-center items-center gap-5 p-8 min-[1100px]:flex hidden'>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <motion.div
              key={index}
              className={`cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded' : ''}`}
              variants={cardVariants}
              initial="collapsed"
              animate={index === expandedIndex ? 'expanded' : 'collapsed'}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${cardImages[index]})`,
              }}
            >
              {index === expandedIndex && (
                <div className='h-full flex flex-col justify-end'>
                  <div className='flex justify-center py-12'>
                    <Link to={cardLink[index]} className='p-2 rounded-lg text-white bg-[#00588F]'>See More</Link>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Small Screens */}
        <div className='min-[1100px]:hidden grid grid-cols-2 gap-3 p-3'>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <Link to={cardLink[index]}>
              <div
                key={index}
                className="cursor-pointer h-[300px] bg-cover bg-center rounded-[20px]"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}${cardImages[index]})`,
                }}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Teams