import React from "react";
import Image from "next/image";

import "@/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer_section">
        <div className="logo_footer_wrapper">
        <Image
          alt="casa de la lira"
          src="/images/logo_2.png"
          width="140"
          height="39"
          sizes="100vw"
          //   className={`${styles.second_image}`}
        />
      </div>
      <div>
        <span className="title_footer">DIRECCIÓN:</span>
        <p className="text text_color_secondary_gray">La Condamine 12-124, Cuenca</p>
      </div>
      <div className="time_section">
        <span className="title_footer">Horario:</span>
        <div className="time_wrapper text_color_secondary_gray">
          <p className="text">Lunes</p>
          <p className="text">9:00-18:00</p>
        </div>
        <div className="time_wrapper text_color_secondary_gray">
          <p className="text">Martes</p>
          <p className="text">9:00-18:00</p>
        </div>
        <div className="time_wrapper text_color_secondary_gray">
          <p className="text">Miércoles</p>
          <p className="text">9:00-18:00</p>
        </div>
        <div className="time_wrapper text_color_secondary_gray">
          <p className="text">Jueves</p>
          <p className="text">9:00-18:00</p>
        </div>
        <div className="time_wrapper text_color_secondary_gray">
          <p className="text">Viernes</p>
          <p className="text">9:00-18:00</p>
        </div>
        <div className="time_wrapper text_color_secondary_gray">
          <p className="text">Sábado</p>
          <p className="text">9:00-13:30</p>
        </div>
        <div className="time_wrapper text_color_secondary_gray">
          <p className="text">Domingo</p>
          <p className="text">Cerrado</p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
