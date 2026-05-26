import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import analyticsChart from '../assets/images/charts/analytics_chart.png'
import portfolioChart from '../assets/images/charts/portfolio_chart.png'
import PrimaryButton from '../components/ui/PrimaryButton'

const showcases = [
  {
    id: 'analytics',
    badge: 'Analytics',
    title: <>A complete cloud-based<br />core banking.</>,
    description: 'Faster time to market with our cloud-based core banking services.',
    hasLearnMore: true,
    image: analyticsChart,
    imageAlt: 'N7 analytics dashboard showing monthly revenue bar chart and growth trend line',
    imageLeft: false,
    color: '#0066FF',
  },
  {
    id: 'portfolio',
    badge: '',
    title: 'Run a more efficient, flexible, and digitally connected core banking system',
    description: '',
    listTitle: 'What you will get:',
    points: [
      'Customer-On Boarding',
      'CRM Activities',
      'Managing deposits and withdrawals',
      'Configuring New Banking Products',
      'Transaction management',
      'Loan disbursal and Loan management',
      'Interest Calculation',
      'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
      'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
    ],
    image: portfolioChart,
    imageAlt: 'KYC Dashboard',
    imageLeft: true,
    color: '#03B4FD',
    hasButtons: false,
  },
]

export default function DashboardShowcase() {
  return (
    <section
      id="solutions"
      className="section-py section-border scroll-mt-28"
      style={{ background: 'var(--bg-dark-main)' }}
    >
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-20 sm:gap-28">
          {showcases.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col gap-10 lg:gap-20 items-center relative ${
                item.imageLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* CB7 Watermark */}
              {item.id === 'analytics' && (
                <div className="absolute left-[-5%] top-[10%] pointer-events-none select-none opacity-[0.03] z-0">
                  <span 
                    className="font-black text-[300px] lg:text-[400px] text-transparent tracking-tighter" 
                    style={{ WebkitTextStroke: '3px #FFFFFF', lineHeight: 0.8 }}
                  >
                    CB7
                  </span>
                </div>
              )}

              {/* Text side */}
              <motion.div
                initial={{ opacity: 0, x: item.imageLeft ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="flex flex-col gap-5 w-full lg:w-1/2"
              >
                <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-light text-white leading-[1.1] tracking-tight relative z-10">
                  {item.title}
                </h2>

                {item.description && (
                  <p className="text-[14px] sm:text-[15px] leading-relaxed" style={{ color: '#8A9BB5' }}>
                    {item.description}
                  </p>
                )}

                {item.listTitle && (
                  <h4 className="text-white text-[15px] font-light mt-1">{item.listTitle}</h4>
                )}

                {item.points && item.points.length > 0 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-1">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-[18px] h-[18px] rounded-full bg-[#03B4FD] flex items-center justify-center flex-shrink-0 mt-[3px]">
                          <CheckCircle2 size={11} color="white" strokeWidth={3} />
                        </div>
                        <span className="text-[#8A9BB5] text-[13px] leading-[1.5]">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.hasButtons !== false && (
                  <div className="flex flex-col items-start gap-5 mt-6 relative z-10">
                    <PrimaryButton label="REQUEST DEMO" />
                    {item.hasLearnMore && (
                      <a href="#learn-more" className="text-[#0066FF] text-[13px] font-bold uppercase tracking-wider flex items-center gap-1 hover:opacity-80 transition-opacity">
                        LEARN MORE <span className="text-[16px] leading-none">→</span>
                      </a>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Image side */}
              <motion.div
                initial={{ opacity: 0, x: item.imageLeft ? -40 : 40, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                className="relative w-full lg:w-1/2 lg:-mr-12"
              >
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at center, ${item.color}25 0%, transparent 70%)`,
                    filter: 'blur(30px)',
                    transform: 'scale(1.05)',
                  }}
                />
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="w-full h-auto object-contain rounded-[8px] relative z-10"
                  style={{
                    boxShadow: `0 30px 60px rgba(0,0,0,0.4), 0 0 40px ${item.color}15`,
                  }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
