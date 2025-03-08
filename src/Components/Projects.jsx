import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from "framer-motion";

const ProjectsSection = () => {
    const[currentIndex, setCurrentIndex] = useState(0)
    const[cardsToshow, setCardsToshow] = useState(1)

    const nextProject =()=>{
        setCurrentIndex((prevIndex )=>(prevIndex + 1) % projectsData.length )
    }


    const prevProject =()=>{
        setCurrentIndex((prevIndex )=> prevIndex === 0 ? projectsData.length -1 : prevIndex - 1)
    }

    useEffect(()=>{
        const updateCardsToshow = ()=>{
            if(window.innerWidth >=1014){
                setCardsToshow(projectsData.length);
            }else{
                setCardsToshow(1);
            }
        };

        updateCardsToshow();

        window.addEventListener('resize', updateCardsToshow);
        return ()=> window.removeEventListener('resize', updateCardsToshow);


    }, [])

  return (
    <motion.div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"

      initial={{ opacity: 0, x: 200 }}  
      whileInView={{ opacity: 1, x: 0 }}  
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}  
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects <span className="underline underline-offset-4 decoration-1 font-light">Completed</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Slider Buttons */}
      <div className="flex justify-end items-center mb-8">
        <button onClick={nextProject} className="p-3 bg-gray-200 rounded mr-2">
          <img src={assets.left_arrow} alt="Left Arrow" />
        </button>

        <button onClick={prevProject} className="p-3 bg-gray-200 rounded">
          <img src={assets.right_arrow} alt="Right Arrow" />
        </button>
      </div>

      {/* Projects Slider Container */}
      <div className="overflow-hidden">
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'
        style={{transform: `translateX(-${(currentIndex * 100)/ cardsToshow}%)` }}

        >
        {projectsData.map((project, index) => (
          <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
            <img src={project.image} alt={project.title} className="w-full h-auto mb-14 rounded" />
            {/* <h2 className="text-xl font-semibold mt-2">{project.title}</h2> */}
            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-2 py-2 shadow-md '>
                <h2 className='text-xl font-semibold text-gray-800'>
                    {project.title}
                </h2>
                <p className='text-2'>{project.price} <span className=''>|</span></p> {project.location}
                </div>

            </div>
          </div>
        ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
