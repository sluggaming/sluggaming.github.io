import React from 'react'
import homePageData from '../data/Home Page.json'
import Event_Panel from '../components/Home Panel/Event Panel'

const Home = () => {
    return (
        <div>
            <section>
                <div className='max-[1100px]:pt-[87px] flex justify-center' id='Banner'>
                    <div className='w-full min-[1305px]:h-[950px] h-[850px] overflow-hidden'>
                        <img src={require('../images/Home Page/Base Banner.png')} alt='home-page-banner' className='h-full object-cover w-full' loading="lazy" />
                    </div>
                    <div className='absolute h-screen flex flex-col justify-center px-10'>
                        {/* <div className='min-[1250px]:text-7xl min-[1060px]:text-6xl min-[860px]:text-5xl min-[665px]:text-4xl min-[570px]:text-3xl min-[350px]:text-xl text-lg text-white font-akira-expanded justify-center darker-drop-shadow'> */}
                        <div className='xl:text-7xl lg:text-5xl sm:text-4xl min-[400px]:text-2xl min-[390px]:text-xl text-lg text-white font-akira-expanded justify-center darker-drop-shadow'>
                            <span>UNITE,</span>&nbsp;<span>PLAY,</span><span className='text-[#FFCC04]'>&nbsp;CONQUER</span>.
                        </div>
                        <div className="min-[1250px]text-4xl min-[665px]:text-4xl min-[570px]:text-2xl text-xl text-white font-kenyan-coffee flex justify-center darker-drop-shadow leading-[50px] tracking-wider">
                            The Main Hub for Esports at UC Santa Cruz
                        </div>
                    </div>
                </div>
            </section>

            <section className='m-8'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
                    {homePageData.map((homeDetail) => (
                        <Event_Panel key={homeDetail.id} {...homeDetail} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home