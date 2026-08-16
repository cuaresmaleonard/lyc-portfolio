import React, { useEffect } from 'react';
import { FaTimes, FaCheckCircle, FaLayerGroup } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Visual Bar */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-start bg-gradient-to-r from-professional-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div>
            <span className="inline-block px-3 py-1 bg-professional-100 dark:bg-teal-950/80 text-professional-800 dark:text-teal-300 border border-transparent dark:border-teal-800/80 text-xs font-bold rounded-full mb-2">
              {project.company}
            </span>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Project Architectural Preview */}
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
              <FaLayerGroup className="text-professional-500 dark:text-teal-400" /> Architectural Highlights & Scope
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Achievements & Impact */}
          {project.highlights && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500 dark:text-emerald-400" /> Engineering Achievements
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-professional-500 dark:text-teal-400 mr-2.5 mt-0.5 font-bold">&#10003;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* System Architecture Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 bg-professional-50/50 dark:bg-gray-800/50 rounded-lg border border-professional-100 dark:border-gray-700">
                  <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                  <div className="text-base sm:text-lg font-bold text-professional-700 dark:text-teal-300 font-mono mt-0.5">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              Tech Stack & Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-professional-50 dark:bg-gray-800 text-professional-700 dark:text-teal-300 text-xs font-semibold rounded-md border border-professional-100 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-professional-600 hover:bg-professional-500 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
