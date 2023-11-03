import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>Let's Build Something Together</p>
          <h1 py-4 text-gray-700>Hi, I'm <span className='text-[#5651e5]'>Mallory</span></h1>
          <h1 py-2 text-gray-700>A Front-End Web Developer</h1> 
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I specialize in building exceptional digital experiences. 
            Currently, I'm focused on building responsive front-end applications 
            while learning back-end technologies.
          </p>
          <div className='flex max-w-[330px] items-center justify-between m-auto py-4'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href="https://www.linkedin.com/in/mshackford/" target="_blank" rel="noopener"><FaLinkedinIn /></a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href="https://github.com/MalloryShackford" target="_blank" rel="noopener"><FaGithub /></a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href="mailto:mallory.shackford@gmail.com"><AiOutlineMail /></a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                   <a href="/shackford_resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume"><BsFillPersonLinesFill /></a>
                </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
