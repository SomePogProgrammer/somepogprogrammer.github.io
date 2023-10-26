'use client'
import React from "react";
import { Helmet } from 'react-helmet'
import Link from "next/link";
import "./pages/scss/page.scss";
import "./globals.scss"
import "./page.scss"

const NotFound = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>
          SomeProgrammer's Portfolio
        </title>
        <link rel="icon" href="./favicon-32x32.png" />
      </Helmet>
      
      <div className="page-container">
        <div className="page-container1">
          <h1 className="page-text inputOnContactMe">
            <span>HTTP ERROR</span>
            <br />
            <span>4 0 4 Page Not Found</span>
          </h1>
          <button className="page-send-offer button">
            <Link href="/" className="page-text4">
              Back To Main Page
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
