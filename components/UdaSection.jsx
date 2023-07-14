import React from "react";
import Image from "next/image";

import styles from "@/styles/home.module.css";

import "@/styles/udaSection.css"

const UdaSection = () => {
  return (
    <section
      id="intervencion-uda"
      className={`${styles.sections_wrapper} ${styles.gb_image_05}`}
    >
      <h2 className="subtitles section_padding title_uda_section" >Proyecto inmersión a la lira</h2>

      <Image
        alt="logo proyecto inmersión a la lira"
        src="/images/DAyA_UDA_color.png"
        width="232"
        height="90"
        sizes="100vw"
        className="image_uda_section"
      />

      <div className={`${styles.section_bootom} section_padding`}>
        <p className={`text ${styles.text_spacing_bottom}`}>
          La intervención de las carreras de diseños de la facultad de diseño,
          arquitectura y arte de la universidad del Azuay han permitido
          recuperar la historia de la casa, su objetivo general del proyecto es:
          Conmemorar la historia y legado de la “Casa de la Lira” a través de un
          proyecto interdisciplinario de diseño que destaque sus etapas
          transitorias y fomenten su valor cultural.
        </p>
        <p className={`text ${styles.text_spacing_bottom}`}>
          El proyecto &quot;Inmersión: La Lira&quot; surge como una propuesta
          innovadora y transformadora en el contexto de la Casa de la Lira,
          situada en el pintoresco barrio del Vado en Cuenca. La Casa de la
          Lira, con una historia que se remonta al siglo XX, se ha erigido como
          un símbolo de identidad local, encarnando la esencia histórica y las
          tradiciones arraigadas al barrio de El Vado. Recordando que esta joya
          arquitectónica del siglo XX estuvo su momento de mayor auge, y que a
          lo largo del tiempo ha experimentado grandes cambios y alteraciones
          que han hecho que pierda su valor dentro del barrio.
        </p>
      </div>
    </section>
  );
};

export default UdaSection;
