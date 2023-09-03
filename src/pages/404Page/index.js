"use client";
import styles from "./styles.module.css";
import appstore from "../../assets/appstore.png";
import googleplay from "../../assets/googleplay.png";
import iosdashboard from "../../assets/screenshots/iosdash.png";
import iosactive from "../../assets/screenshots/iosactive.png";
import iosprs from "../../assets/screenshots/iosprs.png";
import Image from "next/image";
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
