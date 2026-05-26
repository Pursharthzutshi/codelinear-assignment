import React from 'react'
import type { PrimaryButtonProps } from '../../types'

export default function PrimaryButton({
  label,
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  children,
}: PrimaryButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    text-white text-sm font-semibold tracking-widest uppercase
    rounded-[10px]
    transition-opacity duration-200 hover:opacity-90 active:opacity-80
    cursor-pointer select-none whitespace-nowrap
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `

  /* Exact padding from Figma: 15px top/bottom, 51px left/right */
  const inlineStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #03B4FD 0%, #053ACE 100%)',
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
