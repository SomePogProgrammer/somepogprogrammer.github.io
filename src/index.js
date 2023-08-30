/* © | Copyright 2023, SomeProgrammer's ReactJS Portfolio | SomePogProgrammer | ALL RIGHTS RESERVED © */

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import Login from "./pages/login";
import Home from "./pages/home";
import ContactMe from "./pages/contact-me";
import PastWorkHTML from "./pages/past-work";
import BehindTheScenes from "./pages/behind-the-scenes";
import Page from "./pages/page";
import AboutMe from "./pages/about-me";
import WebDevelopment from "./pages/web-development";
import { fixComponentProps } from "./componentFunctions.js/compFuncs";
window.fixComponentProps = fixComponentProps;


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="login" />
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
