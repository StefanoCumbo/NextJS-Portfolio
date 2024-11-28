"use client";
import { motion } from "framer-motion";

const PortfolioPage = () => {
    return ( 
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}}  transition={{duration:1.5 }}>
        P-folio Page 
    </motion.div>
     );
}
 
export default PortfolioPage;