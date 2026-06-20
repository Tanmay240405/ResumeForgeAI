import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, FileText, BarChart3, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/builder', label: 'Build a Resume' },
    { to: '/analyzer', label: 'Compare Resume' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100/50 transition-all duration-300">
      <div className="custom-container">
        <div className="flex items-center h-24">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group mr-8 lg:mr-12 shrink-0">
            <div className="w-12 h-12 shrink-0 rounded-full bg-[#f2f7f2] flex items-center justify-center transition-transform duration-300 group-hover:bg-[#e0eee0]">
              <FileText className="w-5 h-5 text-[#5c8e5c]" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-[0.95rem] font-semibold transition-colors duration-200 ${
                  isActive(to)
                    ? 'text-[#1a1a1a]'
                    : 'text-slate-500 hover:text-[#1a1a1a]'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex-1" /> {/* Spacer */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-surface-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white border-b border-slate-100 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                isActive(to)
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-surface-400 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
