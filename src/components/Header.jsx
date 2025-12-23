import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">

            {/* Left Section */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-50px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Book Appointment <br /> With Trusted Doctors
                </p>
                <div className="flex flex-col md:flex-row items-center gap-3 text-white text-m font-light">
                    <img src={assets.group_profiles} alt="" className="w-28"/>
                    <p>
                        Simply browse through our extensive list of trusted <br className='hidden sm:block'/> doctors,schedule your appointment hassle-free.
                    </p>
                </div>
                <a href="#speciality" className=" flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full text-m md:m-0 hover:scale-105 transition-all duration-300">
                    Book appointment
                    <img src={assets.arrow_icon} alt="arrow" className="ml-2 w-4 h-4" />
                </a>
            </div>

            {/* Right Section (Image) */}
            <div className='md:w-1/2 relative'>
                <img src={assets.header_img} alt="Doctors" className='w-full md:absolute bottom-0 h-auto rounded-lg' />
            </div>
        </div>
    );
};

export default Header;
