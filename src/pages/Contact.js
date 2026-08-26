
import React from 'react';
import { FaInstagram, FaXTwitter, FaTwitch, FaYoutube, FaTiktok, FaFacebook, FaDiscord } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="font-barlow-condensed min-h-screen bg-[#001a33] text-white pb-24 pt-[6vh]">
      <section id="Contact Us" className="max-w-3xl mx-auto px-4 text-center">
        <div className="text-[#fac500] text-5xl md:text-7xl font-extrabold uppercase tracking-wide mb-4 drop-shadow-glow-cyan mt-[10vh]">Contact Us</div>
        <div className="text-cyan-200 text-lg md:text-2xl mb-8 font-inter">Have a question or something to share? We're here to listen!<br />Drop us a message or connect with us below.</div>
      </section>

      <section id="Social" className="max-w-3xl mx-auto px-4 mb-12">
        <div className="text-[#fac500] text-3xl md:text-4xl font-bold mb-4">Get Social With Us!</div>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="https://www.instagram.com/sluggamingucsc/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaInstagram className="w-14 h-14 text-[#12a5dc] hover:text-[#fac500] drop-shadow-glow-cyan" />
          </a>
          <a href="https://twitter.com/sluggamingucsc?lang=en" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaXTwitter className="w-14 h-14 text-[#12a5dc] hover:text-[#fac500] drop-shadow-glow-cyan" />
          </a>
          <a href="https://www.twitch.tv/slugesports" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaTwitch className="w-14 h-14 text-[#12a5dc] hover:text-[#fac500] drop-shadow-glow-cyan" />
          </a>
          <a href="https://www.youtube.com/@sluggaming114" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaYoutube className="w-14 h-14 text-[#12a5dc] hover:text-[#fac500] drop-shadow-glow-cyan" />
          </a>
          <a href="https://www.tiktok.com/@sluggamingucsc?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaTiktok className="w-14 h-14 text-[#12a5dc] hover:text-[#fac500] drop-shadow-glow-cyan" />
          </a>
          <a href="https://www.facebook.com/sluggamingucsc/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaFacebook className="w-14 h-14 text-[#12a5dc] hover:text-[#fac500] drop-shadow-glow-cyan" />
          </a>
          <a href="https://discord.com/invite/GKQdtHf32t" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaDiscord className="w-14 h-14 text-[#12a5dc] hover:text-[#fac500] drop-shadow-glow-cyan" />
          </a>
        </div>
      </section>

      <section id="Contact Information" className="max-w-3xl mx-auto px-4 mb-12">
        <div className="text-[#fac500] text-3xl md:text-4xl font-bold mb-2">Contact Information</div>
        <div className="text-cyan-200 text-lg md:text-xl mb-2">1156 High Street<br />Santa Cruz, CA 95048<br />United States</div>
      </section>

      <section id="Button" className="max-w-3xl mx-auto px-4 text-center">
        <a href="mailto:ucscesportsclub@gmail.com" className="bg-[#12a5dc] hover:bg-[#fac500] hover:text-[#003c6b] px-10 py-5 rounded-2xl text-lg font-bold shadow-lg transition-all inline-block">Email Us</a>
      </section>
    </div>
  );
};

export default Contact;