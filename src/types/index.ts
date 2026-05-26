import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

// Nav and Logo

export interface NavLink {
  label: string
  href: string
  hasDropdown?: boolean
}

export interface TrustedLogo {
  name: string
  icon: ReactNode
}

// Sections

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export interface DashboardShowcase {
  title: string
  description: string
  points: string[]
  image: string
  imageAlt: string
}

export interface MobileFeature {
  title: string
  desc: string
  points: string[]
  image?: string
  imageAlt?: string
  imageRight?: boolean
}

export interface NewsItem {
  id: number
  tag: string
  title: string
  author: string
  date: string
  isLarge: boolean
}

export interface CaseStudy {
  id: number
  tag: string
  title: string
  brand: string
}

export interface FooterLocation {
  city: string
  address: string
}

// Buttons


export interface PrimaryButtonProps {
  label?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  children?: React.ReactNode
}

export interface SecondaryButtonProps {
  label?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  children?: React.ReactNode
}

export interface ReadMoreButtonProps {
  href?: string
  label?: string
  className?: string
  onClick?: () => void
}


