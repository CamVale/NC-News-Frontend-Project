import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./assets/pages/Homepage";
import Login from './assets/pages/Login'
import Articles from './assets/pages/Articles'
import Topbar from "./assets/components/Topbar";
import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <>
    <Topbar/>
    <Navbar/>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
