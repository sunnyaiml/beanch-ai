import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import OpenAI from 'openai';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center space-x-2 text-white/90 hover:text-white">
        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
          J
        </div>
        <span>Sunny</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">My Courses</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Assignments</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings & Privacy</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Help</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">View Profile</a>
          <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Out</button>
        </div>
      )}
    </div>
  );
};

// const Header = () => {
//   return (
//     <header className="bg-[#1E293B] text-white py-4 px-6">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-8">
//           <div className="flex items-center">
//             <img src="/firstbench-logo.svg" alt="Firstbench" className="h-8" />
//             <span className="ml-2 text-xl font-semibold">Firstbench</span>
//           </div>
//           <nav className="flex items-center space-x-6">
//             <a href="#" className="flex items-center text-white/90 hover:text-white">🏠 Dashboard</a>
//             <a href="#" className="flex items-center text-white/90 hover:text-white">✨ FirstGuru</a>
//             <a href="#" className="flex items-center text-white/90 hover:text-white">🏛️ TownHall</a>
//             <a href="#" className="flex items-center text-white/90 hover:text-white">⚡ AI Evaluation</a>
//             <a href="#" className="flex items-center text-white/90 hover:text-white">📊 Performance</a>
//             <a href="#" className="flex items-center text-white/90 hover:text-white">📝 Mock Test</a>
//           </nav>
//         </div>
//         <div className="flex items-center space-x-4">
//           <button className="text-white/90 hover:text-white">
//             <span className="text-xl">🔔</span>
//           </button>
//           <DropdownMenu /> {/* Add the dropdown menu here */}
//         </div>
//       </div>
//     </header>
//   );
// };

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuItems = [
    { icon: '🏠', text: 'Dashboard' },
    { icon: '✨', text: 'FirstGuru' },
    { icon: '🏛️', text: 'TownHall' },
    { icon: '⚡', text: 'AI Evaluation' },
    { icon: '📊', text: 'Performance' },
    { icon: '📝', text: 'Mock Test' }
  ];

  return (
    <header className="bg-[#1E293B] text-white py-4 px-6 relative">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Toggle - Left Side */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/firstbench-logo.svg" alt="Firstbench" className="h-8" />
          <span className="ml-2 text-xl font-semibold">Firstbench</span>
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="flex items-center text-white/90 hover:text-white">🏠 Dashboard</a>
          <a href="#" className="flex items-center text-white/90 hover:text-white">✨ FirstGuru</a>
          <a href="#" className="flex items-center text-white/90 hover:text-white">🏛️ TownHall</a>
          <a href="#" className="flex items-center text-white/90 hover:text-white">⚡ AI Evaluation</a>
          <a href="#" className="flex items-center text-white/90 hover:text-white">📊 Performance</a>
          <a href="#" className="flex items-center text-white/90 hover:text-white">📝 Mock Test</a>
        </nav>

        {/* Right Section - Notification and Profile */}
        <div className="flex items-center space-x-4">
          <button className="text-white/90 hover:text-white">
            <span className="text-xl">🔔</span>
          </button>
          <DropdownMenu />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1E293B] md:hidden">
          <div className="flex flex-col">
            {mobileMenuItems.map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="flex items-center p-4 border-t border-white/10 text-white/90 hover:bg-white/10"
              >
                <span className="mr-2">{item.icon}</span>
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const ResultSection = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="flex items-center justify-center mb-4">
        <img src="/result-illustration.svg" alt="Result" className="h-32" />
      </div>
      <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-2">Your Result!</h2>
      <p className="text-gray-500 text-center mb-8">All your insights & details in one place</p>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-100 p-2 rounded-md">
            <span className="text-indigo-600">✓</span>
          </div>
          <div className="ml-4">
            <div className="text-3xl font-bold">136<span className="text-gray-400 text-xl">/240</span></div>
            <div className="text-sm text-emerald-500 font-medium">76% ACCURACY</div>
          </div>
        </div>
        
        <div className="flex items-center border-t pt-4">
          <img src="/avatar.png" alt="Top Scorer" className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <div className="text-sm text-gray-500">Top Score</div>
            <div className="text-xl font-bold">230<span className="text-gray-400">/240</span></div>
            <div className="text-sm">
              <span className="text-gray-500">By</span>
              <span className="ml-1 font-medium">Parth Akotkar</span>
              <span className="ml-2 text-emerald-500">92% ACCURACY</span>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700">
        Practice more
      </button>

      <div className="mt-6 border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Revisit Paper</h3>
        <p className="text-gray-500 mb-4">Challenge your friends by simply sharing a link to this test</p>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700">
          Visit
        </button>
      </div>
    </div>
  );
};

const CompareAccuracyBox = () => (
  <div className="
    bg-white 
    rounded-lg 
    p-4 
    md:p-6 
    shadow-sm 
    w-full 
    max-w-full 
    md:max-w-[600px] 
    lg:max-w-[800px] 
    mx-auto 
    hover:shadow-md 
    transition-all 
    duration-300 
    ease-in-out
  ">
    <div className="flex items-start space-x-2 mb-4">
      <input
        type="checkbox"
        className="
          mt-1 
          rounded 
          border-gray-300 
          text-indigo-600 
          focus:ring-indigo-500
        "
        title="Select to compare accuracy metrics"
      />
      <div>
        <span className="text-gray-700 font-medium">Compare Accuracy</span>
        <p className="text-sm text-gray-500 mt-1">
          Select to compare accuracy metrics
        </p>
      </div>
    </div>
    <div className="
      flex 
      items-center 
      justify-center 
      h-[150px] 
      md:h-[200px] 
      text-gray-400
    ">
      <p className="text-center text-sm md:text-base">
        No data selected<br />
        Select checkbox to compare accuracy
      </p>
    </div>
  </div>
);

