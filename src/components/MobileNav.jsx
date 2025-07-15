// src/components/MobileNav.jsx

import { motion, AnimatePresence } from 'framer-motion';

const MobileNav = ({ isOpen, setIsOpen }) => {
  // Gabungkan semua item navigasi di sini
  const navItems = [
    { title: 'About Us', link: '/about' },
    { title: 'Program', link: '/program' },
    { title: 'All Events', link: '/events' },
    { title: 'News', link: '/news' },
    // Tambahkan item lain jika ada
  ];
  
  const sidebarVariants = {
    closed: { x: '100%' },
    open: { x: '0%' },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-gray-900 text-white p-8 pt-24 z-50"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <h2 className="text-2xl font-bold mb-8">Menu</h2>
            <nav>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <a href={item.link} className="text-lg hover:text-gray-300" onClick={() => setIsOpen(false)}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;