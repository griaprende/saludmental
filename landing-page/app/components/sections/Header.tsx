'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '../ui/Button'
import { NAV_LINKS } from '@/app/lib/constants'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
        scrolled ? 'border-b border-gray-200 shadow-sm' : ''
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              SaludMental
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.replace('#', ''))}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Link
              href="/login"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Iniciar Sesión
            </Link>
            <Button variant="primary" size="md">
              Comenzar Gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-primary"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.replace('#', ''))}
                  className="block px-3 py-2 text-base font-medium text-text-primary hover:bg-gray-50 rounded-md"
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="/login"
                className="block px-3 py-2 text-base font-medium text-text-primary hover:bg-gray-50 rounded-md"
              >
                Iniciar Sesión
              </Link>
              <div className="px-3 pt-2">
                <Button variant="primary" size="md" className="w-full">
                  Comenzar Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

