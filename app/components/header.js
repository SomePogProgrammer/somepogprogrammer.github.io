import {memo, useEffect} from "react";
import PropTypes from "prop-types";
import NavigationLinks2 from "./navigation-links2";
import "./scss/header.scss";

const Header = (propsTable) => {
  
  var props = Object.assign(Header.customProps, propsTable)
  

  var curRoute = window.location.href.split("/#")[1]

  if (curRoute  == "/" || curRoute == "") {
    curRoute = "About-Me"
  } else if (!curRoute) {
    curRoute = "About-Me"
  }
  else if (curRoute !== null ) {
    curRoute = curRoute.replace("/","")
  }
  if (curRoute.toLowerCase().match("jobrequests")) {
    curRoute = "Job Request"
  }


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
        <span className="">{curRoute}</span>
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
