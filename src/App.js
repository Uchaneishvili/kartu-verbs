/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Allverb from "./pages/Allverb/Allverb";
import TransliterationTable from "./pages/TransliterationTable/TransliterationTable";

import ProjectDescription from "./pages/ProjectDescription/ProjectDescription";
import Publicaiton from "./pages/Publication/Publication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Mainpage />} />
        <Route path="/DetailPage" exact element={<DetailPage />} />
        <Route path="/DetailPage/:id" exact element={<DetailPage />} />
        <Route path="/Allverb" element={<Allverb />} />
        <Route
          path="/transliteration-table"
          element={<TransliterationTable />}
        />
        <Route path="/project-description" element={<ProjectDescription />} />
        <Route path="/publications" element={<Publicaiton />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
