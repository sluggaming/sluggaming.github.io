
import React from 'react'
import StaffCard from '../components/Staff Page/StaffCard'
import esportsDirectorData from '../data/Esports Director.json'
import executiveBoardData from '../data/Executive Board.json'
import teamLeadsData from '../data/Team Leads.json'

const Staff = () => {
  return (
    <div className="pt-[16vh] pb-8 font-barlow-condensed bg-[#001a33] min-h-screen flex flex-col items-center">
      {/* Main Title & Explanation */}
      <div className="w-full max-w-6xl px-4 md:px-10 lg:px-20 mb-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#fac500] mb-4 tracking-wide uppercase drop-shadow-glow-cyan">Meet the Slug Gaming Staff</h1>
        <p className="text-lg md:text-2xl text-cyan-200 mb-2 font-inter">Our staff is the backbone of Slug Gaming, leading our teams, organizing events, and building a welcoming esports community at UC Santa Cruz. Get to know the passionate students who make it all happen!</p>
      </div>
      <section id="Executive Board" className="w-full max-w-6xl px-4 md:px-10 lg:px-20">
        <div className="flex justify-center text-2xl md:text-4xl font-extrabold text-[#fac500] mb-2 tracking-wide uppercase">Executive Board</div>
        <div className="flex justify-center pt-1 mb-4">
          <img src={require('../images/Achivements Page/Yellow Line.png')} alt="Yellow Line" loading="lazy" className="w-32" />
        </div>
        <div className="text-center text-base md:text-lg text-cyan-200 mb-4">Overseeing the backbone of Slug Gaming, the Executive Board arranges club meetings, sign-offs on official paperwork, and manages all the background tasks needed to keep the club running.</div>
        <div className={`flex justify-center gap-x-8 gap-y-10 px-1 md:px-4 lg:px-6 xl:px-8 flex-wrap`}>
          {executiveBoardData.map((staffMember) => (
            <StaffCard key={staffMember.id} {...staffMember} />
          ))}
        </div>
      </section>
      <section id="Esports Director" className="w-full max-w-6xl px-4 md:px-10 lg:px-20 mt-12">
        <div className="flex justify-center text-2xl md:text-4xl font-extrabold text-[#fac500] mb-2 tracking-wide uppercase">Esports Directors</div>
        <div className="flex justify-center pt-1 mb-4">
          <img src={require('../images/Achivements Page/Yellow Line.png')} alt="Yellow Line" loading="lazy" className="w-32" />
        </div>
        <div className="text-center text-base md:text-lg text-cyan-200 mb-4">Working hard for our competitive teams, Esports Directors work with our variety of gaming teams to organize scrimmages, handle tournament schedules, and ensure success for our Esports scene.</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 px-1 md:px-4 lg:px-6 xl:px-8">
          {esportsDirectorData.map((staffMember) => (
            <StaffCard key={staffMember.id} {...staffMember} imgSize="sm" />
          ))}
        </div>
      </section>
      <section id="Team Leads" className="w-full max-w-6xl px-4 md:px-10 lg:px-20 mt-12 pb-8">
        <div className="flex justify-center text-2xl md:text-4xl font-extrabold text-[#fac500] mb-2 tracking-wide uppercase">Team Leads</div>
        <div className="flex justify-center pt-1 mb-4">
          <img src={require('../images/Achivements Page/Yellow Line.png')} alt="Yellow Line" loading="lazy" className="w-32" />
        </div>
        <div className="text-center text-base md:text-lg text-cyan-200 mb-4">Dedicated to fostering a thriving gaming community, staff directors work to keep the community informed on the Esports scene through live streams, social media updates, and engaging social gaming nights.</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 px-1 md:px-4 lg:px-6 xl:px-8">
          {teamLeadsData.map((staffMember) => (
            <StaffCard key={staffMember.id} {...staffMember} imgSize="sm" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Staff;