import {memo, useMemo} from "react";
import PropTypes from "prop-types";

import NavigationLinks2 from "./navigation-links2";
import "./header.css";


const Header = (propsTable) => {
  var props = self.fixComponentProps(propsTable);
  var curRoute = window.location.pathname
  console.log(curRoute)
  if (curRoute  == "/" || curRoute == "/#/") {
    curRoute = "About-Me"
  } else {
    curRoute = curRoute.replace("/","")
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
          rootClassName="rootClassName16"
          BehindTheScenes="Behind The Scenes"
          className=""
        ></NavigationLinks2>
      </div>
      <div className="header-btn-group">
        <button className="header-login button">{props.Login}</button>
        <button className="header-register button">{props.Register}</button>
      </div>
      <h1 className="header-page-heading fixed-navbar">
        <span className="">{curRoute}</span>
        <br className=""></br>
      </h1>
    </header>
  );
};

Header.defaultProps = {
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
