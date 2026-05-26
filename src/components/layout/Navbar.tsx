import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useScrollState } from '../../hooks/useScrollState'
import { solutionsLinks } from '../../data/sections-data'

const navLinks = [
  { label: 'SOLUTIONS', href: '#solutions', hasDropdown: true },
  { label: 'RESOURCES', href: '#resources', hasDropdown: true },
  { label: 'ABOUT US', href: '#company', hasDropdown: false },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const scrolled = useScrollState(20)

  return (
    <>
      <header className={`fixed top-2 md:top-6 left-1/2 -translate-x-1/2 w-full max-w-[700px] z-50 transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`}>
        <div style={{padding:"20px"}}
          className="flex items-center justify-between w-full transition-all duration-300 md:h-[72px] md:bg-[#182029] md:rounded-[20px] md:border md:border-[rgba(255,255,255,0.08)] md:backdrop-blur-md md:shadow-2xl"
        >
          {/* Logo */}
          <a href="/" className="hidden md:flex items-center flex-shrink-0" aria-label="N7 Home">
            <span className="text-white text-[28px] font-medium tracking-wide">N7</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative py-4"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.1em] font-medium transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <motion.span
                      animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center"
                    >
                      <ChevronDown size={14} className="opacity-70 mt-[1px]" />
                    </motion.span>
                  )}
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[320px] bg-[#182029]/95 border border-[rgba(255,255,255,0.08)] backdrop-blur-md rounded-xl shadow-2xl p-5 z-50 flex flex-col gap-2"
                    >
                      {link.label === 'SOLUTIONS' ? (
                        <div style={{padding: '10px'}}  className="flex flex-col gap-2">
                          {solutionsLinks.map((item) => (
                            <a
                              key={item}
                              href="#solutions"
                              onClick={() => setActiveDropdown(null)}
                              className="text-[14px] text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors whitespace-pre-line text-left block"
                            >
                              {item.replace('\n', ' ')}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <div style={{padding: '10px'}} className="flex flex-col gap-2">
                          <a
                            href="#resources"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[14px] text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors text-left block"
                          >
                            Fintech Insights
                          </a>
                          <a
                            href="#case-studies"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[14px] text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors text-left block"
                          >
                            Case Studies
                          </a>
                          <a
                            href="#company"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[14px] text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors text-left block"
                          >
                            Core Team
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
        </div>
      </header>

      {/* Mobile hamburger - floating in bottom right */}
      <button
        id="mobile-menu-toggle"
        className="md:hidden fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-[#182029]/95 border border-[rgba(255,255,255,0.15)] backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300 active:scale-95 hover:bg-[#1f2935]"
        style={{ color: 'rgba(255,255,255,0.9)' }}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 w-full h-screen overflow-hidden"
            style={{ 
              background: '#000D12' // Using the main dark background
            }}
          >
            <div className="flex flex-col h-full pt-[120px] px-8 pb-12 justify-start">
              <nav style={{padding:"20px"}} className="flex flex-col gap-4" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <div key={link.label} className="border-b animate-none" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    {link.hasDropdown ? (
                      <button
                        className="flex items-center justify-between text-[14px] uppercase tracking-[0.1em] font-medium py-3 w-full text-left text-white"
                        onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                      >
                        {link.label}
                        <motion.span
                          animate={{ rotate: mobileDropdown === link.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center"
                        >
                          <ChevronDown size={18} className="opacity-70" />
                        </motion.span>
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="flex items-center justify-between text-[14px] uppercase tracking-[0.1em] font-medium py-3 text-white block"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </a>
                    )}

                    {/* Submenu Accordion */}
                    <AnimatePresence>
                      {link.hasDropdown && mobileDropdown === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden flex flex-col gap-2 pl-4 pb-4"
                        >
                          {link.label === 'SOLUTIONS' ? (
                            solutionsLinks.map((item) => (
                              <a
                                key={item}
                                href="#solutions"
                                onClick={() => {
                                  setMobileDropdown(null);
                                  setMobileOpen(false);
                                }}
                                className="text-[15px] text-white/70 hover:text-white py-3 whitespace-pre-line text-left block"
                              >
                                {item.replace('\n', ' ')}
                              </a>
                            ))
                          ) : (
                            <>
                              <a
                                href="#resources"
                                onClick={() => {
                                  setMobileDropdown(null);
                                  setMobileOpen(false);
                                }}
                                className="text-[15px] text-white/70 hover:text-white py-3 text-left block"
                              >
                                Fintech Insights
                              </a>
                              <a
                                href="#case-studies"
                                onClick={() => {
                                  setMobileDropdown(null);
                                  setMobileOpen(false);
                                }}
                                className="text-[15px] text-white/70 hover:text-white py-3 text-left block"
                              >
                                Case Studies
                              </a>
                              <a
                                href="#company"
                                onClick={() => {
                                  setMobileDropdown(null);
                                  setMobileOpen(false);
                                }}
                                className="text-[15px] text-white/70 hover:text-white py-3 text-left block"
                              >
                                Core Team
                              </a>
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="mt-8">
                  <a
                    href="#demo"
                    className="flex items-center justify-center text-[12px] uppercase tracking-[0.1em] font-medium text-white transition-colors hover:bg-white/5 w-full"
                    style={{ 
                      height: '52px', 
                      borderRadius: '12px', 
                      border: '1px solid rgba(255,255,255,0.2)' 
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    REQUEST DEMO
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
