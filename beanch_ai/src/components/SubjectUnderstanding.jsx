import React from 'react';

const SubjectUnderstanding = () => {
  const subjects = [
    { name: 'Geography', color: 'bg-green-500' },
    { name: 'Politics', color: 'bg-yellow-500' },
    { name: 'Current Affairs', color: 'bg-blue-500' },
    { name: 'General Studies', color: 'bg-purple-500' },
    { name: 'Mathematics', color: 'bg-red-500' },
    { name: 'Social Studies', color: 'bg-gray-500' },
    { name: 'English Literature', color: 'bg-pink-500' },
    { name: 'Indian History', color: 'bg-orange-500' },
    { name: 'Economics', color: 'bg-teal-500' },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <h2 className="text-xl font-bold">Improvements</h2>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Subject Understanding</h3>
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject, index) => (
            <span
              key={index}
              className={`${subject.color} text-white px-3 py-1 rounded-full text-sm`}
            >
              {subject.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectUnderstanding;
