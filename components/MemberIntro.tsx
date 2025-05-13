import React from 'react';

function MemberIntro() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
        
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full md:w-[45%]">
  <img
    src="/assets/abhrajit.svg"
    alt="Abhrajit Saha"
    className="rounded-xl w-[90%] mx-auto object-cover max-h-[400px]"
  />
</div>

        {/* Right: Content */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <h2 className="text-3xl font-semibold">Meet Abhrajit Saha</h2>

          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">⭐</span>
              <span>Co-Founder & Director, Techno Billion AI</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">🚀</span>
              <span>Led Google Cloud rollout for 15,000 students</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">🎓</span>
              <span>IIT Kharagpur Alumnus, Innovation Awardee, National Speaker</span>
            </li>
          </ul>

          <p className="text-gray-300 text-sm leading-relaxed">
            Abhrajit Saha, co-founder of Techno Billion AI, is an IIT Kharagpur graduate
            known for launching India’s fastest Google Cloud “Digital Campus,” onboarding
            15,000 students in two weeks. Formerly with AB InBev, he now drives AI access through
            labs in underserved regions and national ed-tech talks. Named a Top 30 Competitive
            E-School Leader, Abhrajit champions practical AI education, blending economic insight
            with a mission to empower a billion people to turn ideas into impactful solutions.
          </p>

          {/* Brand logos */}
          <div className="mt-6">
            <h4 className="text-sm uppercase text-gray-400 mb-3">Brands Educated</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <img src="/icons/iit.svg" alt="IIT" className="h-6" />
              <img src="/icons/google.svg" alt="Google" className="h-6" />
              <img src="/icons/nv.svg" alt="Techno India" className="h-6" />
              <img src="/icons/microsoft.svg" alt="Microsoft" className="h-6" />
              <img src="/icons/intel.svg" alt="Intel" className="h-6" />
              <img src="/icons/acer.svg" alt="Acer" className="h-6" />
              <img src="/icons/ti.svg" alt="Techno" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemberIntro;
