import { ArrowRight } from 'lucide-react'
import SecondaryButton from '../components/ui/SecondaryButton'
import ReadMoreButton from '../components/ui/ReadMoreButton'
import starImage from "../assets/images/icons/star_pattern.png"
import { newsData } from '../data/sections-data'

export default function NewsSection() {
  return (
    <section className="section-py" style={{ background: 'var(--bg-dark-main)' }}>
      <div className="container mx-auto max-w-[1200px]">

        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">

          {/* Left Column */}
          <div className="flex flex-col items-start gap-8 lg:w-[38%] lg:pr-8 pt-2">
            <h3 className="text-white leading-tight">
              Get yourself up-to-speed on all the things happening in fintech
            </h3>
            <SecondaryButton
              label="INSIGHTS"
              className="!px-8 !py-3.5 !text-xs !tracking-[0.15em] !rounded-[12px] border-white/20"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 lg:w-[62%]">

            {/* Top Large Card */}
            {newsData.filter(item => item.isLarge).map(item => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row rounded-[16px] overflow-hidden"
                style={{ background: '#09121B', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Image Side */}
                <div
                  className="w-full sm:w-1/2 flex items-center justify-center"
                  style={{ padding: '24px', minHeight: '200px' }}
                >
                  <img src={starImage} alt="Star pattern" className="w-full max-w-[220px] sm:max-w-none h-auto object-contain" />
                </div>

                {/* Content Side */}
                <div
                  className="w-full sm:w-1/2 flex flex-col justify-between"
                  style={{ padding: '24px', gap: '20px' }}
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-[#03B4FD] text-[10px] font-mono tracking-[0.1em] uppercase">
                      {item.tag}
                    </span>
                    <h4 className="text-white text-[16px] font-medium leading-snug">{item.title}</h4>
                    <div className="flex items-center gap-4 text-[#8A9BB5] text-[11px] tracking-wide">
                      <span>{item.author}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <ReadMoreButton />
                </div>
              </div>
            ))}

            {/* Bottom Row - 2 Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              {newsData.filter(item => !item.isLarge).map((item) => (
                <div
                  key={item.id}
                  className="flex-1 rounded-[16px] flex flex-col justify-between"
                  style={{
                    background: '#09121B',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '28px',
                    gap: '20px',
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-[#03B4FD] text-[10px] font-mono tracking-[0.1em] uppercase">
                      {item.tag}
                    </span>
                    <h4 className="text-white text-[15px] font-medium leading-snug">{item.title}</h4>
                    <div className="flex items-center gap-4 text-[#8A9BB5] text-[11px] tracking-wide">
                      <span>{item.author}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <ReadMoreButton />
                </div>
              ))}
            </div>

            {/* View All Link */}
            <div className="flex justify-end mt-2">
              <a
                href="#insights"
                className="text-[#03B4FD] text-[11px] font-bold uppercase tracking-[0.1em] flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                READ ALL INSIGHTS <ArrowRight size={14} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
