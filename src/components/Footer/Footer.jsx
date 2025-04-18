import React from 'react'
import Layout from '../Layout'
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  
  return (
    <div className='bg-black' >
      {/* Main Footer */}
      <div id="footer" className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8" >
        {/* Company Name and Social Icons */}
        <div className="md:col-span-1 text-white" >
          <h2 className="text-xl text-white font-bold mb-6">BEDLAM INC.</h2>

          <div className="mt-4">
            <p className="text-sm mb-4">FOLLOW US ON</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white">
                <span className="text-xl">G</span>
              </a>
              <a href="#" className="text-white">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <circle cx="13" cy="13" r="4"></circle>
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Services Column */}
        <div className="md:col-span-1">
          <ul className="space-y-3 text-sm text-white">
            <li><a href="#" className="hover:text-gray-400">SERVICES</a></li>
            <li><a href="#" className="hover:text-gray-400">STRATEGY</a></li>
            <li><a href="#" className="hover:text-gray-400">CAREER</a></li>
            <li><a href="#" className="hover:text-gray-400">INVESTOR</a></li>
          </ul>
        </div>

        {/* About Column */}
        <div className="md:col-span-1">
          <ul className="space-y-3 text-sm text-white">
            <li><a href="#" className="hover:text-gray-400">ABOUT</a></li>
            <li><a href="#" className="hover:text-gray-400">OUR PRODUCT</a></li>
            <li><a href="#" className="hover:text-gray-400">OUR SERVICE</a></li>
            <li><a href="#" className="hover:text-gray-400">CONTACT</a></li>
          </ul>
        </div>

        {/* Locations Column */}
        <div className="md:col-span-1">
          <ul className="space-y-3 text-sm text-white">
            <li><a href="#" className="hover:text-gray-400">DEALER LOCATIONS</a></li>
            <li><a href="#" className="hover:text-gray-400">NEWS</a></li>
            <li><a href="#" className="hover:text-gray-400">FORUMS</a></li>
            <li><a href="#" className="hover:text-gray-400">CAREERS</a></li>
            <li><a href="#" className="hover:text-gray-400">COMPANY</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto py-4 px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-100 mb-4 md:mb-0">@BEDLAM5.TM, ALL RIGHTS RESERVED</p>

          <div className="flex space-x-8 text-xs text-gray-400">
            <a href="#" className="text-white">COOKIE POLICY</a>
            <a href="#" className="text-white">LEGAL NOTICE</a>
            <a href="#" className="text-white">COOKIE CONSENT OPTIONS</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer