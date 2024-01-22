import React from 'react'
import ProjectItem from '../components/ProjectItem'
import gurufoxImg from '../public/assets/Projects/public/assets/Projects/ourdate.png'
import bestEatsImg from '../public/assets/Projects/besteats.png'
import utrImg from '../public/assets/Projects/utr.png'
import pokedexImg from '../public/assets/Projects/pokedex.png'

const Projects = () => {
  return (
    <div id='projects'>
       <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                    title='Pokedex' 
                    backgroundImg={pokedexImg} 
                    projectUrl='/pokedex'
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

