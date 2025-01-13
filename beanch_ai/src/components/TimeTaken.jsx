import React from 'react';

const TimeTaken = () => {
  const currentTime = '2025-01-10T11:13:19+05:30';
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-6">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-xl font-bold">Time Taken: {currentTime}</h2>
      </div>

      <div className="space-y-8">
        {/* Upper Timeline */}
        <div className="relative">
          <div className="absolute w-full h-2 bg-gray-200 rounded">
            <div className="absolute h-full w-3/4 bg-red-500 rounded"></div>
          </div>
          <div className="relative pt-6">
            <div className="flex justify-between text-xs text-gray-600">
              {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="h-2 w-px bg-gray-300 mb-1"></div>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        </div>

        {/* Lower Timeline */}
        <div className="relative">
          <div className="absolute w-full h-2 bg-gray-200 rounded">
            <div className="absolute h-full w-1/4 bg-green-500 rounded left-1/3"></div>
            <div className="absolute h-full w-1/3 bg-red-500 rounded-r right-0"></div>
          </div>
          <div className="relative pt-6">
            <div className="flex justify-between text-xs text-gray-600">
              {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="h-2 w-px bg-gray-300 mb-1"></div>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        </div>
      </div>
    </div>
  );
};

export default TimeTaken;
