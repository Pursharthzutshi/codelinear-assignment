import React from 'react'
import type { SecondaryButtonProps } from '../../types'



export default function SecondaryButton({
  label,
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  children,
}: SecondaryButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    bg-transparent hover:bg-white/5 active:bg-white/10
    text-white text-sm font-semibold tracking-widest uppercase
    rounded-[10px]
    transition-colors duration-200
    cursor-pointer select-none whitespace-nowrap
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `

  /* Match same dimensions as PrimaryButton for visual pairing */
  const inlineStyle: React.CSSProperties = {
    border: '1.5px solid rgba(255, 255, 255, 0.35)',
    padding: '15px 51px',
    minWidth: '210px',
    height: '48px',
  }

  if (href) {
    return (
      <a href={href} className={baseStyles.trim()} style={inlineStyle}>
        {children ?? label}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles.trim()}
      style={inlineStyle}
    >
      {children ?? label}
    </button>
  )
}
