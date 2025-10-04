import React from 'react';
import homePageData from '../data/Home Page.json';
import Event_Panel from '../components/Home Panel/Event Panel';
import { Link } from 'react-router-dom';
import ScrollDownSlug from '../components/ScrollDownSlug';

const stats = [
    { label: 'Members', value: '3700+' },
    { label: 'Tournaments Yearly', value: '10+' },
    { label: 'Collegiate Teams', value: '12+' },
];

const sponsors = [
    { name: 'Sponsor1', logo: require('../images/Footer Component/SlugLogo.png') },
    // Add more sponsor logos here
];

const navCards = [
    { title: 'Teams', link: '/teams', icon: '🎮' },
    { title: 'Events', link: '/events', icon: '📅' },
    { title: 'Community', link: '/contact', icon: '🤝' },
];

const Home = () => {
    return (
        <div className="bg-[#003c6b] min-h-screen text-white font-sans">
            {/* Hero Banner */}
            {/* Hero: full viewport height; content offset down 8vh so it sits lower but fully visible */}
            <section className="relative flex flex-row items-start justify-between h-screen w-full overflow-hidden px-0" style={{background: 'linear-gradient(135deg, #003c6b 60%, #006aad 100%)', zIndex: 1}}>
                <div className="absolute inset-0 opacity-10 bg-no-repeat bg-center" style={{backgroundImage: `url(${require('../images/Home Page/Banner.png')})`}}></div>
                <div className="relative z-10 flex flex-col items-start justify-center w-1/2" style={{paddingLeft: '10vw', paddingTop: '30vh', zIndex: 1}}>
                    <h1 className="whitespace-nowrap text-[3rem] md:text-[4.8rem] lg:text-[6rem] font-barlow-condensed font-extrabold tracking-tight text-[#fac500] slug-glow-minimal text-left" style={{margin: 0, alignSelf: 'flex-start'}}>
                        Slug Gaming
                    </h1>
                    <p className="text-xl md:text-2xl font-inter text-[#fac500] text-left" style={{marginTop: '-0.5%', alignSelf: 'flex-start'}}>
                        UC Santa Cruz's official gaming community.
                    </p>
                    <div className="mt-6 flex gap-4 justify-start">
                        <a href="https://discord.gg/slug-gaming" target="_blank" rel="noopener noreferrer" className="px-8 py-4 min-w-[180px] rounded-full font-barlow-condensed text-xl font-bold btn-discord shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#12a5dc]">
                            Join Our Discord
                        </a>
                        <Link to="/teams" className="px-8 py-4 min-w-[180px] rounded-full font-barlow-condensed text-xl font-bold btn-teams shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#12a5dc]">
                            See Our Teams
                        </Link>
                    </div>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center w-1/2 h-full" style={{paddingRight: '6vw', paddingTop: '5.5vh'}}>
                    <img src={process.env.PUBLIC_URL + '/ow_a_frontpage.jpg'} alt="Overwatch A Team" className="w-[540px] max-w-full rounded-xl shadow-xl border-4 border-[#fac500]" />
                    <span className="mt-2 text-sm font-inter text-[#fac500] text-center bg-[#006aad] rounded-b-lg px-4 py-2 shadow-md inline-block border-4 border-[#fac500]" style={{maxWidth: '540px', width: 'auto'}}>
                        Overwatch A Team at UCI competing in the UC Esports Initiative
                    </span>
                </div>
                {/* Slug bounce scroll-down indicator attached to viewport */}
                <ScrollDownSlug />
            </section>

            {/* Mission/About Block */}
            <section className="py-16 px-4 md:px-16 bg-[#003c6b]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-barlow-condensed font-bold text-[#fac500] mb-4">Who We Are</h2>
                    <p className="text-lg md:text-xl font-inter text-white mb-8">
                        Slug Gaming is UC Santa Cruz’s official esports club, home to competitive teams, passionate gamers, and a thriving campus community. We organize tournaments, social events, and mentorship programs to unite students through gaming and competition.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="bg-[#012a4a] rounded-xl shadow-lg border-t-4 border-[#fac500] py-8 px-4 flex flex-col items-center transition-transform duration-200 hover:scale-105">
                                <span className="text-3xl font-barlow-condensed font-bold text-[#fac500]">{stat.value}</span>
                                <span className="mt-2 text-lg font-inter text-white">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights / Featured Section */}
            <section className="py-16 px-4 md:px-16 bg-[#002b4a]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-barlow-condensed font-bold text-[#12a5dc] mb-8 text-center">Recent Achievements & Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {homePageData.map((homeDetail) => (
                            <div key={homeDetail.id} className="bg-[#012a4a] rounded-xl shadow-lg border-b-4 border-[#12a5dc] transition-transform duration-200 hover:scale-105 hover:shadow-cyan-500/50">
                                <Event_Panel {...homeDetail} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Navigation Cards */}
            <section className="py-16 px-4 md:px-16 bg-[#003c6b]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-barlow-condensed font-bold text-[#fac500] mb-8 text-center">Explore Slug Gaming</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {navCards.map((card) => (
                            <Link to={card.link} key={card.title} className="bg-[#012a4a] rounded-xl shadow-lg py-10 px-6 flex flex-col items-center border-2 border-[#027988] transition-all duration-200 hover:shadow-[#12a5dc] hover:border-[#12a5dc] hover:scale-105">
                                <span className="text-5xl mb-4 animate-glow">{card.icon}</span>
                                <span className="text-xl font-barlow-condensed font-bold text-white">{card.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sponsor Callout */}
            <section className="py-10 px-4 md:px-16 bg-[#002b4a]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-barlow-condensed font-bold text-[#fac500] mb-6">Our Sponsors</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {sponsors.map((sponsor) => (
                            <div key={sponsor.name} className="bg-[#012a4a] rounded-lg p-4 grayscale hover:grayscale-0 transition-all duration-200 shadow-lg border border-[#fac500] flex items-center">
                                <img src={sponsor.logo} alt={sponsor.name} className="h-12 w-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;