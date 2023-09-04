/* © | Copyright 2023, SomeProgrammer's ReactJS Portfolio | SomePogProgrammer | ALL RIGHTS RESERVED © */

import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import Login from "./pages/login";
import Home from "./pages/home";
import ContactMe from "./pages/contact-me";
import PastWorkHTML from "./pages/past-work";
import BehindTheScenes from "./pages/behind-the-scenes";
import Page from "./pages/page";
import AboutMe from "./pages/about-me";
import WebDevelopment from "./pages/web-development";
import {} from "./componentFunctions.js/compFuncs"
import React from "react";

function App() {
  console.log("edited path")
  return (
    <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Login />} exact path="login" />
        <Route element={<Home />} exact path="/home" />
        <Route element={<ContactMe />} exact path="/contact-me" />
        <Route element={<PastWorkHTML />} exact path="/past-work" />
        <Route element={<BehindTheScenes />} exact path="/behind-the-scenes" />
        <Route element={<AboutMe />}  path="/" />
        <Route element={<Page />} exact path="*" />
        <Route element={<WebDevelopment />} exact path="/web-development" />
      </Routes>
    </HashRouter>
    </React.StrictMode>
  );
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
