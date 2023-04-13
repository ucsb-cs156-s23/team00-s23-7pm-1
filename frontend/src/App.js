import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";
import NewportBeachPage from "main/pages/NewportBeachPage";

import "bootstrap/dist/css/bootstrap.css";


function App() {

  return (
    <BrowserRouter basename="team00-s23-7pm-1">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/towns/NewportBeach" element={<NewportBeachPage />} />
        <Route exact path="/towns/AvilaBeach" element={<AvilaBeachPage />} />
        <Route exact path="/towns/LosAlamos" element={<LosAlamosPage />} />
        <Route exact path="/towns/ArroyoGrande" element={<ArroyoGrandePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
