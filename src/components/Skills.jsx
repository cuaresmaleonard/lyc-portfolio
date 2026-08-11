import React from 'react';

const skills = [
  "SAP SuccessFactors",
  "SAP HCM",
  "Employee Central",
  "Recruitment & Onboarding",
  "Time Tracking",
  "Performance & Goals",
  "Business Process Analysis",
  "Requirements Gathering",
  "System Integration",
  "User Acceptance Testing (UAT)",
  "Cross-functional Collaboration",
  "Incident Management"
];

const Skills = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 relative inline-block text-center w-full">
          Core Competencies
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-16 h-1 bg-professional-500 rounded-md"></span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="px-6 py-3 bg-professional-50 dark:bg-gray-800 text-professional-800 dark:text-professional-300 font-medium rounded-md shadow-sm border border-professional-100 dark:border-gray-700 hover:bg-professional-500 hover:text-white dark:hover:bg-professional-500 dark:hover:text-white transition-all duration-300 cursor-default hover:-translate-y-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
