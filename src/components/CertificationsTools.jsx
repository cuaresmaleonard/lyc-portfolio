import React from 'react';

const tools = [
  { name: "SAP SuccessFactors", category: "HRMS" },
  { name: "SAP HCM", category: "ERP / HR" },
  { name: "SAP Business One", category: "ERP" },
  { name: "Salesforce", category: "CRM" },
  { name: "ServiceNow", category: "ITSM" },
  { name: "Oracle HRMS", category: "Legacy HRMS" }
];

const CertificationsTools = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 relative inline-block text-center w-full">
          Tools & Platforms
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-16 h-1 bg-professional-500 rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-4 bg-professional-100 dark:bg-professional-900/50 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-professional-600 dark:text-professional-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">{tool.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{tool.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsTools;
