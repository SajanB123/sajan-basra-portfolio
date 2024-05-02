'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToElement = (elementId: string): void => {
    console.log(`Attempting to scroll to ${elementId}`);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log(`Element with ID ${elementId} not found`);
    }
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <div className="md:hidden" onClick={() => setIsOpen(true)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      {/* Sidebar content */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-[60%] dark:bg-gray-900 bg-gray-100 shadow-lg z-50">
          {/* Close Button */}
          <div className="flex justify-start pl-[1.6rem] pt-[1.8rem]">
            <button onClick={() => setIsOpen(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col space-y-4 p-4 mt-6">
            <li className='pl-4 pb-4'><a onClick={() => scrollToElement('home')}>Home</a></li>
            <li className='pl-4 pb-4'><a onClick={() => scrollToElement('projects')}>Projects</a></li>
            <li className='pl-4 pb-4'><a onClick={() => scrollToElement('about')}>About</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
