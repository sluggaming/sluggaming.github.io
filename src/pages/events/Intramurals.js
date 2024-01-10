import React from 'react';
import IntramuralCarousel from '../../components/Events/winter2024IntramuralCarousel';
import { Link } from 'react-router-dom';

const Intramurals = () => {

    return (
        <>
            <div className='pt-36 font-Montserrat'>
                <section id='Intramural'>
                    <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F] font-semibold'>
                        Intramurals
                    </div>
                    <div className='flex justify-center max-[1100px]:px-12 pt-3'>
                        <img src={require('../../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
                    </div>
                    <div className='container mx-auto px-8 sm:text-2xl text-lg py-3 text-center text-slate-800'>
                        Our Intramural Tournament is back, and this time, it's bigger, bolder, and more thrilling than ever before. Introducing Apex Legends, League of Legends, and Valorant in our Winter 2024 Intramural Tournament, come join us in an exhilarating journey through the heart of gaming.</div>
                </section>
                {/* <section className='grid min-[1200px]:grid-cols-2 grid-cols-1 m-8 gap-8 container mx-auto'> */}
                <section className='flex min-[1200px]:flex-row flex-col m-8 gap-8 container mx-auto'>
                    <span className='min-[1200px]:w-[60%]'><IntramuralCarousel /></span>
                    <div className='grid grid-rows-3 max-[1200px]:gap-8 min-[1200px]:w-[40%]'>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='font-akira-expanded sm:text-4xl text-2xl text-center'>Apex Legends</div>
                            <button className='bg-[#00588F] hover:bg-[#00588faf] text-white font-bold py-2 px-4 rounded-full duration-500'>
                                <Link to='https://forms.gle/mwKkH86RgPaERvZ57'>Sign up</Link>
                            </button>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='font-akira-expanded sm:text-4xl text-2xl text-center'>Valorant</div>
                            {/* <button className='bg-[#00588F] hover:text-[#FFCC04] text-white font-bold py-2 px-4 rounded-full duration-500'>Sign up</button> */}
                            <div className='text-xl'>Coming Soon...</div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='font-akira-expanded sm:text-4xl text-2xl text-center'>League of Legends</div>
                            <button className='bg-[#00588F] hover:bg-[#00588faf] text-white font-bold py-2 px-4 rounded-full duration-500'>
                                <Link to='https://docs.google.com/forms/d/e/1FAIpQLSe6BN1_C2MFq7U0qHDkvB_cLNLaHM-JhbRoAPeLl0NgyX7C7g/viewform'>Sign up</Link>
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default Intramurals;
