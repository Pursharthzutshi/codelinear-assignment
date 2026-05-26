import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useScrollState } from '../../hooks/useScrollState'

const navLinks = [
  { label: 'SOLUTIONS', href: '#solutions', hasDropdown: true },
  { label: 'RESOURCES', href: '#resources', hasDropdown: true },
  { label: 'ABOUT US', href: '#company', hasDropdown: false },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrollState(20)

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[800px] z-50 transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`}>
      <div
        className=" flex items-center justify-between px-8 transition-all duration-300 shadow-2xl"
        style={{ 
          padding: '0 24px',
          height: '72px',
          background: '#182029', 
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)'
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center flex-shrink-0" aria-label="N7 Home">
          <span className="text-white text-[28px] font-medium tracking-wide">N7</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.1em] font-medium transition-colors duration-200 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown size={14} className="opacity-70 mt-[1px]" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#demo"
            className="flex items-center justify-center text-[10px] uppercase tracking-[0.1em] font-medium text-white transition-colors hover:bg-white/5"
            style={{ 
              height: '42px', 
              padding: '0 24px', 
              borderRadius: '10px', 
              border: '1px solid rgba(255,255,255,0.2)' 
            }}
          >
            REQUEST DEMO
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: 'rgba(255,255,255,0.8)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 overflow-hidden shadow-2xl"
            style={{ 
              background: '#182029', 
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.08)' 
            }}
          >
            <nav className="px-6 py-6 flex flex-col gap-5" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.1em] font-medium py-2"
                  style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.06)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className="opacity-70 mt-[1px]" />}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#demo"
                  className="flex items-center justify-center text-[10px] uppercase tracking-[0.1em] font-medium text-white transition-colors hover:bg-white/5 w-full"
                  style={{ 
                    height: '42px', 
                    borderRadius: '10px', 
                    border: '1px solid rgba(255,255,255,0.2)' 
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  REQUEST DEMO
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
