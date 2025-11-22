import { InputHTMLAttributes } from 'react'
import { cn } from '@/app/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export default function Input({ error, className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'h-12 w-full px-4 rounded-lg border border-gray-300',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
        'transition-all duration-200',
        error && 'border-danger focus:ring-danger',
        className
      )}
      {...props}
    />
  )
}

