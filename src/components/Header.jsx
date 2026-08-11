import React from "react";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-professional-50 via-white to-professional-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-32 overflow-hidden border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-professional-200/40 blur-3xl"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-8 relative z-10 flex flex-col justify-center">
        <div className="text-left animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight drop-shadow-sm transition-colors">
            Janel Erguin Cuaresma
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-professional-600 dark:text-professional-400 mb-6 transition-colors">
            Systems Analyst
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed font-light transition-colors">
            Experienced Systems Analyst with a demonstrated history of working
            in the aviation, IT, and HR industries. Skilled in SAP
            SuccessFactors, SAP HCM, Business Process Analysis, and
            cross-functional team collaboration. Adept at bridging the gap
            between business needs and technical solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:janelanne.erguin@gmail.com"
              className="inline-block text-center whitespace-nowrap w-full sm:w-auto bg-professional-600 hover:bg-professional-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#experience"
              className="inline-block text-center whitespace-nowrap w-full sm:w-auto bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
