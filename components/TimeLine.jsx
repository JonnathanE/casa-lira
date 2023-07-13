import React from "react";
import Image from "next/image";

import "@/styles/timeline.css";
import styles from "@/styles/home.module.css";

const TimeLine = () => {
  return (
    <section className="sections_wrapp_timeline">
      <h2 className="subtitles">Time line</h2>
      <div className="timeline">
        <div className="container left-container">
          <Image
            alt="cielo azul"
            src="/images/dorada_logo.png"
            width="0"
            height="0"
            sizes="100vw"
            className={`image_style`}
          />
          <div className="text_box">
            <h3>Dorada</h3>
            <small>1878 - 1940</small>
            <p>Construcción &quot;Casa de la lira&quot;. Fue utilizada como un conservatorio.</p>
            <span className="left_container_arrow"></span>
          </div>
        </div>
        <div className="container right-container">
          <Image
            alt="cielo azul"
            src="/images/abandono_logo.png"
            width="0"
            height="0"
            sizes="100vw"
            className={`image_style`}
          />
          <div className="text_box">
            <h3>Abandono</h3>
            <small>1940 - 1976</small>
            <p>Muerte de José María Rodríguez, propietario de la Casa de la Lira.</p>
            <span className="right_container_arrow"></span>
          </div>
        </div>
        <div className="container left-container">
          <Image
            alt="cielo azul"
            src="/images/incendio_logo.png"
            width="0"
            height="0"
            sizes="100vw"
            className={`image_style`}
          />
          <div className="text_box">
            <h3>Incendio</h3>
            <small>1976</small>
            <p>La Casa de la Lira sufre un incendio, dejando solo el frente del edificio.</p>
            <span className="left_container_arrow"></span>
          </div>
        </div>
        <div className="container right-container">
          <Image
            alt="cielo azul"
            src="/images/actualidad_logo.png"
            width="0"
            height="0"
            sizes="100vw"
            className={`image_style`}
          />
          <div className="text_box">
            <h3>Actualidad</h3>
            <small></small>
            <p>Restauración del edificio y actualmente es utilizada como aulas de taller de cerámica, electricidad, etc.</p>
            <span className="right_container_arrow"></span>
          </div>
        </div>
      </div>
      <div
        className={`${styles.banner_bottom_wrapper} ${styles.image_bottom_cirle}`}
      ></div>
    </section>
  );
};

export default TimeLine;
