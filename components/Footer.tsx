import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-700 text-primary-50">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-serif font-normal mb-4">Philia Living Homecare</h3>
            <p className="text-sm mb-4 text-primary-100">
              Providing exceptional in-home care services throughout North Carolina, bringing compassionate care directly to your home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="hover:text-primary-400 transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary-400 transition-colors">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/testimonials" className="hover:text-primary-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-primary-400 transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">(919) 519-8477</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">marse@philialivingnc.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">North Carolina, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-600 mt-8 pt-8 text-center text-sm">
          <p className="text-primary-100">&copy; {currentYear} Philia Living Homecare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
