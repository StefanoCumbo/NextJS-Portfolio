"use client";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes"; 

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  const { theme } = useTheme(); // or however you access your theme state

  // Define your backgrounds
  const getBackground = () => {
    const isDark = theme === 'dark' ||  (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      return "radial-gradient(circle at 25% 25%, #312e81 0%, transparent 50%), radial-gradient(circle at 75% 75%, #581c87 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 100%)";
    }
    
    return "radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%), linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)";
  };

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className={` ${pathName === '/about' ? 'min-h-screen overflow-y-auto' : 'w-screen h-screen' } transition-all duration-500 ease-in-out`}
        style={{ background: getBackground() }}
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 1 } }}
        />
        
        <div className="h-24">
          <Navbar />
        </div>
        
        <div className="h-[calc(100vh-6rem)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;