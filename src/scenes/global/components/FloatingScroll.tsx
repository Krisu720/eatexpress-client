import { AnimatePresence, motion } from "framer-motion";
import { CaretUp } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const FloatingScroll: React.FC = () => {
  const [moved, setMoved] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    const scrollListener = () => {
      addEventListener("scroll", () => {
        if (window.scrollY > 80) {
          setMoved(true);
        } else {
          setMoved(false);
        }
      });
    };

    mounted && scrollListener();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <AnimatePresence>
      {moved && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.65, transition: { duration: 0.15 } }}
          className="fixed hidden sm:block text-white rounded-full shadow-lg bg-purple-500 p-2 left-8 bottom-8 cursor-pointer z-50"
          onClick={() => scroll.scrollToTop({ duration: 100 })}
        >
          <CaretUp size={35} weight="bold" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingScroll;
