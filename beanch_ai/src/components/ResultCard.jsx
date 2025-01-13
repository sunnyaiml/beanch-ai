import React from 'react';

const ResultCard = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-6">
        <div className="flex-shrink-0 mr-4">
          <img src="/result-icon.svg" alt="Result" className="w-16 h-16" />
        </div>
        <div>
          <h2 className="text-purple-600 text-2xl font-bold">Your Result!</h2>
          <p className="text-gray-600 text-sm">All your insights & details in one place</p>
        </div>
      </div>

      <div className="bg-purple-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full mb-1">YOU'VE PASSED!</div>
              <div className="text-2xl font-bold">136<span className="text-gray-400 text-lg">/240</span></div>
            </div>
          </div>
          <div className="bg-[#3CCFCF] text-white px-3 py-1 rounded-lg text-sm">
            76% ACCURACY
          </div>
        </div>
      </div>

      <div className="border-b pb-6 mb-6">
        <div className="flex items-center mb-4">
          <img src="/avatar.jpg" alt="Top Scorer" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <div className="text-sm text-gray-600">Top Score</div>
            <div className="text-xl font-bold">230<span className="text-gray-400">/240</span></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">By Parth Akotkar</div>
          <div className="bg-[#3CCFCF] text-white px-3 py-1 rounded-lg text-sm">
            92% ACCURACY
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-2">Improve your Marks</h3>
        <p className="text-gray-600 text-sm mb-4">Improve your score by practicing more.</p>
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
          Practice more
        </button>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-bold mb-4">Revisit Paper</h3>
        <p className="text-gray-600 text-sm mb-4">Challenge your friends by simply sharing a link to this test</p>
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Visit
        </button>
        <p className="text-gray-400 text-xs mt-4">Instructions for how to upload your handwritten material in given</p>
      </div>
    </div>
  );
};

export default ResultCard;
