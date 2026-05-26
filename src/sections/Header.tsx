import HeaderImage from "../assets/images/hero/dashboard.png"
import TrustedByLogos from "../components/layout/TrustedByLogos"
import PrimaryButton from "../components/ui/PrimaryButton"
import SecondaryButton from "../components/ui/SecondaryButton"

export default function Header() {
  return (
    <section
      id="header"
      className="relative min-h-screen pt-[120px] lg:pt-[160px] pb-12 flex flex-col justify-start lg:justify-center"
      style={{ background: 'var(--bg-dark-main)' }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full mt-8 lg:mt-0">

        {/* LEFT */}
        <div className="flex flex-col gap-5 max-w-[580px] w-full text-center lg:text-left">
            <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-light leading-[1.15] tracking-tight text-white">
              The new foundation <br className="hidden sm:block" />of modern banking
            </h2>

            <p className="text-[#8A9BB5] text-[15px] sm:text-[17px] leading-relaxed max-w-[480px] mx-auto lg:mx-0">
              We drive innovation and growth, provide seamless customer experience and operational excellence
            </p>

            <div className="flex flex-wrap gap-3 mt-2 justify-center lg:justify-start">
              <PrimaryButton label="Request Demo" href="#demo" />
              <SecondaryButton label="Contact Us" href="#contact" />
            </div>

            {/* Trusted By Logos */}
            <br></br>
            <TrustedByLogos />
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-[480px] lg:max-w-none lg:w-[50%] flex justify-center lg:justify-end relative">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(0,102,255,0.3) 0%, transparent 65%)',
                filter: 'blur(50px)',
                zIndex: 0
              }}
            />
            <img
              src={HeaderImage}
              alt="N7 Banking Platform Dashboard"
              className="relative z-10 w-full max-w-[540px] drop-shadow-2xl"
            />
          </div>
      </div>
    </section>
  )
}