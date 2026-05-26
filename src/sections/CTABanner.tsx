import PrimaryButton from '../components/ui/PrimaryButton'
import SecondaryButton from '../components/ui/SecondaryButton'

export default function CTABanner() {
  return (
    <section className="section-py" style={{ background: 'var(--bg-dark-main)' }}>
      <div className="container mx-auto max-w-[1200px]">
        <div
          className="w-full flex flex-col md:flex-row justify-between items-start md:items-center pb-16 sm:pb-20 gap-8 md:gap-12"
        >
          {/* Left Content */}
          <div className="flex flex-col gap-4 md:max-w-[55%]">
            <h2 className="text-white text-[28px] sm:text-[36px] leading-[1.2] font-medium tracking-tight">
              Take the full advantage of<br className="hidden sm:block" /> going paper-less now.
            </h2>
            <p className="text-[#8A9BB5] text-[14px] sm:text-[15px] leading-relaxed">
              CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <SecondaryButton
              label="CONTACT US"
              className="!min-w-[160px] !bg-transparent hover:!bg-white/5 border border-white/20 w-full sm:w-auto"
            />
            <PrimaryButton label="REQUEST DEMO" className="!min-w-[160px] w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
