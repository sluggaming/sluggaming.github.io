
import React from 'react';

const madeUpAbout = {
  mission: "To unite gamers at UCSC and beyond, fostering community, competition, and personal growth through esports and gaming events.",
  vision: "A world where every gamer finds their home, their team, and their voice.",
  values: ["Inclusivity", "Passion", "Sportsmanship", "Innovation", "Community"],
  funFact: "Slug Gaming was the first collegiate org to host a cross-campus VR tournament in California.",
  stats: [
    { label: "Members", value: "500+" },
    { label: "Games Supported", value: "8" },
    { label: "Events Hosted", value: "30+ per year" },
    { label: "Championships", value: "5 regional titles" }
  ]
};

const About = () => {
  return (
    <div className="min-h-screen bg-[#001a33] font-Montserrat text-white pt-20 pb-16 flex flex-col items-center">
  <img src={process.env.PUBLIC_URL + '/aboutusphoto.png'} alt="aboutusphoto" className="rounded-3xl shadow-2xl mb-10 w-full max-w-4xl border-4 border-[#fac500]" />

      <div className="bg-[#012a4a] rounded-3xl border-4 border-[#fac500] shadow-xl p-10 w-full max-w-4xl mb-12 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-[#fac500] mb-4 tracking-wide drop-shadow-glow-cyan">About Slug Gaming</h1>
        <p className="text-xl text-cyan-300 mb-6 italic text-center">{madeUpAbout.mission}</p>
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          {madeUpAbout.stats.map(stat => (
            <div key={stat.label} className="bg-[#003c6b] rounded-xl px-8 py-4 text-center border-2 border-cyan-400 shadow-lg">
              <div className="text-3xl font-bold text-[#fac500]">{stat.value}</div>
              <div className="text-base text-cyan-200">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center mb-6">
          <div className="flex-1 bg-[#003c6b] rounded-xl p-6 border-2 border-cyan-400 shadow-lg">
            <h2 className="text-2xl font-bold text-[#fac500] mb-2">Vision</h2>
            <p className="text-cyan-200">{madeUpAbout.vision}</p>
          </div>
          <div className="flex-1 bg-[#003c6b] rounded-xl p-6 border-2 border-cyan-400 shadow-lg">
            <h2 className="text-2xl font-bold text-[#fac500] mb-2">Core Values</h2>
            <ul className="list-disc list-inside text-cyan-200">
              {madeUpAbout.values.map(v => <li key={v}>{v}</li>)}
            </ul>
          </div>
        </div>
        <div className="bg-[#fac500] rounded-xl px-8 py-4 text-center text-[#003c6b] font-bold text-lg shadow-md mb-4">
          <span className="drop-shadow-glow-cyan">Fun Fact:</span> {madeUpAbout.funFact}
        </div>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#fac500] mb-4">Upcoming Events & Calendar</h2>
        <iframe src="https://calendar.google.com/calendar/embed?src=i4on7dqbm7f8dgnp2r4rrima1k%40group.calendar.google.com&ctz=America%2FLos_Angeles" title="calendar" width="100%" height="600" className="rounded-xl border-2 border-cyan-400 shadow-lg mb-8"></iframe>
      </div>

      <img src={require('../images/Navigation Component/Slug.png')} alt="slug-watermark" className="opacity-10 absolute bottom-0 right-0 w-96 pointer-events-none select-none" />
    </div>
  );
};

export default About;