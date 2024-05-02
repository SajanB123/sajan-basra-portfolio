import React from 'react';
// Assuming you have your icons in the public/icons folder
const icons = [
    "/html5.svg",
    "/css3.svg",
    "/javascript.svg",
    "/react.svg",
    "/nextjs.svg",
    // Add more paths as needed
  ];
  
  export default function ScrollingIcons() {
    return (
      <div className="hidden md:block relative h-[184px] lg:h-[252px] w-fit overflow-hidden">
        <div className="animate-scrollAnimation space-y-4">
          {icons.map((icon, index) => (
            <img key={index} src={icon} alt="codingIcon" className="h-6 lg:h-12 mx-auto dark:filter dark:invert" />
          ))}
          {/* Duplicate to ensure seamless loop */}
          {icons.map((icon, index) => (
            <img key={`duplicate-${index}`} src={icon} alt="codingIcon" className="h-6 lg:h-12 mx-auto dark:filter dark:invert" />
          ))}
        </div>
      </div>
    );
  }
  