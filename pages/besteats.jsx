import React from 'react'
import bestEatsImg from '../public/assets/Projects/besteats.png'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'

const besteats = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={bestEatsImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Best Eats</h2>
          <h3>React JS / Tailwind</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Indulge in the flavors of the world with FoodEats, a vibrant and interactive web application 
            dedicated to food enthusiasts. Built with the modern React framework and Vite for a swift development 
            experience, FoodEats serves up a delicious UI that's as enticing as the dishes it portrays. 
            The application boasts a collection of components such as Category, Food, HeadlineCards, and Hero, 
            each one offering a unique slice of the culinary journey. From browsing food categories to exploring 
            individual dishes, users can savor a rich interface designed with Tailwind CSS for a stylish, responsive layout.

            The project is seasoned with best coding practices, featuring ESLint for code quality assurance 
            and PostCSS for advanced styling capabilities. The inclusion of a dedicated data.js file suggests a 
            well-organized approach to state management, ensuring that the app's content is as dynamic as its presentation. 
            Whether you're a foodie looking for inspiration or a developer seeking a feast of code, FoodEats is a testament 
            to the power of modern web development in creating engaging and appetizing digital experiences.
          </p>
          <a
            href='https://github.com/MalloryShackford/FoodEats'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#5651e5] to-[#709dff]'>Code</button>
          </a>
          <a
            href='https://foods-rho.vercel.app/'
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

export default besteats;
