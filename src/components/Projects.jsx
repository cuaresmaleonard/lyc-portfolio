import React, { useState } from 'react';
import TiltCard from './TiltCard';
import ProjectModal from './ProjectModal';
import { FaArrowRight, FaCheckCircle, FaCloud } from 'react-icons/fa';

// Visual preview components for each project card
const MicroservicesVisual = () => (
  <div className="w-full h-36 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-lg p-3 relative overflow-hidden flex items-center justify-center border border-teal-800/40">
    <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
    
    <div className="relative z-10 flex items-center justify-between w-full max-w-xs px-2">
      {/* Gateway Node */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-lg bg-teal-500/20 border border-teal-400 flex items-center justify-center text-teal-300 shadow-[0_0_12px_rgba(20,184,166,0.5)]">
          <FaCloud className="text-sm" />
        </div>
        <span className="text-[10px] font-mono text-teal-300 mt-1 font-semibold">API Gate</span>
      </div>

      {/* Connecting Stream Lines */}
      <div className="flex-1 flex flex-col gap-2 mx-2">
        <div className="h-[2px] bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 relative">
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 animate-ping"></span>
        </div>
        <div className="h-[2px] bg-gradient-to-r from-teal-400 via-teal-500 to-indigo-400 relative opacity-70"></div>
      </div>

      {/* Microservice Pods */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-800/90 border border-teal-500/40 rounded text-[10px] text-teal-200 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="font-mono">Auth-Svc</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-800/90 border border-teal-500/40 rounded text-[10px] text-teal-200 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span className="font-mono">Event-K8s</span>
        </div>
      </div>
    </div>

    {/* Live Metric Badge */}
    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-teal-900/80 border border-teal-500/30 text-[9px] font-mono text-teal-300">
      AWS &bull; Azure &bull; K8s
    </div>
  </div>
);

const CrossPlatformVisual = () => (
  <div className="w-full h-36 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-lg p-3 relative overflow-hidden flex items-center justify-center border border-indigo-800/40">
    <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

    <div className="relative z-10 flex items-center gap-4">
      {/* Mobile Device Frame */}
      <div className="w-16 h-28 bg-slate-950 rounded-xl border-2 border-slate-700 p-1 flex flex-col justify-between shadow-lg">
        <div className="w-6 h-1 bg-slate-700 rounded-full mx-auto"></div>
        <div className="space-y-1 my-auto">
          <div className="h-2 bg-indigo-500/50 rounded w-4/5"></div>
          <div className="h-2 bg-slate-700 rounded w-full"></div>
          <div className="h-2 bg-indigo-400/40 rounded w-3/5"></div>
        </div>
        <div className="flex justify-around pt-1 border-t border-slate-800">
          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
        </div>
      </div>

      {/* Web Browser Frame */}
      <div className="w-40 h-24 bg-slate-900 rounded-lg border border-slate-700 flex flex-col shadow-lg overflow-hidden">
        <div className="h-4 bg-slate-800 px-2 flex items-center gap-1 border-b border-slate-700">
          <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
          <div className="ml-2 w-16 h-1.5 bg-slate-700 rounded-full"></div>
        </div>
        <div className="p-2 space-y-1.5 flex-1 bg-slate-950/60">
          <div className="flex justify-between items-center">
            <div className="h-2 bg-teal-400/60 rounded w-12"></div>
            <div className="h-2 bg-indigo-400/60 rounded w-8"></div>
          </div>
          <div className="h-8 bg-slate-800/80 rounded border border-slate-700/60 flex items-center justify-center">
            <span className="text-[9px] font-mono text-indigo-300">NestJS + React</span>
          </div>
        </div>
      </div>
    </div>

    {/* Live Metric Badge */}
    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-indigo-900/80 border border-indigo-500/30 text-[9px] font-mono text-indigo-300">
      React Native &bull; Web
    </div>
  </div>
);

const DevOpsPipelineVisual = () => (
  <div className="w-full h-36 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-lg p-3 relative overflow-hidden flex items-center justify-center border border-sky-800/40">
    <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

    <div className="relative z-10 flex items-center gap-2 max-w-xs">
      {/* Terraform */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-lg bg-purple-500/20 border border-purple-400 flex items-center justify-center text-purple-300 text-[10px] font-bold">
          IaC
        </div>
        <span className="text-[9px] font-mono text-purple-300 mt-1">Terraform</span>
      </div>

      <div className="w-4 h-[2px] bg-sky-400 relative">
        <span className="absolute -top-0.5 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-sky-400 rotate-45"></span>
      </div>

      {/* CI/CD */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400 flex items-center justify-center text-sky-300 text-[10px] font-bold">
          CI/CD
        </div>
        <span className="text-[9px] font-mono text-sky-300 mt-1">Jenkins</span>
      </div>

      <div className="w-4 h-[2px] bg-sky-400 relative">
        <span className="absolute -top-0.5 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-sky-400 rotate-45"></span>
      </div>

      {/* Cypress & AKS */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300 text-xs font-bold">
          <FaCheckCircle />
        </div>
        <span className="text-[9px] font-mono text-emerald-300 mt-1">Cypress Gate</span>
      </div>
    </div>

    {/* Live Metric Badge */}
    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-sky-900/80 border border-sky-500/30 text-[9px] font-mono text-sky-300">
      Azure AKS &bull; Automated
    </div>
  </div>
);

const projects = [
  {
    title: "Cloud-Native Microservices Platform",
    company: "Ascendion",
    Visual: MicroservicesVisual,
    description: "Architected and deployed a highly scalable event-driven microservices ecosystem using AWS and Azure. Orchestrated containerized deployments via Kubernetes and Docker, significantly improving system throughput and deployment efficiency.",
    longDescription: "Engineered an enterprise-grade cloud-native architecture supporting high-throughput workloads. Built decoupled microservices communicating through event-driven streams, integrated with caching layers, resilient circuit breakers, and cloud infrastructure as code.",
    technologies: ["Node.js", "Kubernetes", "AWS", "Azure", "MongoDB", "Redis", "Docker"],
    highlights: [
      "Designed event-driven microservices architecture reducing response latency by over 35%",
      "Automated multi-region Kubernetes deployments using Docker containerization",
      "Integrated hybrid cloud strategies across AWS & Azure with automated failover",
      "Implemented Redis caching and optimized database indexing for high concurrent traffic"
    ]
  },
  {
    title: "Cross-Platform Startup Application",
    company: "People Work Smart Pty Ltd",
    Visual: CrossPlatformVisual,
    description: "Led the end-to-end development of a robust mobile and web platform. Built native mobile experiences using React Native and Expo, powered by a high-performance NestJS backend with JWT authentication and PostgreSQL.",
    longDescription: "Delivered a complete cross-platform startup solution from initial architectural wireframes to production release. Created a shared UI component library in React & React Native and designed secure auth workflows with NestJS modular architecture.",
    technologies: ["React Native", "React.js", "NestJS", "PostgreSQL", "Tailwind CSS", "Expo"],
    highlights: [
      "Built cross-platform iOS & Android mobile app with single codebase using Expo",
      "Architected NestJS backend with dependency injection and TypeScript type safety",
      "Implemented biometric passkey & JWT authentication reducing unauthorized access",
      "Optimized query performance and normalized relational PostgreSQL schemas"
    ]
  },
  {
    title: "Enterprise Test Automation & CI/CD",
    company: "Manulife IT Delivery Center",
    Visual: DevOpsPipelineVisual,
    description: "Automated critical deployment pipelines and testing workflows. Leveraged Terraform to provision Azure infrastructure, implemented Cypress testing integrated with JIRA, and secured secrets management via Azure Key Vault.",
    longDescription: "Standardized enterprise testing and cloud delivery pipelines across distributed financial engineering squads. Replaced brittle manual verification with automated Cypress quality gates and reproducible Terraform cloud provisioning.",
    technologies: ["Terraform", "Cypress", "Jenkins", "Azure AKS", "Key Vault", "JIRA API"],
    highlights: [
      "Automated end-to-end integration and regression suites using Cypress & Jenkins",
      "Provisioned infrastructure as code (IaC) on Azure AKS with Terraform",
      "Secured secret keys and environment credentials with Azure Key Vault integration",
      "Streamlined bug triage with bidirectional JIRA and test pipeline synchronization"
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-professional-600 dark:text-teal-300 font-bold uppercase tracking-wider text-xs block mb-1">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Key Engineering Projects
            </h2>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
            Interactive 3D Cards &bull; Click to explore architecture details
          </p>
        </div>
        
        {/* Projects Grid with 3D Parallax Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const VisualComponent = project.Visual;
            return (
              <TiltCard
                key={index}
                maxTilt={8}
                scale={1.02}
                onClick={() => setSelectedProject(project)}
                className="glass-card dark:bg-gray-800/90 dark:border-gray-700/80 p-5 flex flex-col h-full cursor-pointer group hover:border-professional-500/50 dark:hover:border-teal-500/50"
              >
                {/* Visual Header Mockup */}
                <div className="mb-4 transform group-hover:scale-[1.01] transition-transform duration-300">
                  <VisualComponent />
                </div>

                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-bold text-professional-600 dark:text-teal-300 uppercase tracking-wider">
                      {project.company}
                    </span>
                    <span className="text-xs text-gray-400 group-hover:text-professional-500 dark:group-hover:text-teal-300 transition-colors flex items-center gap-1 font-medium">
                      Details <FaArrowRight className="text-[10px] transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-professional-600 dark:group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 flex-grow mb-5 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-gray-100 dark:border-gray-700/60">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-professional-50 dark:bg-gray-900/60 text-professional-700 dark:text-teal-300 text-xs font-semibold rounded border border-professional-100 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
