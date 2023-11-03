import React from 'react'
import utrImg from '../public/assets/Projects/utr.png'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'

const undertheradar = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={utrImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Under the Radar</h2>
          <h3>React JS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            "Under the Radar" is a sophisticated web application that presents the bespoke services 
            of a private chef, offering a personalized culinary experience for those with discerning tastes. 
            Crafted with React and powered by Vite for a seamless development experience, this application 
            is the digital embodiment of exclusive dining.

            The website features elegantly designed components each providing a window into the chef's culinary world. 
            The application is adorned with tantalizing images of signature dishes, hinting at the bespoke 
            menus and exquisite flavors that await the clientele. With an intuitive and stylish interface, 
            the application is a testament to the chef's attention to detail, mirroring the bespoke nature 
            of the dining experiences offered. "Under the Radar" is more than just a website—it's a virtual 
            venue that reflects the artistry and exclusivity of a private chef's services, inviting patrons 
            to embark on a culinary journey that's as unique as their tastes. 
          </p>
          <a
            href='https://github.com/MalloryShackford/under_the_radar'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#5651e5] to-[#709dff]'>Code</button>
          </a>
          <a
            href='https://cheftimmaslow.com/'
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

export default undertheradar;
