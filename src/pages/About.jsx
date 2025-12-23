import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center pt-10 text-2xl text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='flex flex-col md:flex-row gap-12 my-10'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col gap-6 md:w-2/4 text-sm text-gray-600'>
          <p><b>Welcome to HealthCare</b>, your trusted partner in streamlining healthcare clinic management with convenience and efficiency. At HealthCare, we recognize the daily challenges clinics and patients face—whether it's coordinating doctor appointments, maintaining accurate health records, or ensuring smooth communication between staff and patients.</p>
          <p><b>HealthCare</b> is committed to innovation in healthcare technology. We continually enhance our platform to support clinics in delivering high-quality care while improving administrative efficiency. From appointment scheduling to record management, HealthCare empowers clinics to operate more effectively and provide better service to their patients.</p>
          <b>Our Vision</b>
          <p>At HealthCare, our vision is to transform healthcare clinic management by creating a seamless connection between patients and providers. We aim to simplify clinical workflows, reduce operational burdens, and enhance patient engagement—ultimately making healthcare more accessible, responsive, and effective.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all cursor-pointer text-gray-600 duration-300'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all cursor-pointer text-gray-600 duration-300'>
          <b>CONVENIENCE:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all cursor-pointer text-gray-600 duration-300'>
          <b>PERSONALIZATION:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
        
    </div>
  )
}

export default About