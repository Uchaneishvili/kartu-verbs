import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Publication.module.css";
const Publicaiton = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p>
            The list of publications on the page is automatically extracted from
            HAL INRIA.Another list is available with the possibility to filter
            publications by author, by year, by type, and by keyword.
          </p>
          <div className={styles.card}>
            <div className={styles.bar}>
              <h3>2023</h3>
            </div>
            <div className={styles.cardContent}>
              <h3>Conferance Papers</h3>

              <div className={styles.innerContent}>
                <div className={styles.pic}>PICTURE</div>
                <div className={styles.paragraph}>
                  <h4>
                    Kartu-Verbs : un système d’informations logiques de formes
                    verbales fléchies pour contourner les problèmes de
                    lemmatisation des verbes géorgiens
                  </h4>

                  <p>Mireille Ducassé</p>
                  <p>
                    EGC 2022 – Conférence francophone sur l’Extraction et la
                    Gestion des Connaissances, Jan 2022, Blois, France.
                    pp.421-428
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.bar}>
              <h3>2022</h3>
            </div>
            <div className={styles.cardContent}>
              <h3>Conferance Papers</h3>

              <div className={styles.innerContent}>
                <div className={styles.pic}>PICTURE</div>
                <div className={styles.paragraph}>
                  <h4>
                   ansdbaffbdasfib bab dbasjb jdasbj dkjasfiwo nbasbnd ajsk f
                  </h4>

                  <p>Mireille Ducassé</p>
                  <p>
                    lorem epsasd sahbdbahs hdasj as
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Publicaiton;
