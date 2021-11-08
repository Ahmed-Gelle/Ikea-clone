import React from "react";
import styles from "./index.module.scss";
import hero from "../../../assets/hero.jpg";

export default function index() {
  return (
    <div className={styles.Container}>
      <div className={styles.ImageContainer}>
        <img src={hero} alt={"jul-bild"} />
      </div>
      <div className={styles.desContainer}>
        <h2>20% för IKEA Family medlemmar på VINTER 2021 julgranar</h2>
        <div>
          Erbjudandet gäller 1/11 - 30/11 2021, så långt lagret räcker, för dig
          som är (eller blir) IKEA Family medlem.
        </div>
        <div>
          VINTER 2021 konstgjord julgran 210 cm 796:- (ordinarie pris 995:-)
        </div>
        <button>Se alla erbjudanden</button>
      </div>
    </div>
  );
}
