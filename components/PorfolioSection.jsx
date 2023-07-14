"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/home.module.css";
import "@/styles/portfolioSection.css";

import { portfolio } from "@/utils/data";

const PorfolioSection = () => {
  const [selected, setSelected] = useState("edp");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(portfolio);
        break;
      case "edp":
        setData(
          portfolio.filter((item) => {
            return item.category === "edp";
          })
        );
        break;
      case "edg":
        setData(
          portfolio.filter((item) => {
            return item.category === "edg";
          })
        );
        break;
      case "edt":
        setData(
          portfolio.filter((item) => {
            return item.category === "edt";
          })
        );
        break;
      case "edi":
        setData(
          portfolio.filter((item) => {
            return item.category === "edi";
          })
        );
        break;
      default:
        setData([]);
        setData(portfolio);
        break;
    }
  }, [selected]);

  return (
    <section
      id="portafolio"
      className={`portfolio_wrapper ${styles.gb_image_05}`}
    >
      <h2 className="subtitles">Propuestas de Diseños</h2>

      <div className="portfolio_buttons_wrapper">
        <button
          className="bottom_logo_porfolio"
          onClick={() => setSelected("edp")}
        >
          <Image
            alt="boton edp"
            src="/images/logo_edp_200200.png"
            width="0"
            height="0"
            sizes="100vw"
            className={`image_botton`}
          />
        </button>
        <button
          className="bottom_logo_porfolio"
          onClick={() => setSelected("edg")}
        >
          <Image
            alt="boton edg"
            src="/images/logo_edg_200200.png"
            width="0"
            height="0"
            sizes="100vw"
            className={`image_botton`}
          />
        </button>
        <button
          className="bottom_logo_porfolio"
          onClick={() => setSelected("edt")}
        >
          <Image
            alt="boton edt"
            src="/images/logo_edtei_200200.png"
            width="0"
            height="0"
            sizes="100vw"
            className={`image_botton`}
          />
        </button>
        <button
          className="bottom_logo_porfolio"
          onClick={() => setSelected("edi")}
        >
          <Image
            alt="boton edi"
            src="/images/logo_edi_200200.png"
            width="0"
            height="0"
            sizes="100vw"
            className={`image_botton`}
          />
        </button>
      </div>
      <div className={`portfolio section_padding`}>
        <div className="portfolio_galary_wrapper">
          {data?.map((d) => (
            <div key={d.id} className="image_galary_portfolio_wrapper">
              <Image
                alt={d.title}
                src={d.url}
                width="0"
                height="0"
                sizes="100vw"
                className={`image_galary_portfolio`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorfolioSection;
