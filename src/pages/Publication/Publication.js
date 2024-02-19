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
            <div className={styles.bar}></div>
            <div className={styles.cardContent}>
              <h3>Conferance Papers</h3>

              <div className={styles.innerContent}>
                {/* <div className={styles.pic}>PICTURE</div> */}
                <div className={styles.paragraph}>
                  {/* <h4>
                    Kartu-Verbs : un système d’informations logiques de formes
                    verbales fléchies pour contourner les problèmes de
                    lemmatisation des verbes géorgiens
                  </h4> */}
                  <p>
                    {" "}
                    FINDING LEMMAS IN AGGLUTINATIVE AND INFLECTIONAL LANGUAGE
                    DICTIONARIES WITH LOGICAL INFORMATION SYSTEMS The case of
                    Georgian verbs, Mireille Ducassé, Archil Elizbarashvili. In
                    XX EURALEX International Congress, 2022, Mannheim, Germany.
                    pp.381-386
                  </p>
                  <div className={styles.links}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://hal.science/hal-03866032/file/0-EURALEX2022_Pr_p381-386_Ducasse-Elizbarashvili.pdf"
                    >
                      PDF
                    </a>

                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://hal.science/hal-03866032/bibtex"
                    >
                      Bib
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.bar}></div>
            <div className={styles.cardContent}>
              <h3>Conferance Papers</h3>

              <div className={styles.innerContent}>
                {/* <div className={styles.pic}>PICTURE</div> */}
                <div className={styles.paragraph}>
                  {/* <h4>
                 
                  </h4> */}
                  <p>
                    Kartu-Verbs : un système d'informations logiques de formes
                    verbales fléchies pour contourner les problèmes de
                    lemmatisation des verbes géorgiens, Mireille Ducassé. In EGC
                    2022 - Conférence francophone sur l'Extraction et la Gestion
                    des Connaissances, Jan 2022, Blois, France. pp.421-428
                  </p>
                  <div className={styles.links}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://hal.science/hal-03542560/file/DucasseEGC2022-final.pdf"
                    >
                      PDF
                    </a>

                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://hal.science/hal-03542560/bibtex"
                    >
                      Bib
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.bar}></div>
            <div className={styles.cardContent}>
              <h3>Conferance Papers</h3>

              <div className={styles.innerContent}>
                {/* <div className={styles.pic}>PICTURE</div> */}
                <div className={styles.paragraph}>
                  {/* <h4>
                 
                  </h4> */}
                  <p>
                    Kartu-Verbs: A Semantic Web Base of Inflected Georgian Verb
                    Forms to Bypass Georgian Verb Lemmatization Issues, Mireille
                    Ducassé. In XIX EURALEX conference, Nov 2021,
                    Alexandroupolis, Greece
                  </p>
                  <div className={styles.links}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://hal.science/hal-02924019/file/2020_Ducasse_XIX_Euralex.pdf"
                    >
                      PDF
                    </a>

                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://hal.science/hal-02924019/bibtex"
                    >
                      Bib
                    </a>
                  </div>
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
