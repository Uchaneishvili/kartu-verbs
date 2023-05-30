import { Table } from "../../icons/transliterationtable";
import React from "react";
import Page from "../../components/page";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
function TransliterationTable() {

  return (
    <>
      <Header search={false} />

      <Page>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            padding: "30px",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <h1
            style={{
              margin: "0 auto",
              paddingBottom: "20px",
            
              fontStyle: "normal",
              fontWeight: " 500",
              fontSize: "48px",
              lineHeight: " 56px",
            }}
          >
            Transliteration Table
          </h1>
          <div style={{ margin: "0 auto", padding: "10px" }}>
            <Table />
          </div>
        </div>
      </Page>
      <Footer />
    </>
  );
}
export default TransliterationTable;
