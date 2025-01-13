import React from 'react';

const CompareAccuracy = () => {
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

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-6">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <h2 className="text-xl font-bold">Compare Accuracy</h2>
      </div>

      <div className="flex justify-end mb-4">
        <div className="flex space-x-4">
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              className="px-3 py-1 rounded-full bg-[#3CCFCF] text-white text-sm"
            >
              {slot}
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-64">
        <div className="absolute left-0 bottom-0 w-12 h-full flex flex-col justify-between text-sm text-gray-600">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>
        
        <div className="ml-12 h-full flex items-end space-x-6">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-purple-500 rounded-t-lg"
                style={{ height: `${item.accuracy}%` }}
              ></div>
              <span className="mt-2 text-sm text-gray-600">{item.slot}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareAccuracy;
