import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
    // scrolling images 
    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(1)

    //next project 
    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    //Privious Project
    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }

    // show the widden of the scrolling 
    useEffect(() => {
        const updateCardstoShow = () => {
            if(window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length)
            } else {
                setCardsToShow(1)
            }
        }
        updateCardstoShow()

        window.addEventListener('resize' , updateCardstoShow)
        return () => window.removeEventListener('resize' , updateCardstoShow)
    })

    return (
        // header 
        <div className='container mx-auto py-44 md:px-20 w-full overflow-hidden' id='Projects'>
            <h1 className='text-2xl sm:text-5xl font-bold mb-4'>Completed <span className='font-light'>Projects</span></h1>
            <span className='text-gray-500 max-w-96 text-center mb-8'>Crafting Spaces, Buidlign Legacies-Explore Legacies-Explore Our Portifolio</span>

            {/* slider buttons  */}
            <div className='flex justify-end items-center mb-10' aria-label='Previous Project'>
                <button className='p-3 bg-gray-200 rounded mr-2'>
                    <img src={assets.left_arrow} alt="Previous" onClick={prevProject}/>
                </button>
                <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt="Next" onClick={nextProject}/>
                </button>
            </div>

            {/* projects */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-tranform duration-500 ease-in-out'
                // slider style 
                style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}
                >
                    {projectsData.map((project, index) => (
                        <div key={index} className='flex-shrink-0 w-full relative sm:w-1/4'>
                            <img src={project.image} />
                            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                                    <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                                    <p className="text-gray-500 text-sm">{project.price} <span>|</span> {project.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>




    )
}

export default Projects