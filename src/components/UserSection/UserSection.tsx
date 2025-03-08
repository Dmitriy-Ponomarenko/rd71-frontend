import React from "react";
import styles from "./UserSection.module.css";

export const UserSection: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <img src="avatar_url" alt="User Avatar" className={styles.avatar} />
        <div className={styles.userInfo}>
          <h1>username</h1>
          <p className={styles.email}>email</p>
          <p className={styles.registeredOn}>Registered On: created_on</p>
          <div className={styles.subscriptions}>
            <p>Subscribers: amount_of_subscribers</p>
            <p>Subscriptions: amount_of_subscriptions</p>
          </div>
        </div>
      </div>
      <div className={styles.profileDetails}>
        <div className={styles.detailItem}>
          <strong>Titles:</strong> titles
        </div>
        <div className={styles.detailItem}>
          <strong>Global Rank:</strong> global_rank
        </div>
        <div className={styles.detailItem}>
          <strong>Level:</strong> level
        </div>
        <div className={styles.detailItem}>
          <strong>XP:</strong> xp
        </div>
        <div className={styles.detailItem}>
          <strong>Total Challenge Days:</strong> total_days
        </div>
        <div className={styles.detailItem}>
          <strong>Challenge Day Streak:</strong> day_strick
        </div>
      </div>
    </div>
  );
}
