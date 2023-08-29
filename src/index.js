/* © | Copyright 2023, SomeProgrammer's ReactJS Portfolio | SomePogProgrammer | ALL RIGHTS RESERVED © */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import Login from "./views/login";
import Home from "./views/home";
import ContactMe from "./views/contact-me";
import PastWorkHTML from "./views/past-work";
import BehindTheScenes from "./views/behind-the-scenes";
import Page from "./views/page";
import AboutMe from "./views/about-me";
import WebDevelopment from "./views/web-development";
import { fixComponentProps } from "./componentFunctions.js/compFuncs";
window.fixComponentProps = fixComponentProps;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="https://qhkvxj.csb.app/login" />
        <Route element={<Home />} path="/home" />
        <Route element={<ContactMe />} path="/contact-me" />
        <Route element={<PastWorkHTML />} path="/past-work" />
        <Route element={<BehindTheScenes />} path="/behind-the-scenes" />
        <Route element={<AboutMe />} path="/" />
        <Route element={<Page />} path="*" />
        <Route element={<WebDevelopment />} path="/web-development" />
      </Routes>
    </BrowserRouter>
  );
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
