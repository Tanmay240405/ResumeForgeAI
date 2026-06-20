import { Heart, Mail, ExternalLink, Sparkles, FileText } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 relative z-10">
      <div className="custom-container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent-500" />
              ResumeForge AI
            </h2>
            <p className="text-xs text-slate-500">
              Build. Analyze. Land your dream job.
            </p>
          </div>

          {/* Credits */}
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="text-sm text-slate-500 flex items-center gap-1.5">
              By
            </p>
            <p className="text-sm text-slate-700 font-semibold">
              Tanmay Saxena
            </p>
          </div>

          {/* Built for Digital Heroes Badge */}
          <div className="flex items-center">
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-50 text-accent-600 border border-accent-100 text-sm font-semibold hover:bg-accent-100 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4" />
              Built for Digital Heroes
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">

          <a
            href="mailto:tanmaysaxena2404@gmail.com"
            className="text-xs text-slate-500 hover:text-accent-500 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            tanmaysaxena2404@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
