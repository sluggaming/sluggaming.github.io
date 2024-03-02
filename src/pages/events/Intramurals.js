import React from 'react';
import IntramuralCarousel from '../../components/Events/winter2024IntramuralCarousel';
import { FaInstagram, FaXTwitter, FaTwitch, FaYoutube, FaTiktok, FaFacebook, FaDiscord } from "react-icons/fa6";
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
                        Our Intramural Tournament is back, and this time, it's bigger, bolder, and more thrilling than ever before. Introducing Apex Legends, League of Legends, Overwatch, Rocket League and Valorant in our Winter 2024 Intramural Tournament, come join us in an exhilarating journey through the heart of gaming.</div>
                </section>
                {/* <section className='grid min-[1200px]:grid-cols-2 grid-cols-1 m-8 gap-8 container mx-auto'> */}
                <section className='flex min-[1540px]:flex-row flex-col m-8 gap-8 container mx-auto mb-12'>
                    <span className='min-[1540px]:w-[60%]'><IntramuralCarousel /></span>
                    <div className='grid grid-rows-5 max-[1540px]:gap-8 min-[1540px]:w-[40%] gap-3'>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='font-akira-expanded sm:text-4xl text-2xl text-center'>Apex Legends</div>
                            <Link to='https://forms.gle/mwKkH86RgPaERvZ57' target='_blank' className='bg-[#00588F] hover:bg-[#00588faf] text-white font-bold py-2 px-4 rounded-full duration-500'>
                                Sign Up
                            </Link>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='font-akira-expanded sm:text-4xl text-2xl text-center'>League of Legends</div>
                            {/* <Link to='' className='bg-[#00588F] hover:bg-[#00588faf] text-white font-bold py-2 px-4 rounded-full duration-500'>
                                Sign Up
                            </Link> */}
                            <Link to='' className='bg-slate-600 text-white font-bold py-2 px-4 rounded-full duration-500'>
                                Closed
                            </Link>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='font-akira-expanded sm:text-4xl text-2xl text-center'>Overwatch</div>
                            <Link to='' className='bg-slate-600 text-white font-bold py-2 px-4 rounded-full duration-500'>
                                Cancelled
                            </Link>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='font-akira-expanded sm:text-4xl text-2xl text-center'>Rocket League</div>
                            <Link to='https://forms.gle/p7rymJGwXG3AGZTB6' target='_blank' className='bg-[#00588F] hover:bg-[#00588faf] text-white font-bold py-2 px-4 rounded-full duration-500'>
                                Sign up
                            </Link>
                            {/* <div className='text-xl'>Coming Soon...</div> */}
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='font-akira-expanded sm:text-4xl text-2xl text-center'>Valorant</div>
                            <Link to='' className='bg-slate-600 text-white font-bold py-2 px-4 rounded-full duration-500'>
                                Closed
                            </Link>
                        </div>
                    </div>
                </section>
                <section id='sponsor' className='flex min-[1540px]:flex-row flex-col pt-10 gap-12 mb-10'>
                    <div id='left_sponsor' className='min-[1540px]:w-[60%] w-full'>
                        <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F] font-semibold'>
                            Brought to you by
                        </div>
                        <Link to={"https://www.deepcool.com/"} target='blank_'>
                            <div className='flex justify-end max-[1100px]:px-12 py-5' >
                                <img src={require('../../images/Intramurals Page/deepcool.png')} alt='Deep Cool sponsor' loading="lazy" />
                            </div>
                        </Link>
                        <div id='get_social_sponsor' className='flex flex-col max-[1100px]:ml-14 ml-40'>
                            <div className='min-[1540px]:text-3xl text-xl leading-10 mb-5'>
                                Get Social With Us!
                            </div>
                            <div className='flex text-[#228BE6] flex-col sm:flex-row gap-5'>
                                <span className='flex gap-5'>
                                    <Link to={"https://www.instagram.com/deepcoolna/"}>
                                        <FaInstagram className='w-12 h-12 max-[600px]:w-9' />
                                    </Link>
                                    <Link to={"https://twitter.com/DeepCoolNA"}>
                                        <FaXTwitter className='w-12 h-12 max-[600px]:w-9' />
                                    </Link>
                                    <Link to={"https://www.twitch.tv/deepcoolna"}>
                                        <FaTwitch className='w-12 h-12 max-[600px]:w-9' />
                                    </Link>
                                    <Link to={"https://www.youtube.com/user/DEEPCOOL1996"}>
                                        <FaYoutube className='w-12 h-12 max-[600px]:w-9' />
                                    </Link>
                                </span>
                                <span className='flex gap-5'>
                                    <Link to={"https://www.tiktok.com/@deepcoolna"}>
                                        <FaTiktok className='w-12 h-12 max-[600px]:w-9' />
                                    </Link>
                                    <Link to={"https://www.facebook.com/DeepCoolNA"}>
                                        <FaFacebook className='w-12 h-12 max-[600px]:w-9' />
                                    </Link>
                                    <Link to={"https://discord.com/invite/pWsEbcz"}>
                                        <FaDiscord className='w-12 h-12 max-[600px]:w-9' />
                                    </Link>
                                </span>
                            </div>
                            <div className='text-white mt-10'>
                                <Link to={"mailto:mkt.us@deepcool.com"} className='min-[1100px]:text-base text-sm bg-[#228BE6] py-[20px] px-[34px] rounded-3xl'>
                                    Email Us
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div id='right_sponsor' className='min-[1540px]:w-[40%] w-full'>
                        <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F] font-semibold'>
                            New Releases:
                        </div>
                        <div className='flex justify-center mx-5'>
                            <div className='grid grid-cols-2 gap-5 gap-x-10'>
                                <Link to={"https://www.amazon.com/DeepCool-LT720-Dual-Chamber-Multidimensional-Anti-Leak/dp/B0B9SKBGFP?ref_=ast_sto_dp&th=1"} target='blank_'>
                                    <div className='flex flex-col items-center'>
                                        <img src={require('../../images/Intramurals Page/deepCoolItem1.png')} alt='Deep Cool Item 1' loading="lazy" />
                                        <div>DeepCool LT720</div>
                                    </div>
                                </Link>
                                <Link to={"https://www.amazon.com/DeepCool-CH560-Digital-High-Airflow-Radiator/dp/B0C3GDW3T5/ref=sr_1_3?crid=YUUMIOY11VPR&keywords=ch560+digital&qid=1695227616&sprefix=ch560+digital,aps,134&sr=8-3"} target='blank_'>
                                    <div className='flex flex-col items-center'>
                                        <img src={require('../../images/Intramurals Page/deepCoolItem2.png')} alt='Deep Cool Item 2' loading="lazy" />
                                        <div>DeepCool CH560 Digital ATX PC Case</div>
                                    </div>
                                </Link>
                                <Link to={"https://www.amazon.com/DeepCool-Digital-Heatpipes-Dual-Tower-Display/dp/B0C3G5RZ1T/ref=sr_1_3?crid=3714F9V4SVZXT&keywords=ak620%2Bdigital&qid=1695311811&sprefix=ak620%2Bdigital,aps,122&sr=8-3&th=1"} target='blank_'>
                                    <div className='flex flex-col items-center'>
                                        <img src={require('../../images/Intramurals Page/deepCoolItem3.png')} alt='Deep Cool Item 3' loading="lazy" />
                                        <div>DeepCool AK620 Digital CPU Air Cooler</div>
                                    </div>
                                </Link>
                                <Link to={"https://www.amazon.com/dp/B0C2H9T3TP?ref=myi_title_dp&th=1"} target='blank_'>
                                    <div className='flex flex-col items-center'>
                                        <img src={require('../../images/Intramurals Page/deepCoolItem4.png')} alt='Deep Cool Item 4' loading="lazy" />
                                        <div>DeepCool Assassin IV CPU Air Cooler</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Intramurals;
