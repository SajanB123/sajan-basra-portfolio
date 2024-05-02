'use client';

import React from 'react';

const scrollToElement = (elementId: string): void => {
  console.log(`Attempting to scroll to ${elementId}`);
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    console.log(`Element with ID ${elementId} not found`);
  }
};


const InteractiveLinks = () => {
  return (
    <ul className="flex flex-row space-x-8">
      <li className='hidden md:block'>
        <a onClick={() => scrollToElement('home')} className="font-semibold hover:cursor-pointer dark:hover:text-gray-300 hover:text-gray-600">Home</a>
      </li>
      <li className='hidden md:block'>
        <a onClick={() => scrollToElement('projects')} className="font-semibold hover:cursor-pointer dark:hover:text-gray-300 hover:text-gray-600">Projects</a>
      </li>
      <li className='hidden md:block'>
        <a onClick={() => scrollToElement('about')} className="font-semibold hover:cursor-pointer dark:hover:text-gray-300 hover:text-gray-600">About</a>
      </li>
    </ul>
  );
};

export default InteractiveLinks;
