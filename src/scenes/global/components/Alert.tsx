import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useTime } from "framer-motion";
import { toastVariants } from "../../../Animations";

interface Props {
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const Alert: React.FC<Props> = ({ error, setError }) => {

  useEffect(() => {
    if (error) {
      window.setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  return (
    <AnimatePresence>
      {error && (
        <div className="fixed z-100 top-0 left-[50%] translate-x-[-50%]">
          <motion.div
            className=" bg-red-400 px-4 py-2 rounded-lg"
            variants={toastVariants}
            animate="animate"
            initial="initial"
            exit="exit"
          >
            {error} 
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
