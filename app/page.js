import Image from "next/image";
import CarouselCustomer from "@/components/CarouselCustomer";
import "@/app/page.css";
import styles from "@/styles/home.module.css";

import {
  galary_golden_era,
  galary_abandonment,
  galary_actuality,
  galary_fire
} from "@/utils/data";
import Footer from "@/components/Footer";
import TimeLine from "@/components/TimeLine";
import TopSection from "@/components/TopSection";
import UdaSection from "@/components/UdaSection";
import PorfolioSection from "@/components/PorfolioSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopSection />

      <section
        className={`${styles.sections_wrapp} ${styles.second_section} section_padding`}
      >
        <div className={styles.text_wrapper}>
          <p className={`text`}>
            La Casa de la Lira es una reconocida construcción ubicada en la
            ciudad de Cuenca, en Ecuador.
          </p>
          <p className={`text`}>
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
      </section>

      <TimeLine />

      <section
        id="epoca-dorada"
        className={`${styles.sections_wrapper} ${styles.gb_image_01}`}
      >
        <div className={`${styles.carousel_wrapper}`}>
          <CarouselCustomer images_galary={galary_golden_era} />
        </div>

        <div className={`${styles.section_bootom} section_padding`}>
          <h2 className="subtitles">Época Dorada</h2>

          <p className={`text ${styles.text_spacing_bottom}`}>
            08 de septiembre de 1847, nace José María Rodriguez Durán -hijo de
            José Nicolás Rodriguez, compositor y maestro de capilla de la
            iglesia de las Carmelitas- familia de músicos.
          </p>
          <ul className={`text ${styles.ul_format}`}>
            <li>
              La casa de los Rodríguez, hoy conocida como la casa de la Lira era
              el sitio ideal para las reuniones artísticas de los cuencanos.
            </li>
            <li>
              En ésta casa se estableció un &quot;conservatorio&quot; donde se
              dictaban clases de piano y otros instrumentos.
            </li>
            <li>
              Musicalizaba poesía de grandes figuras como Remigio Crespo Toral,
              Julio Maria Matovelle y Honorato Vazquez.
            </li>
            <li>1910 &quot;La Lira de Tomebamba&quot;.</li>
            <li>
              En 1920 inicia la construcción de la &quot;casa de la lira&quot;
              donde Rodriguez por su amor a la música pone como símbolo la Lira.
            </li>
          </ul>
        </div>

        <div
          className={`${styles.banner_bottom_wrapper} ${styles.image_bottom_squares}`}
        ></div>
      </section>

      <section
        id="abandono"
        className={`${styles.sections_wrapper} ${styles.gb_image_02}`}
      >
        <div className={`${styles.carousel_wrapper}`}>
          <CarouselCustomer images_galary={galary_abandonment} />
        </div>

        <div className={`${styles.section_bootom} section_padding`}>
          <h2 className="subtitles">Abandono</h2>

          <p className={`text ${styles.text_spacing_bottom}`}>
            José María Rodríguez previo a su fallecimiento en 1940 postuló en su
            testamento que la casa debería ser donada a un gremio de músicos
            para que continue el legado pero la familia no lo permite y se queda
            con la casa.
          </p>
          <ul className={`text ${styles.ul_format}`}>
            <li>
              La casa fue vendida a una familia proveniente de Tarqui donde
              sirvió como vivienda, luego como conventillo y a la final,
              abandonada.
            </li>
            <li>
              Durante su abandono delincuentes la usan como refugio lo que
              ocasiona la estigmatización del barrio hasta la actualidad.
            </li>
            <li>
              La gente cansada de la delincuencia decide quemar la casa en 1976
              para que esta gente se vaya.
            </li>
            <li>1910 &quot;La Lira de Tomebamba&quot;.</li>
          </ul>
        </div>

        <div
          className={`${styles.banner_bottom_wrapper} ${styles.image_bottom_flames}`}
        ></div>
      </section>

      <section
        id="incendio"
        className={`${styles.sections_wrapper} ${styles.gb_image_03}`}
      >
        <div className={`${styles.carousel_wrapper}`}>
          <CarouselCustomer images_galary={galary_fire} />
        </div>
        <div className={`${styles.section_bootom} section_padding`}>
          <h2 className="subtitles">Incendio</h2>

          <p className={`text ${styles.text_spacing_bottom}`}>
            En 1976 hubo un gran incendio en la casa. Solo el frente del
            edificio permaneció intacto.
          </p>
          <ul className={`text ${styles.ul_format}`}>
            <li>
              Posteriormente la adquiere la familia Moreno y le entregan a la
              señora Laura Oramas de Veintimilla.
            </li>
            <li>
              En 1996 la casa de la Lira pasa a ser propiedad de un señor
              Guiracocha, para finalmente formar parte de los bienes de la
              municipalidad de Cuenca.
            </li>
          </ul>
        </div>

        <div
          className={`${styles.banner_bottom_wrapper} ${styles.image_bottom_olas}`}
        ></div>
      </section>

      <section
        id="actualidad"
        className={`${styles.sections_wrapper} ${styles.gb_image_04}`}
      >
        <div className={`${styles.carousel_wrapper}`}>
          <CarouselCustomer images_galary={galary_actuality} />
        </div>

        <div className={`${styles.section_bootom} section_padding`}>
          <h2 className="subtitles">Actualidad</h2>

          <p className={`text ${styles.text_spacing_bottom}`}>
            Durante la restauración del edificio, se descubrieron varios canales
            de agua de la ciudad antigua debajo del piso.
          </p>
          <ul className={`text ${styles.ul_format}`}>
            <li>
              Lo único que se ha conservado y seguirá conservando es la fachada
              y dos cimientos de dicha casa.
            </li>
            <li>
              Todas las decoraciones coloniales de madera fueron reemplazadas
              por elementos de hierro.
            </li>
            <li>
              Actualmente es utilizada como aulas de taller de cerámica,
              eléctricidad, gastronomía, etc.
            </li>
          </ul>
        </div>
      </section>

      <UdaSection />

      <PorfolioSection />

      <Footer />
    </main>
  );
}
