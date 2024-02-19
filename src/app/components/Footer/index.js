import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
const Footer = () => {
    return(

    <div>
        <div className={styles.linkHolder}>
        <div className={styles.link}>about</div>
        <div className={styles.link}>contact</div>
        <Link className={styles.link} href={"/legal"}>
              legal
        </Link>
        <div className={styles.link}>help</div>
    </div>
</div>
    )
}
export default Footer;