import type { ReadMoreButtonProps } from "../../types"

export default function ReadMoreButton({
  href,
  label = 'READ MORE',
  className = '',
  onClick,
}: ReadMoreButtonProps) {
  const base =
    'inline-flex items-center justify-center w-full py-2.5 rounded-[20px] border border-white/15 text-[#8A9BB5] text-[10px] tracking-[0.15em] uppercase font-bold hover:bg-white/5 hover:text-white hover:border-white/40 active:scale-[0.98] transition-all duration-200 cursor-pointer'

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`} onClick={onClick}>
        {label}
      </a>
    )
  }

  return (
    <button style={{padding:"20px"}} className={`${base} ${className}`} onClick={onClick}>
      {label}
    </button>
  )
}
