import { motion } from 'framer-motion'

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="1.5" className="opacity-50 flex-shrink-0">
    <path d="M12 2L15 9L22 10L17 15L18.5 22L12 18L5.5 22L7 15L2 10L9 9L12 2Z" fill="transparent" />
  </svg>
)

export default function MarqueeBanner() {
  const content = (
    <div className="flex items-center gap-8 sm:gap-12">
      <span className="text-[#03B4FD] text-[32px] sm:text-[48px] font-medium tracking-tight flex-shrink-0">N7</span>
      <StarIcon />
      <span className="text-black text-[32px] sm:text-[48px] font-medium tracking-tight whitespace-nowrap flex-shrink-0">
        Say 👋 to the new way of banking
      </span>
      <StarIcon />
      <span className="text-[#03B4FD] text-[32px] sm:text-[48px] font-medium tracking-tight flex-shrink-0">CB7</span>
      <StarIcon />
      <span className="text-black text-[32px] sm:text-[48px] font-medium tracking-tight whitespace-nowrap flex-shrink-0">
        Say 👋 to the new way of banking
      </span>
      <StarIcon />
    </div>
  )

  return (
    <div className="w-full bg-white overflow-hidden py-4 sm:py-6 border-y border-gray-100 flex items-center">
      <motion.div
        className="flex whitespace-nowrap flex-nowrap w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
      >
        {content}
        {content}
      </motion.div>
    </div>
  )
}
