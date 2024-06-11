import React from "react";
import HomePage from "./components/HomePage";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import EditRecord from "./components/EditRecord";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/homepage" Component={HomePage} />
          <Route path="/edit/:id" Component={EditRecord} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
