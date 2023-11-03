import React from 'react'
import ProjectItem from '../components/ProjectItem'
import gurufoxImg from '../public/assets/Projects/gurufox.png'
import bestEatsImg from '../public/assets/Projects/besteats.png'
import utrImg from '../public/assets/Projects/utr.png'
import weekawayImg from '../public/assets/Projects/weekaway.png'

const Projects = () => {
  return (
    <div id='projects'>
       <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                    title='Weekaway' 
                    backgroundImg={weekawayImg} 
                    projectUrl='/weekaway'
                 />
                <ProjectItem 
                    title='Gurufox Ai' 
                    backgroundImg={gurufoxImg} 
                    projectUrl='/gurufox'
                 />
                <ProjectItem 
                    title='Under the Radar' 
                    backgroundImg={utrImg} 
                    projectUrl='/undertheradar'
                 />
                <ProjectItem 
                    title='Best Eats' 
                    backgroundImg={bestEatsImg} 
                    projectUrl='/besteats'
                 />
            </div>
        </div>
    </div>
  )
}

export default Projects
