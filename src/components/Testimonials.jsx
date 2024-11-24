import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
    return (
        // header 
        <div className='flex flex-col items-center justify-center container mx-auto py-56 md:px-20 lg:px-32 w-full overflow-hidden' id="Testimonials">
            <h1 className='text-2xl sm:text-5xl font-bold mb-4'>Testimonials <span className='font-light'>Our Customers</span></h1>
            <span className='text-gray-500 max-w-96 text-center mb-8'>What Our Clients Said About Our Products.</span>

            <div className="flex flex-wrap justify-center gap-8 mt-8">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-[400px] border shadow-lg rounded-lg px-8 py-12'>
                        <img src={testimonial.image} class="w-20 h-20 rounded-full mx-auto mb-4" />
                        <h1 className='text-xl text-center text-gray-700 font-medium'>{testimonial.name}</h1>
                        <p className='text-center text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({ length: testimonial.rating }, (item, index) => (
                                <img key={index} src={assets.star_icon} />
                            ))}
                        </div>
                        <p className='text-gray-600 text-center'>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
)}

export default Testimonials