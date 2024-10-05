'use client'
import { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import NavigationLinks2 from "./navigation-links2";
import "./scss/header.scss";

const Header = (propsTable) => {
  const [isClient, setIsClient] = useState(false)
  const [curRoute, setCurRoute] = useState()
  var props = Object.assign(Header.customProps, propsTable)
  

  useEffect(() => {
    setIsClient(true)
    var curRoute_ = window.location.pathname.split("/pages")[1]

    if (curRoute_ == "/" || curRoute_ == "") {
      curRoute_ = "About-Me"
      setCurRoute(curRoute_)
    } else if (!curRoute_) {
      curRoute_ = "About-Me"
      setCurRoute(curRoute_)
    }
    else if (curRoute_ !== null) {
      curRoute_ = curRoute_.replace("/", "")
      setCurRoute(curRoute_)
    }
    if (curRoute_.toLowerCase().match("jobrequests")) {
      curRoute_ = "Job Request"
      setCurRoute(curRoute_)
  }
  }, [])


return (
  <header className="header-header fixed-navbar">
    <img
      alt={props.image_alt}
      src={props.image_src}
      className="header-image"

    />
    <div className="header-nav">
      <NavigationLinks2
        rootClassName="root-class-name16"
        BehindTheScenes="Behind The Scenes"
        className=""
      ></NavigationLinks2>
    </div>
    <div className="header-btn-group">
      <button className="header-login button" content={props.Login} ></button>
      <button className="header-register button" content={props.Register} ></button>
    </div>
    <h1 className="header-page-heading fixed-navbar">
      {isClient && <span className="">{curRoute}</span>}
      <br className=""></br>
    </h1>
  </header>
);
};


Header.customProps = {
  Register: "Register",
  image_alt: "logo",
  Login: "Login",
  image_src: "https://presentation-website-assets.teleporthq.io/logos/logo.png",
  rootClassName: "",
};

Header.propTypes = {
  Register: PropTypes.string,
  image_alt: PropTypes.string,
  Login: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default memo(Header);
