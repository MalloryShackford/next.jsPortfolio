import React from 'react'
import gurufoxImg from '../public/assets/Projects/gurufox.png'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'

const gurufox = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={gurufoxImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Gurufox AI</h2>
          <h3>React JS | Python </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Discover the perfect date with Gurufox, a cutting-edge activity planner 
            designed to infuse romance and excitement into your special occasions. 
            This innovative platform leverages the latest in AI technology to curate 
            personalized date experiences tailored to your interests and preferences.

            At the heart of Gurufox is a user-friendly interface that simplifies the 
            planning process, allowing couples to effortlessly explore a myriad of activities. 
            The website is built on a robust tech stack that ensures a seamless and 
            responsive user experience. It utilizes advanced algorithms to suggest date 
            activities based on current trends, weather conditions, and user history, 
            ensuring each recommendation is as unique as your relationship.
          </p>
          <a
            href='https://github.com/MalloryShackford/ourdate'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#5651e5] to-[#709dff]'>Code</button>
          </a>
          <a
            href='https://ourdate.gurufox.ai/'
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
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google APIs
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python | Django
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenAI API
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

export default gurufox;
