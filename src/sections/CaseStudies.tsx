import starImage from "../assets/images/icons/star_pattern.png"
import ReadMoreButton from '../components/ui/ReadMoreButton'
import { caseStudiesData } from '../data/sections-data';
import { useCarousel } from '../hooks/useCarousel';

export default function CaseStudies() {
  const { activeIndex, handlePrev, handleNext } = useCarousel(caseStudiesData.length);

  const active = caseStudiesData[activeIndex];

  return (
    <section id="case-studies" className="section-py relative overflow-hidden" style={{ background: 'var(--bg-dark-main)' }}>
      <div className="container mx-auto max-w-[1200px] mb-10 text-center">
        <h2 className="text-white font-light tracking-tight">
          Our Case Studies
        </h2>
        <br></br>
      </div>

      {/* Mobile: Simple single card */}
      <div className="block lg:hidden container mx-auto max-w-[640px]">
        <div
          className="w-full rounded-2xl overflow-hidden"
          style={{ background: '#040E16', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Pattern strip */}
          <div className="w-full flex items-center justify-center" style={{ padding: '32px', background: '#0F1A29' }}>
            <img src={starImage} alt="Star pattern" className="w-full max-w-[240px] h-auto object-contain" />
          </div>
          {/* Content */}
          <div className="flex flex-col gap-4 p-6">
            <span className="text-[#03B4FD] text-[11px] font-bold tracking-[0.15em] uppercase">
              {active.tag}
            </span>
            <h3 className="text-white text-[24px] leading-[1.2] font-light">
              {active.title}
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#8A9BB5] flex items-center justify-center text-[#060F17]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 22L12 18L22 22L12 2Z" />
                </svg>
              </div>
              <span className="text-[#8A9BB5] text-[14px] font-medium">{active.brand}</span>
            </div>
            <ReadMoreButton className="mt-2" />
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="flex items-center justify-center gap-6 w-full">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#03B4FD] flex items-center justify-center text-[#03B4FD] hover:bg-[#03B4FD] hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            {/* Indicators */}
            <div className="flex items-center gap-2 mx-2">
              {caseStudiesData.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-[12px] rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-[38px] bg-[#0B4B63]'
                      : 'w-[12px] border border-[#0B4B63]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#03B4FD] flex items-center justify-center text-[#03B4FD] hover:bg-[#03B4FD] hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          <a href="#" className="text-[#03B4FD] text-[12px] font-bold tracking-[0.1em] uppercase hover:text-white transition-colors mt-2">
            View All →
          </a>
        </div>
      </div>

      {/* Desktop: Carousel */}
      <div className="hidden lg:block">
        <div className="relative h-[440px] flex justify-center perspective-1000">
          {caseStudiesData.map((study, index) => {
            let position = index - activeIndex;
            if (position < -1) position += caseStudiesData.length;
            if (position > 1) position -= caseStudiesData.length;

            let zIndex = 10;
            let opacity = 1;
            let transform = 'translateX(0) scale(1)';

            if (position === -1) {
              zIndex = 5; opacity = 0.3; transform = 'translateX(-30%) scale(0.85)';
            } else if (position === 1) {
              zIndex = 5; opacity = 0.3; transform = 'translateX(30%) scale(0.85)';
            } else if (position !== 0) {
              zIndex = 0; opacity = 0; transform = 'translateX(0) scale(0.5)';
            }

            return (
              <div
                key={study.id}
                className="absolute w-full max-w-[800px] h-[420px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out cursor-pointer"
                style={{
                  zIndex, opacity, transform,
                  background: '#040E16',
                  boxShadow: position === 0 ? '0 20px 40px rgba(0,0,0,0.4)' : 'none',
                }}
                onClick={() => {
                  if (position === -1) handlePrev();
                  if (position === 1) handleNext();
                }}
              >
                <div className="flex gap-3 h-full w-full pointer-events-none">
                  <div
                    className="w-1/2 h-full flex items-center justify-center rounded-l-2xl"
                    style={{ padding: '48px', background: '#0F1A29' }}
                  >
                    <img src={starImage} alt="Star pattern" className="w-full h-auto object-contain" />
                  </div>
                  <div className="w-1/2 h-full flex flex-col gap-6 justify-center bg-[#060F17]" style={{ padding: '48px' }}>
                    <span className="text-[#03B4FD] text-[11px] font-bold tracking-[0.15em] uppercase mb-4 block">
                      {study.tag}
                    </span>
                    <h3 className="text-white text-[28px] leading-[1.2] font-light mb-8">
                      {study.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-auto">
                      <div className="w-6 h-6 rounded-full bg-[#8A9BB5] flex items-center justify-center text-[#060F17]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 22L12 18L22 22L12 2Z" />
                        </svg>
                      </div>
                      <span className="text-[#8A9BB5] text-[15px] font-medium">{study.brand}</span>
                    </div>
                    <ReadMoreButton className="mt-8" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="container mx-auto mt-10">
          <div className="flex items-center justify-between max-w-[1200px] mx-auto">
            <div className="w-[100px]" />
            <div className="flex items-center gap-6 justify-center flex-1">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-[#03B4FD] flex items-center justify-center text-[#03B4FD] hover:bg-[#03B4FD] hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              {/* Indicators */}
              <div className="flex items-center gap-2 mx-4">
                {caseStudiesData.map((_, idx) => (
                  <button
                    key={idx}
                    // If you want them clickable: onClick={() => setActiveIndex(idx)} 
                    // (But useCarousel hook might not expose setActiveIndex yet, so just decorative for now)
                    className={`h-[12px] rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'w-[38px] bg-[#0B4B63]'
                        : 'w-[12px] border border-[#0B4B63]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-[#03B4FD] flex items-center justify-center text-[#03B4FD] hover:bg-[#03B4FD] hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
            <div className="flex justify-end w-[100px]">
              <a href="#" className="text-[#03B4FD] text-[12px] font-bold tracking-[0.1em] uppercase hover:text-white transition-colors flex items-center gap-1">
                View All <span className="text-[14px]">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
