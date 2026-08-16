import React from 'react';
import TiltCard from './TiltCard';
import { SiSap } from 'react-icons/si';
import { FaCogs, FaSalesforce, FaDatabase } from 'react-icons/fa';

const tools = [
  { name: "SAP SuccessFactors", category: "HRMS", Icon: SiSap, color: "text-blue-600" },
  { name: "SAP HCM", category: "ERP / HR", Icon: SiSap, color: "text-blue-600" },
  { name: "SAP Business One", category: "ERP", Icon: SiSap, color: "text-blue-600" },
  { name: "Salesforce", category: "CRM", Icon: FaSalesforce, color: "text-sky-500" },
  { name: "ServiceNow", category: "ITSM", Icon: FaCogs, color: "text-teal-600" },
  { name: "Oracle HRMS", category: "Legacy HRMS", Icon: FaDatabase, color: "text-red-600" },
];

const CertificationsTools = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-professional-600 dark:text-teal-300 font-bold uppercase tracking-wider text-xs block mb-1">
            Tech Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Tools & Platforms
          </h2>
          <div className="w-16 h-1 bg-professional-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            Core technologies and cloud infrastructure powering production systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <TiltCard
              key={index}
              maxTilt={12}
              scale={1.03}
              className="group flex flex-col items-center justify-center p-6 bg-gray-50/80 dark:bg-gray-900/80 rounded-xl border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Glowing Icon Orb with 3D Depth */}
              <div className="w-20 h-20 mb-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-teal-400 transition-all duration-300">
                <tool.Icon className={`w-10 h-10 ${tool.color} transform group-hover:rotate-6 transition-transform duration-300`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center group-hover:text-professional-600 dark:group-hover:text-teal-300 transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">
                {tool.category}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsTools;
