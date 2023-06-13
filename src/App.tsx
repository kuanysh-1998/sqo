import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";
import NavMenu from "./components/NavMenu/NavMenu";
import Government from "./pages/Government/Government";
import MainPage from "./pages/MainPage/MainPage";
import ServiceInfo from "./pages/ServiceInfo/ServiceInfo";

const App = () => {
  
  return (
    <>
      <Navbar />
      <NavMenu />
      <MainContent />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/government" element={<Government />} />
        <Route path="/service-info/:id" element={<ServiceInfo />} />
      </Routes>


      <Footer />
    </>
  );
};

export default App;
