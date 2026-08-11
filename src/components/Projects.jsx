import React from 'react';

const projects = [
  {
    title: "SAP SuccessFactors Data Migration",
    company: "Philippine Airlines, Inc.",
    description: "Supported the critical project implementation of transitioning PAL's legacy HRMS from Oracle to SAP SuccessFactors. Led data mapping, cleaning, and assisted in the data migration activity, ensuring a seamless transition of core HR data for thousands of employees.",
    technologies: ["SAP SuccessFactors", "Oracle HRMS", "Data Migration", "UAT"],
  },
  {
    title: "CRM Transformation & SAP B1 Rollout",
    company: "ePLDT, Inc.",
    description: "Participated in the planning and implementation of key IT initiatives including a complete CRM transformation (Salesforce) and SAP Business One rollout. Acted as the SAP B1 Master Data Controller to ensure strict data governance and integrity.",
    technologies: ["Salesforce", "SAP B1", "CRM", "Data Governance"],
  },
  {
    title: "SAP HCM Enhancements Delivery",
    company: "Accenture Philippines",
    description: "Designed, tested, and deployed numerous small-to-medium enhancements for SAP HCM applications. Prepared functional design specifications and led integration and regression testing for seamless module updates in Personnel Administration and Time Management.",
    technologies: ["SAP HCM", "Functional Design", "Regression Testing"],
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 relative inline-block">
          Key Projects
          <span className="absolute left-0 -bottom-2 w-1/2 h-1 bg-professional-500 rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card dark:bg-gray-900 dark:border-gray-700 p-4 sm:p-5 md:p-6 flex flex-col h-full hover:-translate-y-2">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-professional-600 dark:text-professional-400 font-medium text-sm">{project.company}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 flex-grow mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-professional-50 dark:bg-gray-800 text-professional-700 dark:text-professional-300 text-xs font-semibold rounded border border-professional-100 dark:border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
