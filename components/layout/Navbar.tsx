'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="font-serif text-2xl font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              Thanh Huyền Beauty
            </span>
          </motion.div>

          <motion.div
            className="hidden items-center space-x-8 md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              staggerChildren: 0.1,
              delayChildren: 0.3,
            }}
          >
            {[
              { href: '#home', label: 'Trang chủ' },
              { href: '#about', label: 'Giới thiệu' },
              { href: '#services', label: 'Dịch vụ' },
              { href: '#pricing', label: 'Bảng giá' },
              { href: '#testimonials', label: 'Cảm nhận' },
              { href: '#blog', label: 'Blog' },
              { href: '#contact', label: 'Liên hệ' },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="nav-link relative font-medium text-gray-700 transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full"
                  style={
                    {
                      '--hover-color': 'var(--primary-dark)',
                    } as React.CSSProperties
                  }
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <MobileNav className="md:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
