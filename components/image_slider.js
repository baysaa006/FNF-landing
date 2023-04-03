import React from "react";
import styles from "../css/slider.module.css";
import Image from "next/image";
import partner1 from "../public/img/company/01.jpg";
import partner2 from "../public/img/company/02.jpg";
import partner3 from "../public/img/company/03.jpg";
import partner4 from "../public/img/company/05.jpg";
import partner5 from "../public/img/company/07.jpg";
import partner6 from "../public/img/company/08.jpg";
import partner7 from "../public/img/company/09.jpg";

export default function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.slide_track}>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner1} alt="" />
        </div>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner2} alt="" />
        </div>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner3} alt="" />
        </div>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner4} alt="" />
        </div>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner5} alt="" />
        </div>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner6} alt="" />
        </div>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner7} alt="" />
        </div>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner1} alt="" />
        </div>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner2} alt="" />
        </div>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner3} alt="" />
        </div>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner4} alt="" />
        </div>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner5} alt="" />
        </div>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner6} alt="" />
        </div>
        <div className={styles.slide}>
          <Image loading="eager" className={styles.img} src={partner7} alt="" />
        </div>
      </div>
    </div>
  );
}
