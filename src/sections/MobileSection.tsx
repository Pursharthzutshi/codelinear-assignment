import { ArrowRight, Check } from 'lucide-react'
import { mobileFeatures } from '../data/sections-data'
import phoneHome from '../assets/images/phones/phone_home.png'
import phoneAnalytics from '../assets/images/phones/phone_analytics.png'
import phoneProfile from '../assets/images/phones/phone_profile.png'
import PrimaryButton from '../components/ui/PrimaryButton'
import SecondaryButton from '../components/ui/SecondaryButton'

export default function MobileSection() {
  return (
    <section
      id="company"
      className="relative sm:pb-20 overflow-hidden scroll-mt-28"
      style={{ background: '#F4F8FB',padding:"42px 2px 2px 2px"}}
    >

      {/* Background N7 Watermark */}
      <div  className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <span 
          className="font-black text-transparent select-none"
          style={{ 
            fontSize: '120vw',
            lineHeight: 0.8,
            WebkitTextStroke: '2px rgba(0, 102, 255, 0.05)',
            transform: 'translateY(-10%)'
          }}
        >
          N7
        </span>
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        
        {/* 3-Column Zigzag Layout for Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-y-24 md:gap-y-20 gap-x-12 lg:gap-x-24 ">
          
          {/* Row 1 */}
          <div className="flex flex-col gap-4 md:pt-12 order-1 md:order-none lg:pr-8 items-center md:items-start text-center md:text-left">
            <h2 style={{color:"black"}}>
              Digital banking out-of-the-box
            </h2>
            <p className="text-[#4A5D73] text-[13px] mb-8 leading-relaxed max-w-[340px]">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <div className="flex flex-col items-center md:items-start gap-5">
              <PrimaryButton label="REQUEST DEMO" href="#demo" className="!px-6 !py-3 !min-w-[160px] !h-auto" />
              <a href="#learn-more" className="text-[#0066FF] text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:opacity-80 transition-opacity mt-1">
                LEARN MORE <ArrowRight size={14} />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center order-2 md:order-none w-[280px] lg:w-[320px]">
            <img src={phoneHome} alt="Phone Dashboard" className="w-full h-auto drop-shadow-2xl object-contain rounded-[32px]" />
          </div>

          <div className="flex flex-col justify-center order-3 md:order-none lg:pl-8 justify-self-end w-full max-w-[380px] items-center md:items-start text-center md:text-left">
            <h3 style={{color:"black"}} className="text-lg font-light text-[var(--text-inverse)] mb-3">{mobileFeatures[0].title}</h3>
            <p className="text-[#4A5D73] text-[13px] leading-relaxed mb-6">{mobileFeatures[0].desc}</p>
            <div className="flex flex-col gap-4 w-full items-center md:items-start">
              {mobileFeatures[0].points.map(pt => (
                <div key={pt} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0066FF] flex items-center justify-center flex-shrink-0">
                    <Check size={12} strokeWidth={4} className="text-white" />
                  </div>
                  <span className="text-[var(--text-inverse)] text-[13px] font-medium text-left">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="hidden md:block order-4 md:order-none"></div>

          <div className="flex flex-col justify-center order-5 md:order-none mx-auto md:mx-0 w-full max-w-[380px] items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <h3 style={{color:"black"}} className="text-lg font-light text-[var(--text-inverse)] mb-3">{mobileFeatures[1].title}</h3>
            <p className="text-[#4A5D73] text-[13px] leading-relaxed mb-6">{mobileFeatures[1].desc}</p>
            <div className="flex flex-col gap-4 w-full items-center md:items-start">
              {mobileFeatures[1].points.map(pt => (
                <div key={pt} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0066FF] flex items-center justify-center flex-shrink-0">
                    <Check size={12} strokeWidth={4} className="text-white" />
                  </div>
                  <span className="text-[var(--text-inverse)] text-[13px] font-medium text-left">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center order-6 md:order-none w-[280px] lg:w-[320px] justify-self-end lg:pr-8">
            <img src={phoneAnalytics} alt="Phone Analytics" className="w-full h-auto drop-shadow-2xl object-contain rounded-[32px]" />
          </div>

          {/* Row 3 */}
          <div className="hidden md:block order-7 md:order-none"></div>

          <div className="flex justify-center order-8 md:order-none w-[280px] lg:w-[320px]">
            <img src={phoneProfile} alt="Phone Profile" className="w-full h-auto drop-shadow-2xl object-contain rounded-[32px]" />
          </div>

          <div className="flex flex-col justify-center order-9 md:order-none lg:pl-8 justify-self-end w-full max-w-[380px] items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <h3 style={{color:"black"}} className="text-lg font-light text-[var(--text-inverse)] mb-3">{mobileFeatures[2].title}</h3>
            <p className="text-[#4A5D73] text-[13px] leading-relaxed mb-6">{mobileFeatures[2].desc}</p>
            <div className="flex flex-col gap-4 w-full items-center md:items-start">
              {mobileFeatures[2].points.map(pt => (
                <div key={pt} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0066FF] flex items-center justify-center flex-shrink-0">
                    <Check size={12} strokeWidth={4} className="text-white" />
                  </div>
                  <span className="text-[var(--text-inverse)] text-[13px] font-medium text-left">{pt}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Dark CTA Card at the Bottom */}
      <div className="container mx-auto max-w-[1200px] relative z-10"   style={{margin:"20px auto 20px auto"}}>
        <div 
          className="rounded-[27px] px-10 py-16 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
          style={{ background: '#02060A', padding: '48px' }}
        >
          {/* N7 Watermark inside CTA */}
          <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03]">
            <span 
              className="font-black text-[340px] text-transparent" 
              style={{ WebkitTextStroke: '3px #FFFFFF' }}
            >
              N7
            </span>
          </div>

          <div className="flex flex-col gap-6 max-w-[500px] relative z-10 items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl md:text-[42px] font-light text-white leading-[1.1] tracking-tight">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="text-[#8A9BB5] text-[15px] leading-relaxed">
              N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 shrink-0">
            <SecondaryButton label="CONTACT US" className="!min-w-[180px]" />
            <PrimaryButton label="REQUEST DEMO" className="!min-w-[180px]" />
          </div>
        </div>
      </div>

    </section>
  )
}