const SubjectUnderstanding = () => {
  const subjects = [
    { name: 'Geography', color: 'bg-sky-400' },
    { name: 'Politics', color: 'bg-amber-500' },
    { name: 'Current Affairs', color: 'bg-emerald-500' },
    { name: 'General Studies', color: 'bg-pink-500' },
    { name: 'Mathematics', color: 'bg-indigo-500' },
    { name: 'English Literature', color: 'bg-red-500' },
    { name: 'Economics', color: 'bg-purple-500' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-lg">↗</span>
        <h3 className="font-medium">Improvements</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {subjects.map(subject => (
          <span key={subject.name} className={`${subject.color} text-white text-sm px-3 py-1 rounded-full`}>
            {subject.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const ResponseTime = () => (
  <div className="bg-white rounded-lg p-4 shadow-sm">
    <div className="flex justify-between mb-2">
      <div className="bg-blue-100 p-2 rounded-md">
        <span className="text-4xl font-bold text-blue-600">60%</span>
      </div>
      <div className="bg-gray-100 p-2 rounded-md">
        <span className="text-gray-600">Ans took ↑ 2 min</span>
      </div>
    </div>
    <div className="text-center text-red-500 font-semibold text-sm">
      You are slow!
    </div>
  </div>
);

const ApproachData = () => (
  <div className="bg-white rounded-lg p-4 shadow-sm">
    <h3 className="font-medium mb-2 text-sm">Approach Data</h3>
    <div className="space-y-2">
      <div className="bg-blue-50 p-2 rounded-md flex justify-between text-sm">
        <span>Based on Facts</span>
        <span className="font-semibold">25%</span>
      </div>
      <div className="bg-blue-50 p-2 rounded-md flex justify-between text-sm">
        <span>Based on Analysis</span>
        <span className="font-semibold">32%</span>
      </div>
      <div className="bg-blue-50 p-2 rounded-md flex justify-between text-sm">
        <span>Based on Elimination</span>
        <span className="font-semibold">19%</span>
      </div>
      <div className="bg-blue-50 p-2 rounded-md flex justify-between text-sm">
        <span>Based on Guess</span>
        <span className="font-semibold">24%</span>
      </div>
    </div>
  </div>
);

const Suggestions = () => (
  <div className="bg-white rounded-lg p-4 shadow-sm">
    <h3 className="font-medium mb-2 text-sm">Suggestions</h3>
    <div className="space-y-2">
      <div className="bg-green-100 p-2 rounded-md flex justify-between text-sm">
        <span>40 sec</span>
        <span className="text-green-600">Easy</span>
      </div>
      <div className="bg-yellow-100 p-2 rounded-md flex justify-between text-sm">
        <span>1.5 min</span>
        <span className="text-yellow-600">Medium</span>
      </div>
      <div className="bg-red-100 p-2 rounded-md flex justify-between text-sm">
        <span>3 min</span>
        <span className="text-red-600">Hard</span>
      </div>
    </div>
  </div>
);


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column - Full width on mobile, 3 columns on larger screens */}
          <div className="md:col-span-3 w-full">
            <ResultSection />
          </div>
         
          {/* Right Column - Full width on mobile, 9 columns on larger screens */}
          <div className="md:col-span-9 w-full space-y-6">
            {/* Compare Accuracy Boxes - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <CompareAccuracyBox />
              <CompareAccuracyBox />
              <CompareAccuracyBox />
            </div>
           
            {/* Metrics Grid - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <SubjectUnderstanding />
              <ResponseTime />
              <ApproachData />
              <Suggestions />
            </div>

      
           
            {/* Charts - Responsive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-medium mb-4">Compare Accuracy</h3>
                
                {/* Responsive time selection */}
                <div className="flex flex-wrap space-x-2 mb-4">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded mb-2">10min</span>
                  <span className="text-gray-500 px-3 py-1 mb-2">15min</span>
                  <span className="text-gray-500 px-3 py-1 mb-2">30min</span>
                  <span className="text-gray-500 px-3 py-1 mb-2">45min</span>
                </div>
                
                <div className="chart-container" style={{ height: '29rem', width: '30rem' }}>
                  <Bar
                    data={{
                      labels: ['1', '2', '3', '4', '5', '6', '7'],
                      datasets: [{
                        data: [85, 45, 35, 60, 55, 45, 65],
                        backgroundColor: '#818CF8'
                      }]
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: true,
                      scales: {
                        y: {
                          beginAtZero: true,
                          max: 100,
                          ticks: {
                            callback: value => `${value}%`
                          }
                        }
                      },
                      plugins: {
                        legend: {
                          display: false
                        }
                      }
                    }}
                  />
                </div>
              </div>
             
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-medium mb-4">Time Taken</h3>
                
                <div className="relative">
                  <div className="flex justify-between mb-2">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="h-4 w-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500 mt-1">{i * 10}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-emerald-500"></div>
                    <div className="h-full w-2/5 bg-red-500" style={{ marginLeft: '33.33%' }}></div>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm mt-4 hidden md:block">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
