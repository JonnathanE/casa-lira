import React from 'react';
import Image from "next/image";

import styles from "@/styles/topSection.module.css";


const TopSection = () => {
    return (
        <section className={styles.parallax_outer}>
        <Image
          alt="cielo azul"
          src="/images/sky-gris.png"
          width="0"
          height="0"
          sizes="100vw"
          className={`${styles.image_parallax} ${styles.sky}`}
        />
        <Image
          alt="casa de la lira"
          src="/images/home.png"
          width="0"
          height="0"
          sizes="100vw"
          className={`${styles.image_parallax} ${styles.home_lira}`}
        />
        <Image
          alt="logo lira"
          src="/images/logolira.png"
          width="0"
          height="0"
          sizes="100vw"
          className={`${styles.image_parallax} ${styles.logo_lira}`}
        />

        <div className={`${styles.title_wrapp}`}>
          <h1 className={styles.title}>
            Proyecto casa de la lira Universidad del Azuay
          </h1>
          <p className={styles.subtitle}>Conoce su historia</p>
        </div>
      </section>
    );
}

export default TopSection;
