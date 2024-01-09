import React from 'react'

const Achievements = () => {
  return (
    <div className='font-Montserrat pt-36'>
      <section id='Achievements'>
        <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F]'>
          Achievements
        </div>
        <div className='flex justify-center max-[1100px]:px-12 pt-3'>
          <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
        </div>
        <div className='container mx-auto px-8 sm:text-2xl text-lg py-3 text-center text-slate-800'>
          Step into the world of Slug Gaming's triumphs – where victories, comebacks, and team spirit paint the picture of our gaming excellence!
        </div>
      </section>
      <section id='Games' className='sm:py-12 py-3'>
        <div className='grid grid-cols-3 gap-8 max-lg:grid-cols-1 px-12'>
          <div>
            <div className='text-black sm:text-4xl text-2xl'>
              League of Legends
            </div>
            <ul className='list-disc sm:text-xl text-base pl-6 sm:leading-10 leading-1 text-slate-700'>
              <li>Zotac Cup #15 Top 3</li>
              <li>ONE Esports Community Tournament #4 Top 5</li>
              <li>CLoL West Conference Championship 2023 Top 5</li>
              <li>JsMethod Open Tournament Top 5</li>
              <li>CLoL West Conference Championship 2022 Top 9</li>
              <li>Fanime Tournament 2018 Winner</li>
              <li>Western Esports Conference Top 3</li>
              <li>Alliance Esports Tournament 2020 Winner</li>
              <li>CSL Division 3 Top 4</li>
            </ul>
          </div>


          <div>
            <div className='text-black sm:text-4xl text-2xl'>
              Valorant
            </div>
            <ul className='list-disc sm:text-xl text-base pl-6 sm:leading-10 leading-1 text-slate-700'>
              <li>PEL Spring 2022 Finalists </li>
              <li>Redbull Campus Clutch 2022 Northwest Finalists </li>
              <li>IGLeague Fall 2022 frenzy 3 winners</li>
              <li>CVAL West Fall 2022 Top 13</li>
              <li>UCEI 2023 Top 4</li>
              <li>NECC Spring 2023 Southwest Finalists</li>
              <li>CVAL West Spring  2023 Top 5</li>
              <li>PEL Spring 2023 North Winners</li>
              <li>PEL Spring 2023 California Champions</li>
              <li>HigherlanderCon Valorant Tournament Winner</li>
            </ul>
          </div>


          <div>
            <div className='text-black sm:text-4xl text-2xl'>
              Overwatch
            </div>
            <ul className='list-disc sm:text-xl text-base pl-6 sm:leading-10 leading-1 text-slate-700'>
              <li>NECC championship 2021 Winners</li>
              <li>Overwatch Collegiate Top 8-16 Nationally</li>
              <li>CSL GameStop Weeklies Winner</li>
              <li>Fanime Con 2017 Winner</li>
              <li>Fanime Con 2018 Winner</li>
            </ul>
          </div>



          <div>
            <div className='text-black sm:text-4xl text-2xl'>
              Apex Legends
            </div>
            <ul className='list-disc sm:text-xl text-base pl-6 sm:leading-10 leading-1 text-slate-700'>
              <li>2022 Summer Splash Tournament Winner</li>
              <li>Phase One League Finalist</li>
              <li>AVGL Collegiate Weekly Winner</li>
              <li>Octane Collegiate Summer Olympus Trios Winner</li>
              <li>Octane Collegiate Finalist</li>
              <li>ING Tourney #7 Top 3</li>
              <li>ING Tourney #6 Winner</li>
              <li>ING Tourney #5 Top 3</li>
              <li>ING Tourney #4 Top 4</li>
              <li>JDRF Charity Tourney Winner</li>
              <li>ING Tourney #2 Top 3</li>
              <li>ING Tourney #1 Top 4</li>
              <li>Revival Games Trios Tourney Winner</li>
            </ul>
          </div>


          <div>
            <div className='text-black sm:text-4xl text-2xl'>
              Counter Strike GO
            </div>
            <ul className='list-disc sm:text-xl text-base pl-6 sm:leading-10 leading-1 text-slate-700'>
              <li>CSL Tik Tok Cup #1 2019 Winner</li>
              <li>Division 1 NACCS Collegiate League 2019 Winner</li>
              <li>Division 2 NACCS Collegiate League 2019 Winner</li>
              <li>Collegiate Starleague Division 1 2019 Finalist</li>
            </ul>
          </div>


          <div>
            <div className='text-black sm:text-4xl text-2xl'>
              Rocket League
            </div>
            <ul className='list-disc sm:text-xl text-base pl-6 sm:leading-10 leading-1 text-slate-700'>
              <li>CCA Spring Open #1 Top 9</li>
              <li>Pacific Esports League Summer Splash Grand Finalists</li>
            </ul>
          </div>
        </div>
      </section>
      <section id='Banner' className='pb-12'>
        <div className='flex justify-center min-[1100px]:px-[215px] px-[50px] '>
          <img src={require('../images/Achivements Page/DIsplay.png')} alt='Yellow Line' loading="lazy" />
        </div>
      </section>
    </div>
  )
}

export default Achievements