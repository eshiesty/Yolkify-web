import styles from "./styles.module.css";

import useDeviceDetect from "../../app/utils";

const PasswordResetPage = () => {
  return (
    <div>
      {useDeviceDetect().isMobile ? (
        <div>looks like you were trying to reset password</div>
      ) : (
        <div className={styles.page}>
          <div className={styles.headerHolder}>
            <h1 className={styles.header}>
              It looks like you were trying to reset your Yolkify password
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordResetPage;
