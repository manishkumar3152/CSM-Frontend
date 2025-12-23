import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* left section */}
                <div>
                    <img className='mb-3 w-28' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Healthcare clinic management involves
                     the efficient coordination of administrative, 
                      scheduling appointments, managing patient records and handling billing. 
                      Effective clinic management improves patient care, enhances staff 
                      productivity, and supports overall clinic growth.</p>
                </div>

                {/* center section */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>

                {/* right section */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-123-456-7890</li>
                        <li>healthcare@gmail.com </li>
                    </ul>
                </div>
            </div>

            {/* copyright section */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ HeathCare - All Right reserved</p>
  
            </div>
        </div>
    )
}

export default Footer