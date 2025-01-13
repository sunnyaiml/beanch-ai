import React from 'react';

const ApproachData = () => {
  const approaches = [
    { label: 'Based on Facts', percentage: 25, color: 'bg-purple-200' },
    { label: 'Based on Analysis', percentage: 32, color: 'bg-blue-200' },
    { label: 'Based on Elimination', percentage: 19, color: 'bg-green-200' },
    { label: 'Based on Guess', percentage: 24, color: 'bg-yellow-200' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-6">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <h2 className="text-xl font-bold">Approach Data</h2>
      </div>

      <div className="space-y-4">
        {approaches.map((approach, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{approach.label}</span>
              <span className="text-sm font-medium text-gray-700">{approach.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`${approach.color} h-2.5 rounded-full`}
                style={{ width: `${approach.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproachData;
