import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { featuresData as features } from '../data/sections-data'
import SecondaryButton from '../components/ui/SecondaryButton'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="products"
      ref={ref}
      className="section-py"
      style={{ background: 'var(--bg-dark-main)' }}
    >
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20">

          {/* LEFT */}
          <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
            <h2 className="text-white leading-tight">
              All of our solutions are tailor-made to your needs
            </h2>
            <SecondaryButton label="Request Demo" href="#solutions" />
          </div>

          {/* RIGHT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="flex flex-col gap-4"
              >
                <img src={feature.icon} alt={`${feature.title} icon`} className="w-[32px] h-[32px] object-contain" />
                <h3 className="text-white text-[22px] leading-snug">{feature.title}</h3>
                <p className="text-white/70 text-[14px] sm:text-base leading-[1.6]">
                  {feature.description}
                </p>
                <button className="text-[#00A3FF] text-sm uppercase flex items-center gap-2 w-fit">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}