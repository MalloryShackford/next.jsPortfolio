import React from 'react'
import weekawayImg from '../public/assets/Projects/weekaway.png'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'

const weekaway = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={weekawayImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Weekaway</h2>
          <h3>React JS / Tailwind</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Embark on a journey with this travel companion web application, a React-based project designed to 
            enhance the travel planning experience. This application is meticulously crafted using Vite for an 
            optimized development workflow and Tailwind CSS for a responsive, mobile-first design. It features 
            a suite of interactive components including destination galleries, activity overviews, booking forms, 
            and contact sections, providing users with a comprehensive travel planning toolkit. The project 
            showcases modular development practices and a keen eye for user interface design, ensuring a 
            seamless and engaging user experience. With a focus on code quality and maintainability, the application
             also integrates ESLint and PostCSS configurations, demonstrating a commitment to industry best practices.
          </p>
          <a
            href='https://github.com/MalloryShackford/Travel'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#5651e5] to-[#709dff]'>Code</button>
          </a>
          <a
            href='https://weekaway-six.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 bg-gradient-to-r from-[#5651e5] to-[#709dff]'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default weekaway;
