'use client';

import { useEffect, useState } from 'react';

import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

interface ThemeOption {
  name: string;
  className: string;
  colorPreview: string;
}

const themes: ThemeOption[] = [
  {
    name: 'pink',
    className: '',
    colorPreview: '#fbcfe8',
  },
  {
    name: 'lavender',
    className: 'theme-lavender',
    colorPreview: '#c8a2c8',
  },
  {
    name: 'mint',
    className: 'theme-mint',
    colorPreview: '#b5e8bd',
  },
];

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('pink');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'pink';
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeName: string) => {
    const theme = themes.find((t) => t.name === themeName);
    if (!theme) return;

    // Remove any existing theme classes
    document.documentElement.classList.remove(...themes.map((t) => t.className).filter(Boolean));

    // Add the new theme class if it's not the default (pink)
    if (theme.className) {
      document.documentElement.classList.add(theme.className);
    }
  };

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
    applyTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className="fixed right-5 top-24 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Switch theme"
      >
        <FontAwesomeIcon icon={faPalette} style={{ color: 'var(--primary-dark)' }} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute right-0 mt-2 w-40 rounded-lg bg-white p-2 shadow-lg"
          >
            {themes.map((theme) => (
              <motion.button
                key={theme.name}
                onClick={() => handleThemeChange(theme.name)}
                className={`
                  mb-1 flex w-full items-center rounded-md p-2 text-left
                  ${currentTheme === theme.name ? 'bg-gray-100' : 'hover:bg-gray-50'}
                `}
                whileHover={{ x: 5 }}
              >
                <div
                  className="mr-3 h-5 w-5 rounded-full"
                  style={{ backgroundColor: theme.colorPreview }}
                />
                <span className="capitalize">{theme.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
