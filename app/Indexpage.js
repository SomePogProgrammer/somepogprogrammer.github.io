/* © | Copyright 2023, SomeProgrammer's ReactJS Portfolio | SomePogProgrammer | ALL RIGHTS RESERVED © */
"use client"

import "./globals.scss"
import "./page.scss";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import ContactMe from "./pages/contact-me";
import PastWorkHTML from "./pages/past-work";
import BehindTheScenes from "./pages/behind-the-scenes";
import Page_404 from "./pages/page_404";
import AboutMe from "./pages/about-me";
import WebDevelopment from "./pages/web-development";
import RequestPage from "./pages/Job_Requests/[_id]/page"
import React, { useEffect } from "react";

function AppRouter() {
 
  useEffect(()=> {
    if (!localStorage.getItem("Last_Request_Time")) {
      localStorage.getItem("Last_Request_Time",null)
    }
    if (!localStorage.getItem("Job_Request")) {
         localStorage.setItem("Job_Request",null)
    }
    if (!localStorage.getItem("Interview_Request")) {
        localStorage.setItem("Interview_Request", null)
    }
    
  },[])

  return (
   
  <div id="root">
   {/*  <Router>
        <Routes>
          <Route element={<Login />} path="login" />
          <Route element={<Home />} path="/home" />
          <Route element={<ContactMe />} path="/contact-me" />
          <Route element={<PastWorkHTML />} path="/past-work" />
          <Route element={<BehindTheScenes />} path="/behind-the-scenes" />
          <Route element={<AboutMe />} path="/" />
          <Route element={<Page_404 />} path="*" />
          <Route element={<WebDevelopment />} path="/web-development" />
          <Route element={<RequestPage/>} exact path="/JobRequests/:_id"/>
        </Routes>
      </Router>
  */}
  <h1>Hi</h1>
  </div>
  
  );
}

export default AppRouter


