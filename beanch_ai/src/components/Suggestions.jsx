import React from 'react';

const Suggestions = () => {
  const timeData = [
    { label: 'Easy', time: '40sec', color: 'text-green-500' },
    { label: 'Medium', time: '1.5min', color: 'text-yellow-500' },
    { label: 'Hard', time: '3min', color: 'text-red-500' }
  ];

  const currentTime = new Date().toLocaleString();

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-bold">Suggestions</h2>
      </div>
      <div className="flex justify-between items-center space-x-4">
        {timeData.map((item, index) => (
          <div key={index} className="flex-1 text-center">
            <div className="bg-gray-100 rounded-lg p-3">
              <div className="text-sm text-gray-600 mb-1">{item.label}</div>
              <div className={`text-lg font-bold ${item.color}`}>{item.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="current-time">
        <p>Current Local Time: {currentTime}</p>
      </div>
    </div>
  );
};

export default Suggestions;
