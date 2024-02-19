import styles from "./landing.module.css";
import Link from "next/link";
import appstore from "../../assets/appstore.png";
import googleplay from "../../assets/googleplay.png";
import iosdashboard from "../../assets/screenshots/iosdash.png";
import iossocial from "../../assets/screenshots/iossocial.png";
import iosprofile from "../../assets/screenshots/iosprofile.png";
import textLogo from "../../assets/textlogo.png";
import Image from "next/image";
import Head from "next/head";
import Footer from "../Footer";
import SecondSection from "../SecondSection";
const LandingPage = () => {
  return (
    <div className={styles.columns}>
      <div className={styles.page}>
        <Head>
          <title>Yolkify</title>
          <meta
            name="description"
            content="The free weightlifting tracker and social platform."
          />
          <meta
            name="keywords"
            content="Yolkify, Gym, Weightlifting, Tracker, Fitness, Workout, Exercise, Strength Training, Bodybuilding, Health, Fitness App, Social Fitness, Gym Community, Personal Training"
          />
        </Head>
        <div className={styles.titleHolder}>
          <h1 className={styles.maintext}>
            It's time to get
            <text className={styles.emphasis}>
              <br className={styles.break} />
              <text> </text>
              yolked
            </text>
            .
          </h1>
        </div>

        <div className={styles.screenshotArea}>
          <Image
            className={styles.namelogo}
            src={textLogo}
            quality={100}
            unoptimized={true}
            width={250}
            alt="yolkify name and logo"
          />
          <div className={styles.screenshots}>
            <Image
              src={iosdashboard}
              quality={100}
              unoptimized={true}
              className={styles.screenshot}
              alt="yolkify dashboard"
            />
            <Image
              src={iosprofile}
              quality={100}
              unoptimized={true}
              className={styles.screenshot}
              alt="yolkify profile"
            />
            <Image
              src={iossocial}
              quality={100}
              unoptimized={true}
              className={styles.thirdPic}
              alt="yolkify social"
            />
          </div>
          <div className={styles.storeIcons}>
            <Link href={"https://apps.apple.com/us/app/yolkify/id6447922223"}>
              <Image
                src={appstore}
                className={styles.storeIcon}
                quality={100}
                unoptimized={true}
                alt="app store icon"
              />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.yolkify">
              <Image
                className={styles.storeIcon}
                src={googleplay}
                quality={100}
                unoptimized={true}
                alt="play store icon"
              />
            </Link>
          </div>
          {/* <div className={styles.androidArea}>
        <Image src={graphs} width={270} alt="yolkify charts" />
      </div> */}
        </div>
      </div>
      <SecondSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
