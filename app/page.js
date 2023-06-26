import Image from "next/image";
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
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

        <div className={`${styles.image_parallax} ${styles.title_wrapp}`}>
          <h1 className={styles.title}>
            Proyecto casa de la lira Universidad del Azuay
          </h1>
          <p className={styles.subtitle}>Conoce su historia</p>
        </div>
      </section>

      <section
        className={`${styles.sections_wrapp} ${styles.second_section} ${styles.section_padding}`}
      >
        <div className={styles.text_wrapper}>
          <p className={`${styles.text}`}>
            La Casa de la Lira es una reconocida construcción ubicada en la
            ciudad de Cuenca, en Ecuador.
          </p>
          <p className={`${styles.text}`}>
            Es considerada un importante patrimonio cultural de la ciudad y es
            conocida por su arquitectura y valor histórico.
          </p>
        </div>
        <Image
          alt="casa de la lira"
          src="/images/second-home.png"
          width="0"
          height="0"
          sizes="100vw"
          className={`${styles.second_image}`}
        />
        <div
          className={`${styles.banner_bottom_wrapper} ${styles.image_bottom_cirle}`}
        ></div>
      </section>

      <section className={`${styles.third_section}`}>
        <div className={`${styles.back_banner_1}`}>
          <div className={`${styles.section_padding} ${styles.section_felx}`}>
            <h2 className={styles.subtitles}>Época Dorada</h2>
            <p className={`${styles.text} ${styles.text_spacing_bottom}`}>
              1860-1900: La Casa de la Lira es testigo de la efervescencia
              cultural y literaria de Cuenca durante la época conocida como &quot;La
              Edad de Oro&quot;. Se convirtió en un espacio para la creación
              artística, se impartían clases de piano y otros instrumentos.
              Reconocidos escritores y poetas, como Juan Montalvo y José J.
              Coba, frecuentan la casa y participan en tertulias literarias que
              ayudan a forjar la identidad cultural de la región.
            </p>
          </div>
          <div
            className={`${styles.banner_bottom_wrapper} ${styles.image_bottom_squares}`}
          ></div>
        </div>
      </section>

      <section className={`${styles.fourth_section}`}>
        <div className={`${styles.back_banner_2}`}>
          <div className={`${styles.section_padding} ${styles.section_felx}`}>
            <h2 className={styles.subtitles}>Abandono</h2>
            <p className={`${styles.text} ${styles.text_spacing_bottom}`}>
              En 1940, a los 93 años, y en la misma casa donde nació, aprendió y
              enseñó su música, y la de los grandes maestros, falleció don José
              María Rodríguez, orgullo de la Morlaquia y patrono del
              Conservatorio de esta ciudad. Luego de la muerte de José María
              Rodríguez, la Casa de la Lira pasó por un período de abandono y
              deterioro.
            </p>
          </div>
          <div
            className={`${styles.banner_bottom_wrapper} ${styles.image_bottom_flames}`}
          ></div>
        </div>
      </section>


      <section className={`${styles.fifth_section}`}>
        <div className={`${styles.back_banner_3}`}>
          <div className={`${styles.section_padding} ${styles.section_felx}`}>
            <h2 className={styles.subtitles}>Incendio</h2>
            <p className={`${styles.text} ${styles.text_spacing_bottom}`}>
            1978: Incendio de la casa, solo se logró conservar la fachada. A pesar de ello, sigue siendo un lugar con valor histórico y cultural en Cuenca, y se llevan a cabo esfuerzos de restauración para preservar su patrimonio arquitectónico.
            </p>
          </div>
        </div>
      </section>


      <section className={`${styles.sixth_section}`}>
        <div className={`${styles.back_banner_4}`}>
          <div className={`${styles.section_padding} ${styles.section_felx}`}>
            <h2 className={styles.subtitles}>Actualidad</h2>
            <p className={`${styles.text} ${styles.text_spacing_bottom}`}>
            2000-presente: La Casa de la Lira se convierte en un importante centro cultural en Cuenca, albergando exposiciones, conciertos, presentaciones literarias y otras actividades culturales. Es considerada un ícono de la historia y la identidad cultural de la ciudad, y sigue siendo un lugar de encuentro para la comunidad artística y literaria de Cuenca.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
