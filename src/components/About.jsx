import React, { useState } from 'react'
import { assets } from '../assets/assets'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const About = () => {
    // scrolled to trigger numbers 
    const [count, setCountOn] = useState(false)

    return (
        // header 
        <div className='-scroll-mt-44 flex flex-col items-center justify-center container mx-auto py-56 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
            <h1 className='text-2xl sm:text-5xl font-bold mb-4'>About <span className='font-light'>Our Brand</span></h1>
            <span className='text-gray-500 max-w-96 text-center mb-8'>Passionate About Properties, Dedicated to Your Website in Designing</span>
            {/* image and text  */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-32 mt-20">
                <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' />

                {/* trigger is here  */}
                <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                    <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
                        <div className="grid md:grid-cols-2 gap-6 md:gap-10 ml-10 w-full pr-28">
                            <div className='border-4 border-gray-300 px-10 rounded-lg py-5' >
                                <img src={assets.hand} className='mb-10' />
                                <p className='text-6xl font-semibold text-gray-800 mb-6'>
                                    {count && <CountUp start={0} end={75} duration={2} delay={0} />}
                                    <span className='font-light'>+</span></p>
                                <p>Satisfied Customers</p>
                            </div>
                            <div className='border-4 border-gray-300 px-10 rounded-lg py-5'>
                                <img src={assets.project} className='mb-10' />
                                <p className='text-6xl font-semibold text-gray-800 mb-6'>
                                {count && <CountUp start={0} end={40} duration={2} delay={0} />}
                                <span className='font-light'>+</span></p>
                                <p>Ongoing Projects</p>
                            </div>
                        </div>
                    </ScrollTrigger>

                    {/* text  */}
                    <p className="my-8 max-w-lg ml-10">
                        Lorem is simply dummy text to write Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit inventore eaque cumque earum nulla, minus esse. Ab nostrum, tenetur, quibusdam eaque impedit quis voluptatem iure nisi iste, quam asperiores voluptates est ipsam repellendus iusto excepturi accusamus minima eligendi reprehenderit mollitia!
                    </p>
                    <button className="ml-10 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-xl">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default About