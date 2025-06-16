import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo1} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
            We are committed to bringing you the best products at unbeatable prices. Shop with confidence and enjoy seamless service from checkout to delivery.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><Link to="/" className="hover:text-black">Home</Link></li>
            <li><Link to="/About" className="hover:text-black">About us</Link></li>
            <li>Delivery</li>
            <li><Link to="/privacyPolicy" className="hover:text-black">Privacy policy</Link></li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91 6296645868</li>
            <li>contact.trendwave@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @TrendWave.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
