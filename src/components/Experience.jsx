import React from 'react';
import palLogo from '../assets/pal_logo.png';
import accentureLogo from '../assets/accenture_logo.png';
import epldtLogo from '../assets/epldt_logo.png';
import ngaLogo from '../assets/nga_hr_logo.png';

const experiences = [
  {
    company: "Philippine Airlines, Inc.",
    location: "Pasay City, PH",
    title: "Systems Analyst",
    date: "Feb 2022 - Current",
    logo: palLogo,
    responsibilities: [
      "Served as the primary contact between business stakeholders and technical teams to gather, analyze, and document business and systems requirements.",
      "Analyzed business processes and translated requirements into functional specifications, user stories, process flows and system documentation.",
      "Managed incident resolution, troubleshooting, and root cause analysis for HR applications related issues, ensuring minimal disruption to business operations.",
      "Supported project implementation of transitioning from Oracle to SAP SF as the new HRMS of PAL.",
      "Assisted on the data migration activity for the SAP SF implementation.",
      "Responsible for the integration of HR Systems to other 3rd party and in-house applications of PAL.",
      "Collaborated with cross-functional teams to configure, test, and implement system enhancements, upgrades, and new functionalities within HR related applications.",
      "Provided functional support for SAP SuccessFactors modules, including Employee Central, Recruitment, Onboarding, Performance & Goals and Time Tracking.",
      "Successfully delivered multiple enhancement projects, improving HR process efficiency and user satisfaction.",
      "Coordinated User Acceptance Testing, developed test cases, and validated system changes to ensure alignment with business requirements."
    ]
  },
  {
    company: "Accenture Philippines",
    location: "Mandaluyong City, PH",
    title: "Application Development Analyst",
    date: "Oct 2021 - Feb 2022",
    logo: accentureLogo,
    responsibilities: [
      "Provided functional support to clients for SAP HCM modules, including Personnel Administration, Organizational Management, Time Management, and Payroll.",
      "Designed, developed, tested, and deployed small- to medium-scale enhancements for SAP HCM applications.",
      "Managed production support activities, including incident resolution and adherence to established Service Level Agreements.",
      "Gathered business requirements and prepared functional design specifications for SAP HCM enhancements and change requests.",
      "Performed integration, system, and regression testing to validate SAP HCM functionality and ensure successful deployment of enhancements."
    ]
  },
  {
    company: "ePLDT, Inc.",
    location: "Makati City, PH",
    title: "Business Systems Analyst",
    date: "Oct 2019 - Sep 2021",
    logo: epldtLogo,
    responsibilities: [
      "Analyzed business functions and processes to identify operational objectives, gather requirements, and define system output needs and reporting formats.",
      "Provided Level 1 application support for business-critical systems, including SAP B1 and Salesforce, by troubleshooting issues and delivering timely solutions to internal users.",
      "Served as the SAP B1 Master Data Controller, ensuring data accuracy, consistency, integrity, and compliance with established data governance standards.",
      "Participated in the planning, coordination, and implementation of key IT initiatives, including SAP B1 implementation, CRM transformation, and document digitization projects.",
      "Collaborated with business users and third-party vendors during User Acceptance Testing, facilitating test execution, defect resolution, and successful project delivery."
    ]
  },
  {
    company: "NGA HR Philippines",
    location: "Quezon City, PH",
    title: "SAP HCM Associate",
    date: "Dec 2017 - Feb 2019",
    logo: ngaLogo,
    responsibilities: [
      "Analyzed and resolved medium complexity problems related to the functional issues of SAP HR within agreed SLA.",
      "Provided functional and application support to clients, ensuring the effective operation of SAP HR systems and processes.",
      "Performed integration and system testing to validate enhancements, configurations, and defect resolutions.",
      "Managed support activities across multiple client accounts simultaneously while maintaining service quality and meeting delivery timelines.",
      "Supported the implementation of change requests, including requirements analysis, configuration, testing, deployment, and post-implementation support."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 relative inline-block">
          Professional Experience
          <span className="absolute left-0 -bottom-2 w-1/2 h-1 bg-professional-500 rounded-md"></span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card dark:bg-gray-900 dark:border-gray-700 p-6 md:p-8 transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-gray-100 dark:border-gray-800 gap-4">
                <div className="flex items-center gap-5">
                  {exp.logo && (
                    <div className="w-20 h-20 rounded-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center p-2 shadow-sm shrink-0">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="max-w-full max-h-full object-contain" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <div className="text-lg font-medium text-professional-600 dark:text-professional-400 mt-1">
                      {exp.company} <span className="text-gray-400 dark:text-gray-600 mx-2">&bull;</span> <span className="text-gray-500 dark:text-gray-400 text-base">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-600 dark:text-gray-300 shadow-sm whitespace-nowrap">
                  {exp.date}
                </div>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-professional-500 dark:text-professional-400 mr-3 mt-1.5">&bull;</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
