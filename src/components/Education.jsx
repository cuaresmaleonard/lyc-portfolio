import React from 'react';
import feuTechLogo from '../assets/feu_tech_logo.png';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 relative inline-block">
          Education
          <span className="absolute left-0 -bottom-2 w-1/2 h-1 bg-professional-500 rounded-md"></span>
        </h2>
        
        <div className="glass-card dark:bg-gray-800 p-6 md:p-8 border-l-4 border-l-professional-500 dark:border-l-teal-400 dark:border-gray-700 transition-colors">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center p-2 shadow-sm shrink-0">
                <img src={feuTechLogo} alt="FEU Tech logo" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                  Bachelor of Science in Electronics Engineering
                </h3>
                <div className="text-lg text-gray-600 dark:text-gray-300">
                  FEU Institute of Technology
                </div>
              </div>
            </div>
            <div className="bg-professional-50 dark:bg-gray-900 px-4 py-1.5 rounded-md border border-professional-100 dark:border-gray-700 text-sm font-semibold text-professional-700 dark:text-teal-300 whitespace-nowrap">
              2016
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
