import { Facebook, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react'
import { COMPANY_NAME, PHONE, EMAIL, LOCATION } from '@utils/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { label: 'Dealer Transfers', href: '#' },
      { label: 'Warehouse Transfers', href: '#' },
      { label: 'Fleet Relocation', href: '#' },
      { label: 'Distribution Services', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Safety', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Insurance Info', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  }

  return (
    <footer className="bg-dark-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-blue to-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BP</span>
              </div>
              <h3 className="font-bold text-lg">{COMPANY_NAME}</h3>
            </div>
            <p className="text-light-grey text-sm mb-4">Professional vehicle relocation services across South Africa.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent-blue transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent-blue transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent-blue transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-light-grey hover:text-accent-blue text-sm transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-navy pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-accent-blue mt-1" />
              <div>
                <p className="text-sm text-light-grey">Phone</p>
                <a href={`tel:${PHONE}`} className="hover:text-accent-blue transition">
                  {PHONE}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={20} className="text-accent-blue mt-1" />
              <div>
                <p className="text-sm text-light-grey">Email</p>
                <a href={`mailto:${EMAIL}`} className="hover:text-accent-blue transition">
                  {EMAIL}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-accent-blue mt-1" />
              <div>
                <p className="text-sm text-light-grey">Location</p>
                <p>{LOCATION}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-light-grey">
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
          <p>Professional Vehicle Relocation Services</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
