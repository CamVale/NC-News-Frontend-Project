import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./assets/pages/Homepage";
import Login from './assets/pages/Login'
import Articles from './assets/pages/Articles'
import Topbar from "./assets/components/Topbar";
import ArticleView from "./assets/pages/ArticleView";
import UserProvider from "./assets/components/UserProvider";
import TopicBar from "./assets/components/TopicBar";

function App() {
  return (
    <>
    <UserProvider>
      <Topbar/>
      <TopicBar/>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/articles" element={<Articles />}></Route>
            <Route path="/articles/:article_id" element={<ArticleView />}></Route>
          </Routes>
    </UserProvider>
    </>
  );
}

export default App;
