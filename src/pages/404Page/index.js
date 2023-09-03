"use client";
import styles from "./styles.module.css";

import useDeviceDetect from "../../utils";

const PageNotFound = () => {
  return (
    <div>
      {useDeviceDetect().isMobile ? (
        <div>page not found</div>
      ) : (
        <div className={styles.page}>page not found</div>
      )}
    </div>
  );
};

export default PageNotFound;
