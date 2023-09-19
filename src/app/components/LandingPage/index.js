import styles from "./landing.module.css";
import Link from "next/link";
import appstore from "../../assets/appstore.png";
import googleplay from "../../assets/googleplay.png";
import iosdashboard from "../../assets/screenshots/iosdash.png";
import iosactive from "../../assets/screenshots/iosactive.png";
import iosprs from "../../assets/screenshots/iosprs.png";
import Image from "next/image";
import useDeviceDetect from "../../utils";

const LandingPage = () => {
  return (
    <div>
      {useDeviceDetect().isMobile ? (
        <div className={styles.pageMobile}>
          <div className={styles.titleHolderMobile}>
            <text className={styles.maintextMobile}>
              It's time to get
              <text className={styles.emphasisMobile}> yolked</text>.
            </text>
          </div>
          <div className={styles.screenshotAreaMobile}>
            <div className={styles.screenshotsMobile}>
              <Image src={iosdashboard} width={180} alt="yolkify dashboard" />
              <Image src={iosactive} width={180} alt="yolkify workout" />

              {/* <Image src={iosprs} width={150} alt="yolkify prs" /> */}
            </div>
            <div className={styles.storeIconsMobile}>
              <Image src={appstore} width={150} alt="app store icon" />
              <Image width={150} src={googleplay} alt="play store icon" />
            </div>
            {/* <div className={styles.androidArea}>
      <Image src={graphs} width={270} alt="yolkify charts" />
    </div> */}
          </div>
          <div className={styles.linkHolderMobile}>
            <div className={styles.linkMobile}>about</div>
            <div className={styles.linkMobile}>contact</div>
            <Link className={styles.linkMobile} href={"/legal"}>
              legal
            </Link>
            <div className={styles.linkMobile}>help</div>
          </div>
        </div>
      ) : (
        <div className={styles.page}>
          <div className={styles.titleHolder}>
            <text className={styles.maintext}>
              It's time to get
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
              <Link href={"https://apps.apple.com/us/app/yolkify/id6447922223"}>
                <Image src={appstore} width={200} alt="app store icon" />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.yolkify">
                <Image width={200} src={googleplay} alt="play store icon" />
              </Link>
            </div>
            {/* <div className={styles.androidArea}>
        <Image src={graphs} width={270} alt="yolkify charts" />
      </div> */}
          </div>
          <div className={styles.linkHolder}>
            <div className={styles.link}>about</div>
            <div className={styles.link}>contact</div>
            <Link className={styles.link} href={"/legal"}>
              legal
            </Link>
            <div className={styles.link}>help</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
