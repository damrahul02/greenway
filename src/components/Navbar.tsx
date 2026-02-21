import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

interface SubItem {
  name: string;
  href: string;
}

interface DropdownItem {
  name: string;
  href: string;
  subItems?: SubItem[];
}

interface NavLink {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openFlyout, setOpenFlyout] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    {
      name: 'All Courses',
      href: '#courses',
      dropdown: [
        {
          name: 'IELTS',
          href: '#ielts',
          subItems: [{ name: 'Why IELTS', href: '/why-ielts' }],
        },
        {
          name: 'OTHM',
          href: '#othm',
          subItems: [{ name: 'Why OTHM', href: '/why-othm' }],
        },
      ],
    },
    {
      name: 'About Us',
      href: '/about',
      dropdown: [
        {
          name: 'Accreditation',
          href: '/accreditation',
          subItems: [
            { name: 'IELTS', href: '/accreditation/ielts' },
            { name: 'ATHE', href: '/accreditation/athe' },
            { name: 'OTHM', href: '/accreditation/othm' },
          ],
        },
        { name: 'Sister Concern', href: '/sister-concern' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Video Gallery', href: '/video-gallery' },
      ],
    },
    { name: 'Faculties', href: '/faculties' },
    { name: 'Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'Admission', href: '/admission' },
    { name: 'Career', href: '/career' },
    { name: 'Policies', href: '/policies' },
    { name: 'Contact', href: '/contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenFlyout(null);

    if (href.startsWith('/')) {
      navigate(href);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'backdrop-blur-xl bg-background/90 border-b border-white/5'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="/"
              onClick={(e) => { e.preventDefault(); scrollToSection('/'); }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 100 60" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M10 50 Q50 5 90 50"
                    fill="none"
                    stroke="url(#logoGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-tight">GREENWAY</span>
                <span className="text-sm font-medium text-blue-400 -mt-1">ACADEMY</span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-4">
              {navLinks.map((link, index) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(link.name)}
                      onMouseLeave={() => { setOpenDropdown(null); setOpenFlyout(null); }}
                    >
                      <motion.button
                        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors underline-grow py-2"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`}
                        />
                      </motion.button>

                      <AnimatePresence>
                        {openDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, rotateX: -10 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, y: 10, rotateX: -10 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-0 mt-2 w-56 glass rounded-xl overflow-visible shadow-2xl z-50"
                            style={{ perspective: '1000px' }}
                            ref={dropdownRef}
                          >
                            {link.dropdown.map((item) => (
                              <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.subItems && setOpenFlyout(item.name)}
                                onMouseLeave={() => setOpenFlyout(null)}
                              >
                                <button
                                  onClick={() => {
                                    if (!item.subItems) scrollToSection(item.href);
                                  }}
                                  className="w-full flex items-center justify-between px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all text-left"
                                >
                                  <span className="font-medium">{item.name}</span>
                                  {item.subItems && (
                                    <ChevronRight className="w-4 h-4 text-green-400" />
                                  )}
                                </button>

                                {/* Flyout sub-menu */}
                                {item.subItems && (
                                  <AnimatePresence>
                                    {openFlyout === item.name && (
                                      <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-full top-0 ml-1 w-44 glass rounded-xl overflow-hidden shadow-2xl z-50"
                                      >
                                        {item.subItems.map((sub) => (
                                          <button
                                            key={sub.name}
                                            onClick={() => scrollToSection(sub.href)}
                                            className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-green-400 hover:bg-white/5 transition-all text-left"
                                          >
                                            <span className="w-2 h-2 rounded-full bg-green-400/60 flex-shrink-0" />
                                            <span className="font-medium">{sub.name}</span>
                                          </button>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-muted-foreground hover:text-foreground transition-colors underline-grow py-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ y: -2 }}
                    >
                      {link.name}
                    </motion.a>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <motion.button
                onClick={() => navigate('/apply-now')}
                className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all btn-shine whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
              >
                Apply Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-4">
              <motion.button
                className="p-2 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col pt-24 px-6 overflow-y-auto pb-24">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                >
                  {link.dropdown ? (
                    <div className="border-b border-white/10">
                      <button
                        className="w-full flex items-center justify-between py-4 text-xl font-medium text-foreground"
                        onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileExpanded === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden ml-4 mb-3 space-y-1"
                          >
                            {link.dropdown.map((item) => (
                              <div key={item.name}>
                                {item.subItems ? (
                                  <>
                                    <button
                                      className="w-full flex items-center justify-between py-2 text-muted-foreground hover:text-green-400 transition-colors"
                                      onClick={() => setMobileSubExpanded(mobileSubExpanded === item.name ? null : item.name)}
                                    >
                                      <div className="flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4" />
                                        <span>{item.name}</span>
                                      </div>
                                      <ChevronRight className={`w-4 h-4 transition-transform ${mobileSubExpanded === item.name ? 'rotate-90' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                      {mobileSubExpanded === item.name && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="ml-6 overflow-hidden space-y-2 py-1"
                                        >
                                          {item.subItems.map((sub) => (
                                            <button
                                              key={sub.name}
                                              onClick={() => scrollToSection(sub.href)}
                                              className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-green-400 transition-colors w-full text-left"
                                            >
                                              <span className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                                              {sub.name}
                                            </button>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <button
                                    onClick={() => scrollToSection(item.href)}
                                    className="w-full flex items-center gap-2 py-2 text-muted-foreground hover:text-green-400 transition-colors text-left"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400/40" />
                                    {item.name}
                                  </button>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="block py-4 text-xl font-medium text-foreground border-b border-white/10 hover:text-green-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}

              <motion.button
                onClick={() => { navigate('/apply-now'); setIsMobileMenuOpen(false); }}
                className="mt-8 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                Apply Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
