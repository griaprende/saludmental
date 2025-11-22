import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/app/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'lg' | 'md' | 'sm'
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'lg',
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'border-2 border-primary text-primary bg-transparent hover:bg-primary-light focus:ring-primary',
  }
  
  const sizes = {
    lg: 'h-14 px-6 text-base',
    md: 'h-12 px-5 text-base',
    sm: 'h-10 px-4 text-sm',
  }
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

