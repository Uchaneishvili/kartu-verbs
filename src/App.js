/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Allverb from "./pages/Allverb/Allverb";
import DetailsPageCtxProvider from "./store/DetailsPageCtx/detailsPageCtxProvider";

function App() {
  return (
    <DetailsPageCtxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Mainpage />} />
          <Route path="/DetailPage" exact element={<DetailPage />} />
          <Route path="/Allverb" exact element={<Allverb />} />
        </Routes>
      </BrowserRouter>
    </DetailsPageCtxProvider>
  );
}

export default App;
