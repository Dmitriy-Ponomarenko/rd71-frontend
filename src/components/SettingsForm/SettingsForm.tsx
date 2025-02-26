import React, { useState } from 'react';
import styles from './SettingsForm.module.css';

export const SettingsForm: React.FC = () => {
  const [profileVisibility, setProfileVisibility] = useState('Yes');
  const [friendRequests, setFriendRequests] = useState('Yes');
  const [challengeInvitations, setChallengeInvitations] = useState('Never');
  const [darkMode, setDarkMode] = useState('Off');

  return (
    <>
      <h1 className={styles.title}>Settings</h1>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>General</h2>
        <div className={styles.item}>
          <label>Change Username</label>
          <button className={styles.actionButton}>Change Username</button>
        </div>
        <div className={styles.item}>
          <label>Change Email</label>
          <button className={styles.actionButton}>Change Email</button>
        </div>
        <div className={styles.item}>
          <label>Change Password</label>
          <button className={styles.actionButton}>Change Password</button>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Profile</h2>
        <div className={styles.item}>
          <label>
            Allow others to see detailed information about your profile
          </label>
          <div className={styles.choiceButtonContainer}>
            <button
              className={`${styles.choiceButton} ${
                profileVisibility === 'Yes' ? styles.active : ''
              }`}
              onClick={() => setProfileVisibility('Yes')}
            >
              Yes
            </button>
            <button
              className={`${styles.choiceButton} ${
                profileVisibility === 'No' ? styles.active : ''
              }`}
              onClick={() => setProfileVisibility('No')}
            >
              No
            </button>
          </div>
        </div>
        <div className={styles.item}>
          <label>Allow friend requests from other users</label>
          <div className={styles.choiceButtonContainer}>
            <button
              className={`${styles.choiceButton} ${
                friendRequests === 'Yes' ? styles.active : ''
              }`}
              onClick={() => setFriendRequests('Yes')}
            >
              Yes
            </button>
            <button
              className={`${styles.choiceButton} ${
                friendRequests === 'No' ? styles.active : ''
              }`}
              onClick={() => setFriendRequests('No')}
            >
              No
            </button>
          </div>
        </div>
        <div className={styles.item}>
          <label>Allow challenge invitations</label>
          <div className={styles.challengeButtonContainer}>
            <button
              className={`${styles.choiceButton} ${
                challengeInvitations === 'Never' ? styles.active : ''
              }`}
              onClick={() => setChallengeInvitations('Never')}
            >
              Never
            </button>
            <button
              className={`${styles.choiceButton} ${
                challengeInvitations === 'Only from friends'
                  ? styles.active
                  : ''
              }`}
              onClick={() => setChallengeInvitations('Only from friends')}
            >
              Only from friends
            </button>
            <button
              className={`${styles.choiceButton} ${
                challengeInvitations === 'Always' ? styles.active : ''
              }`}
              onClick={() => setChallengeInvitations('Always')}
            >
              Always
            </button>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Appearance</h2>
        <div className={styles.item}>
          <label>Dark Mode</label>
          <div className={styles.choiceButtonContainer}>
            <button
              className={`${styles.choiceButton} ${
                darkMode === 'On' ? styles.active : ''
              }`}
              onClick={() => setDarkMode('On')}
            >
              On
            </button>
            <button
              className={`${styles.choiceButton} ${
                darkMode === 'Off' ? styles.active : ''
              }`}
              onClick={() => setDarkMode('Off')}
            >
              Off
            </button>
          </div>
        </div>
      </div>

      <h2 className={styles.dangerSubtitle}>Danger Zone</h2>
      <div className={`${styles.section} ${styles.dangerZone}`}>
        <div className={styles.dangerButtonContainer}>
          <button className={styles.dangerButton}>
            Delete All My Progress
          </button>
          <button className={styles.dangerButton}>Clear My Friend List</button>
          <button className={styles.dangerButton}>Delete My Account</button>
        </div>
      </div>
    </>
  );
};
