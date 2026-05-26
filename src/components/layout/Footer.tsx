import { ArrowRight } from 'lucide-react'
import { locations, n7BankingLinks, socialsLinks, solutionsLinks } from '../../data/sections-data'

export default function Footer() {
  return (
    <footer className="section-py" style={{ background: 'var(--bg-dark-main)' }}>
      <div className="container mx-auto max-w-[1200px]">

        <div className="flex flex-col lg:flex-row lg:gap-4">

          {/* Left Side: Logo */}
          <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start">
            <span
              className="text-[120px] sm:text-[200px] lg:text-[260px] leading-none font-bold tracking-tight select-none"
              style={{
                background: 'linear-gradient(135deg, #00FFFF 0%, #0066FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              N7
            </span>
          </div>

          {/* Right Side: Links and Locations */}
          <div className="w-full lg:w-[65%] flex flex-col gap-12 lg:gap-16 mt-4 lg:mt-0">

            {/* Locations */}
            <div className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
              {locations.map((loc, idx) => (
                <div key={idx} className="flex-1 flex flex-col gap-3 items-center sm:items-start">
                  <h4 className="text-white text-[15px] font-light">{loc.city}</h4>
                  <p className="text-[#8A9BB5] text-[13px] leading-[1.6] whitespace-pre-line">
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
              {/* Solutions */}
              <div className="flex-1 flex flex-col gap-5 items-center sm:items-start">
                <h4 className="text-white text-[15px] font-light">Solutions</h4>
                <div className="flex flex-col gap-3 w-[200px] sm:w-full">
                  {solutionsLinks.map((link, idx) => (
                    <a key={idx} href="#" className="flex justify-between items-start group">
                      <span className="text-[#8A9BB5] text-[13px] leading-[1.4] whitespace-pre-line group-hover:text-white transition-colors text-left">
                        {link}
                      </span>
                      <ArrowRight size={14} strokeWidth={2} className="text-[#03B4FD] group-hover:translate-x-1 transition-transform mt-0.5 flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* N7 Banking */}
              <div className="flex-1 flex flex-col gap-5 items-center sm:items-start">
                <h4 className="text-white text-[15px] font-light">N7 Banking</h4>
                <div className="flex flex-col gap-3 w-[200px] sm:w-full">
                  {n7BankingLinks.map((link, idx) => (
                    <a key={idx} href="#" className="flex justify-between items-center group">
                      <span className="text-[#8A9BB5] text-[13px] group-hover:text-white transition-colors text-left">
                        {link}
                      </span>
                      <ArrowRight size={14} strokeWidth={2} className="text-[#03B4FD] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Our Socials */}
              <div className="flex-1 flex flex-col gap-5 items-center sm:items-start">
                <h4 className="text-white text-[15px] font-light">Our Socials</h4>
                <div className="flex flex-col gap-3 w-[200px] sm:w-full">
                  {socialsLinks.map((link, idx) => (
                    <a key={idx} href="#" className="flex justify-between items-center group">
                      <span className="text-[#8A9BB5] text-[13px] group-hover:text-white transition-colors text-left">
                        {link}
                      </span>
                      <ArrowRight size={14} strokeWidth={2} className="text-[#03B4FD] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center " style={{ borderColor: 'rgba(255,255,255,0.06)' ,paddingTop: '34px',}}>
          <p className="text-center text-[11px] text-[#8A9BB5] leading-relaxed">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] —{' '}
            <br className="hidden sm:block" />
            [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
          </p>
        </div>

      </div>
    </footer>
  )
}
