'use client';

import { useState } from 'react';

import Link from 'next/link';

import {
  faBars,
  faCalendarCheck,
  faComments,
  faEnvelope,
  faHome,
  faInfoCircle,
  faList,
  faMoneyBill,
  faNewspaper,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

interface MobileNavProps {
  className?: string;
}

const navItems = [
  { name: 'Trang chủ', href: '#home', icon: faHome },
  { name: 'Giới thiệu', href: '#about', icon: faInfoCircle },
  { name: 'Dịch vụ', href: '#services', icon: faList },
  { name: 'Bảng giá', href: '#pricing', icon: faMoneyBill },
  { name: 'Đặt lịch', href: '#booking', icon: faCalendarCheck },
  { name: 'Đánh giá', href: '#testimonials', icon: faComments },
  { name: 'Tin tức', href: '#blog', icon: faNewspaper },
  { name: 'Liên hệ', href: '#contact', icon: faEnvelope },
];

const MobileNav = ({ className = '' }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <div className={`block md:hidden ${className}`}>
      <motion.button
        onClick={toggleMenu}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle mobile menu"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} style={{ color: 'var(--primary)' }} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={closeMenu}
            />

            {/* Menu */}
            <motion.div
              className="fixed bottom-0 right-0 top-0 z-50 w-64 bg-white p-5 shadow-lg"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mb-8 flex items-center justify-between">
                <h3
                  className="font-serif text-xl font-semibold"
                  style={{ color: 'var(--primary-dark)' }}
                >
                  Thanh Huyền
                </h3>
                <motion.button
                  onClick={closeMenu}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-500"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </motion.button>
              </div>

              <nav>
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <motion.li key={item.name} variants={itemVariants}>
                      <Link
                        href={item.href}
                        className="mobile-nav-link flex items-center rounded-lg px-4 py-2 text-gray-600 transition"
                        onClick={closeMenu}
                      >
                        <FontAwesomeIcon icon={item.icon} className="mr-3 w-5" />
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                className="absolute bottom-8 left-0 w-full px-5 text-center"
                variants={itemVariants}
              >
                <Link
                  href="#booking"
                  onClick={closeMenu}
                  className="btn-primary flex w-full items-center justify-center rounded-full px-5 py-3 font-medium transition duration-300"
                >
                  <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
                  Đặt lịch ngay
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
