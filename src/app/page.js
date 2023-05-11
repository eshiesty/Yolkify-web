"use client";
import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "./components/LandingPage";
import MobileLandingPage from "./components/MobileLandingPage";
import useDeviceDetect from "./utils";
export default function Home() {
  return (
    <main className={styles.main}>
      {useDeviceDetect() ? <LandingPage /> : <MobileLandingPage />}
    </main>
  );
}
