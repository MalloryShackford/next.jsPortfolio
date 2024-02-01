import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>I am not your normal developer</p>
            <p className='py-2 text-gray-600'>
            With over 15 years in the dynamic hospitality industry, 
            I&apos;ve honed my skills in providing top-notch service, 
            meticulous attention to detail, and ensuring customer satisfaction. 
            Transitioning from creating memorable guest experiences, 
            I ventured into education, dedicating a year to teaching and 
            shaping young minds. Now, I&apos;ve embarked on a new chapter in technology, 
            leveraging my passion for continuous learning and problem-solving in the world 
            of programming. This career pivot reflects not just a change in profession, 
            but my unwavering commitment to personal growth, embracing new challenges, 
            and the pursuit of lifelong learning. </p>
            <a href="#projects"><p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p></a>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src={AboutImg} alt='laptop' className='rounded-xl' />
        </div>
      </div>
    </div>
  )
}

export default About
