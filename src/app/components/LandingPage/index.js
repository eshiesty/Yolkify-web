// "use client";
import styles from "./styles.module.css";
import appstore from "../../assets/appstore.png";
import googleplay from "../../assets/googleplay.png";
import iosdashboard from "../../assets/screenshots/iosdash.png";
import iosactive from "../../assets/screenshots/iosactive.png";
import iosprs from "../../assets/screenshots/iosprs.png";
import Image from "next/image";
const LandingPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.titleHolder}>
        <text className={styles.maintext}>
          It's time to get{" "}
          <text className={styles.emphasis}>
            <br />
            yolked
          </text>
          .
        </text>
      </div>
      <div className={styles.screenshotArea}>
        <div className={styles.screenshots}>
          <Image src={iosdashboard} width={250} alt="yolkify dashboard" />
          <Image src={iosactive} width={250} alt="yolkify workout" />

          <Image src={iosprs} width={250} alt="yolkify prs" />
        </div>
        <div className={styles.storeIcons}>
          <Image src={appstore} width={200} alt="app store icon" />
          <Image width={200} src={googleplay} alt="play store icon" />
        </div>
        {/* <div className={styles.androidArea}>
          <Image src={graphs} width={270} alt="yolkify charts" />
        </div> */}
      </div>
      <div className={styles.linkHolder}>
        <div className={styles.link}>about</div>
        <div className={styles.link}>contact</div>
        <div className={styles.link}>legal</div>
        <div className={styles.link}>help</div>
      </div>
    </div>
  );
};

export default LandingPage;
