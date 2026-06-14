import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Steps from "./pages/Steps";
import History from "./pages/History";
import Form from "./pages/Form";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ViewResume from "./pages/ViewResume";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/history" element={<History />} />
        <Route path="/form" element={<Form />} />
        <Route path="/view/:id/resume" element={<ViewResume/>}/>
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
