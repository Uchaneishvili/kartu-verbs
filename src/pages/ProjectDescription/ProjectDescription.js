import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./ProjectDescription.module.css";
import { MailFilled } from "@ant-design/icons";
function ProjectDescription() {
  return (
    <>
      <Header search={false} />

      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1>Project Description</h1>

          <div className={styles.description}>
            <p>
              The Georgian language has a complex verbal system, both
              agglutinative and inflectional, with many irregularities.
              Inflected forms of a given verb can differ greatly from one
              another and it is still a controversial issue to determine which
              lemmas should represent a verb in dictionaries. Verb tables help
              people to track lemmas starting from inflected forms but these
              tables are tedious and error-prone to browse. We propose
              Kartu-Verbs, a Semantic Web base of inflected Georgian verb forms.
              The Semantic Web tool, Sparklis, can retrieve information from
              their facets, it also allows users to smoothly refine their query
              by giving them suggestions. For a given verb, all its inflected
              forms are present. Knowledge can easily be traversed in all
              directions: from Georgian to French and English; from an inflected
              form to a masdar (a verbal noun, the form that comes closest to an
              infinitive), and conversely from a masdar to any inflected form;
              from component(s) to forms and from a form to its components.
              Users can easily retrieve the lemmas that are relevant to access
              their preferred dictionaries. Kartu-Verbs can be seen as a
              front-end to any Georgian dictionary, thus bypassing the
              lemmatization issues. Our tool can be seen as a companion of the
              series of “Biliki” books by Nana Shavtvaladze (Biliki, Georgian
              Language For English Speakers), a nice support for English
              speakers to learn Georgian. Note that we use a transliteration in
              Latin characters in the system to ease non-native Georgian
              speakers’s reading. The transliteration is currently “French“
              oriented for historical reasons. We are planning to add more
              transliterations.
            </p>
          </div>
          <h1>Acknowledgment</h1>

          <div className={styles.description}>
            <p>
              We are thankful to Irma Grdzelidze and Tina Margalitadze from
              Ivane Javakhishvili Tbilisi State University for providing more
              hindsight of this work. We are indebted to Tina for pointing out
              the verb lemmatization issue. Thanks to the Erasmus+ International
              Credit Mobility program, the following Georgian students
              contributed to the project: Keti Meipariani, Mariam Asatiani,
              Mikheil Maisuradze, Tamari Kldiashvili, Tamar Sharabidze, Beka
              Chachua, Ana Idadze, Veriko Nikuradze, Tornike Tchanturia, Ana
              Elchishvili, and Aleksandre Jajanidze. We are grateful to Keti
              Meipariani who managed the working teams of two semesters and who
              remotely helps the following teams. We want to warmly thank
              Sébastien Ferré for his support to use Sparklis and last but not
              least, thanks to Giga Uchaneishvili, Bachana Saginadze and Mikheil
              Darsavelidze for designing and building this Web Application.{" "}
            </p>
          </div>

          <h1>Contact</h1>

          <ul className={styles.list}>
            <li>
              <MailFilled />
              <a
                href="mailto:mireille.ducasse@irisa.fr"
                style={{
                  textDecoration: " none",
                  color: "inherit",
                  paddingLeft: "10px",
                }}
              >
                Mireille Ducassé, mireille.ducasse@irisa.fr
              </a>{" "}
            </li>
            <li>
              <MailFilled />
              <a
                href="mailto:archil.elizbarashvili@tsu.ge"
                style={{
                  textDecoration: " none",
                  color: "inherit",
                  paddingLeft: "10px",
                }}
              >
                Archil Elizbarashvili, archil.elizbarashvili@tsu.ge
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProjectDescription;
