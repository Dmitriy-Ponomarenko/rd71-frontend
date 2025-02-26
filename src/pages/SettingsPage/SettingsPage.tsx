import React from 'react';
import styles from './SettingsPage.module.css';
import { SettingsForm } from '../../components/SettingsForm/SettingsForm';
import '../../index.css';
import { motion } from 'framer-motion';

export const SettingsPage: React.FC = () => {
  return (
    <div className={`${styles.settingsSection} section`}>
      <motion.div
        className={`${styles.signUpPageContainer} container`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className={`${styles.settingsContainer} container`}>
          <SettingsForm />
        </div>
      </motion.div>
    </div>
  );
};
