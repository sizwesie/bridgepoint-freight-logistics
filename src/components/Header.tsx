import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { COMPANY_NAME, PHONE } from '@utils/constants'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Choose Us', href: '#why-choose' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-premium z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-blue to-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BP</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold text-dark-navy">{COMPANY_NAME}</h1>
                <p className="text-xs text-accent-blue">Professional Relocation</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-grey hover:text-accent-blue font-medium text-sm transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Contact Info */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 text-grey hover:text-accent-blue text-sm"
            >
              <Phone size={18} />
              <span className="font-medium">Call Us</span>
            </a>
            <button className="btn btn-primary text-sm">Get Quote</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-grey hover:text-accent-blue font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 py-3 border-t border-border mt-2 flex gap-2">
              <button className="btn btn-primary text-sm flex-1">Get Quote</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
