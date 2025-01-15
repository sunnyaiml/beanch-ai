import React, { useState, useRef, useEffect } from 'react';

const CompareAccuracy = () => {
  const [containerWidth, setContainerWidth] = useState('100%');
  const containerRef = useRef(null);

  const data = [
    { slot: 1, accuracy: 85 },
    { slot: 2, accuracy: 45 },
    { slot: 3, accuracy: 35 },
    { slot: 4, accuracy: 65 },
    { slot: 5, accuracy: 55 },
    { slot: 6, accuracy: 45 },
    { slot: 7, accuracy: 75 }
  ];

  const timeSlots = ['10MIN', '15MIN', '30MIN', '45MIN'];

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        // Update only if the width has changed
        if (width !== parseInt(containerWidth)) {
          setContainerWidth(`${width}px`);
        }
      }
    };

    // Debounce function to limit resize event calls
    const debounceResize = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(handleResize, 100);
    };

    // Initial size set
    handleResize();

    // Add resize listener
    window.addEventListener('resize', debounceResize);

    // Cleanup listener
    return () => {
      clearTimeout(window.resizeTimeout);
      window.removeEventListener('resize', debounceResize);
    };
  }, [containerWidth]);

  return (
    <div 
      ref={containerRef}
      className="
        bg-white 
        rounded-lg 
        p-6 
        shadow-sm 
        w-full 
        max-w-full 
        overflow-hidden
      "
      style={{ 
        maxWidth: '800px', // Set a maximum width
        height: '200px', // Set height similar to improvements section
        width: containerWidth 
      }}
    >
      {/* Header Section */}
      <div className="flex items-center mb-4 md:mb-6">
        <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <h2 className="text-lg md:text-xl font-bold">Compare Accuracy</h2>
      </div>

      {/* Time Slots Section */}
      <div className="flex justify-end mb-3 md:mb-4">
        <div className="flex space-x-2 md:space-x-4">
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              className="
                px-2 py-1 
                md:px-3 md:py-1 
                rounded-full 
                bg-[#3CCFCF] 
                text-white 
                text-xs 
                md:text-sm
              "
            >
              {slot}
            </div>
          ))}
        </div>
      </div>

      {/* Chart Section */}
      <div 
        className="
          relative 
          h-48 
          md:h-64 
          overflow-x-auto
        "
      >
        {/* Y-Axis Labels */}
        <div className="
          absolute 
          left-0 
          bottom-0 
          w-8 
          md:w-12 
          h-full 
          flex 
          flex-col 
          justify-between 
          text-xs 
          md:text-sm 
          text-gray-600
        ">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>
       
        {/* Chart Bars */}
        <div 
          className="
            ml-8 
            md:ml-12 
            h-full 
            flex 
            items-end 
            space-x-3 
            md:space-x-6
          "
          style={{ width: containerWidth }}
        >
          {data.map((item, index) => (
            <div 
              key={index} 
              className="
                flex-1 
                flex 
                flex-col 
                items-center
              "
            >
              <div
                className="
                  w-full 
                  bg-purple-500 
                  rounded-t-lg
                "
                style={{ height: `${item.accuracy}%` }}
              ></div>
              <span className="
                mt-1 
                md:mt-2 
                text-xs 
                md:text-sm 
                text-gray-600
              ">
                {item.slot}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareAccuracy;
