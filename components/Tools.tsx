import React from 'react'

type Props = {}

function Tools({}: Props) {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-16 flex flex-col items-center text-center bg-white dark:bg-[#0f0f0f]">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-12 flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
          Get hands-on with industry-leading AI tools
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-300">
          Build real projects using the same platforms powering modern innovation.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        
        {/* Card 1 */}
        <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden">
          <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-slate-800 overflow-hidden">
            <img
              src="https://unsplash.it/400/255?random=1"
              alt="Plugin Preview"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="p-6 text-left">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Plugins</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Connect your site to top platforms like Stripe, Notion, and more.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden">
          <div className="w-full aspect-[16/9] bg-gray-100 dark:bg-slate-800 overflow-hidden">
            <img
              src="https://unsplash.it/400/300?random=2"
              alt="Design Tool Preview"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="p-6 text-left">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Design Toolkit</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Craft beautiful, responsive layouts visually with drag-and-drop ease.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden">
          <div className="w-full aspect-[5/4] bg-gray-100 dark:bg-slate-800 overflow-hidden relative">
            <img
              src="https://unsplash.it/400/280?random=3"
              alt="Navigation Preview"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
            
          </div>
          <div className="p-6 text-left">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Page Navigation</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Organize your content with intuitive, visual page linking tools.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden sm:col-span-2">
          <div className="w-full aspect-[2/1] bg-gray-100 dark:bg-slate-800 overflow-hidden">
            <img
              src="https://unsplash.it/800/400?random=4"
              alt="Automation Preview"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="p-6 text-left">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">AI Automation</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Automate workflows with AI-powered agents that learn and improve over time.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden">
          <div className="w-full aspect-[16/9] bg-gray-100 dark:bg-slate-800 overflow-hidden">
            <img
              src="https://unsplash.it/400/300?random=5"
              alt="Design Tool Preview"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="p-6 text-left">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Design Toolkit</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Craft beautiful, responsive layouts visually with drag-and-drop ease.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Tools;
