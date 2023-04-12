/** @format */

import React from "react";
import Page from "../../components/page";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Abgd } from "../../icons/abgd";

import { MainTitle } from "../../icons/mainTitle";

import styles from "./MainPage.module.css";

function Mainpage() {
  return (
    <>
      <Header search={false} />

      <Page>
        <main>
          <div>
            <div className={styles.mainTitleContainer}>
              <div style={{ width: "350px" }}>
                <MainTitle />
              </div>
            </div>
          </div>
          <div className={styles.searchContainer}>
            <div className={styles.searchTitleContainer}>
              <h2>Search For A Verb</h2>
            </div>
            <SearchBar />
            <div className={styles.buttonContainer}>
              <button>One Verb</button>

              <button>All Verb</button>
            </div>
          </div>
          <div style={{padding:"20px"}}>
            <Abgd />
          </div>
        </main>
      </Page>
      <Footer />
    </>
  );
}

export default Mainpage;
