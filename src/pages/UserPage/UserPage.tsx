import React from "react";
import { UserSection } from "../../components/UserSection/UserSection";
import styles from "./UserPage.module.css";
import { motion } from "framer-motion";

export const UserPage: React.FC = () => {
  return(
  <div className={`${styles.userPageSection} section`}>
      <motion.div
        className={`${styles.userPageContainer} container`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
      <UserSection />
    </motion.div>
  </div>)
}
