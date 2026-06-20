import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function LandingPage() {
  const tags = ['ATS Friendly', 'Live Preview', 'Secure', 'PDF Export', 'Cover Letters']

  return (
    <div className="relative bg-white pt-0 pb-0">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">

          {/* Left Column: Text & CTAs */}
          <div className="w-full lg:w-[45%] flex flex-col items-start pt-10 lg:pt-20">

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-[#1a1a1a] tracking-tight leading-[1.1] mb-8 animate-fade-in-up">
              Build & Analyze <br />
              Your <span className="font-serif-italic text-accent-500 font-medium tracking-normal ml-2">Resume</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 mb-12 max-w-sm animate-fade-in-up stagger-1 font-medium leading-relaxed">
              Make sure your application stands out. <br />
              Consult your resume against ATS with us.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-6 mb-16 animate-fade-in-up stagger-2">
              <Link to="/builder" className="btn-primary px-8 py-4 text-base shadow-lg shadow-black/10">
                Get Started
              </Link>

              {/* Circular arrow button mimicking the reference */}
              <Link to="/analyzer" className="btn-circle group" aria-label="Compare Resume">
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-800 transition-colors" />
              </Link>
            </div>

            {/* Pill Tags */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-3">
              {tags.map((tag) => (
                <span key={tag} className="pill-tag text-xs px-5 py-2.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image with distinctive layout */}
          <div className="w-full lg:w-[50%] relative animate-fade-in-up stagger-2 h-[550px] lg:h-[calc(100vh-2rem)] min-h-[550px] max-h-[900px] hero-image-container flex justify-end z-[60]">

            {/* The main image container with large rounded corners EXCEPT top right */}
            <div className="relative w-full h-full bg-[#d0e0d0] rounded-tl-[4rem] rounded-bl-[4rem] rounded-br-[4rem] rounded-tr-[1rem] overflow-hidden">
              <img
                src="/hero-image.png"
                alt="Organized minimalist desk"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right Decorative Cutout & Button */}
            <div className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-bl-[3rem] flex items-center justify-center z-10 p-6 hidden sm:flex">
              {/* Decorative pseudo-corners to make the cutout look smooth */}
              <div className="absolute top-0 -left-6 w-6 h-6 bg-transparent" style={{ boxShadow: '10px -10px 0 10px white', borderTopRightRadius: '1.5rem' }}></div>
              <div className="absolute -bottom-6 right-0 w-6 h-6 bg-transparent" style={{ boxShadow: '10px -10px 0 10px white', borderTopRightRadius: '1.5rem' }}></div>

              {/* Inner light green circle */}
              <Link to="/builder" className="w-full h-full rounded-full bg-[#c2dec2] hover:bg-[#a3c19d] transition-colors flex items-center justify-center group relative z-20">
                <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            {/* Bottom Left Decorative Cutout & Card */}
            <div className="absolute bottom-0 left-0 w-[230px] h-[96px] lg:w-[270px] lg:h-[110px] bg-white rounded-bl-[4rem] rounded-tr-[3rem] flex items-center justify-start pl-4 lg:pl-6 z-20">
              {/* Decorative pseudo-corners to make the cutout look smooth */}
              <div className="absolute -top-6 left-0 w-6 h-6 bg-transparent" style={{ boxShadow: '-10px 10px 0 10px white', borderBottomLeftRadius: '1.5rem' }}></div>
              <div className="absolute bottom-0 -right-6 w-6 h-6 bg-transparent" style={{ boxShadow: '-10px 10px 0 10px white', borderBottomLeftRadius: '1.5rem' }}></div>

              {/* The "Resume Experts" Card inside the cutout (styled as a grey pill capsule) */}
              <div className="bg-[#f1f5f9] border border-slate-200/60 rounded-[1.5rem] py-2.5 px-4 flex items-center gap-3 shadow-sm mr-4">
                <div>
                  <p className="text-xs font-bold text-slate-800 leading-tight">Resume Experts</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">AI powered scoring</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-[#f9fbf9] mt-12 lg:mt-16 pt-12 pb-32 lg:pt-16 lg:pb-48 xl:pb-56 border-t border-b border-slate-100 relative z-10">
        <div className="custom-container">
          {/* Section Header */}
          <div className="mb-16 lg:mb-24 max-w-lg animate-fade-in-up">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5c8e5c] mb-3 block">Why ResumeForge</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] tracking-tight leading-tight">
              Everything you need to craft a standout resume.
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-8 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[#f2f7f2] flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-[#5c8e5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">Smart ATS Analysis</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Parse and evaluate your resume against top industry standard job descriptions. Get a detailed match score and recommendations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-8 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[#f2f7f2] flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-[#5c8e5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">Live Editing & Preview</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Build your details using our intuitive split-screen panel and see modifications immediately with real-time responsive templates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-8 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[#f2f7f2] flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-[#5c8e5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">Instant PDF Exports</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Generate highly polished, standard print layouts with one click. Clean design systems translate perfectly into final recruiters' files.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
