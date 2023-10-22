import {memo} from "react";
import PropTypes from "prop-types";

import "./scss/sidebar.scss";

const Sidebar = (propsTable) => {
  var props = Object.assign(Sidebar.customProps, propsTable)
  return (
    <div className={`sidebar-sidebar ${props.rootClassName} `}>
      <nav className="sidebar-nav">
        <span className="sidebar-text">
          <span className="">A Programmer&apos;s</span>
          <br className=""></br>
          <span className="">Portfolio</span>
          <br className=""></br>
        </span>
        <button className="sidebar-about-me button">{props.AboutMe}</button>
        <button className="sidebar-past-work button">{props.PastWork}</button>
        <button className="sidebar-web-development button">
          {props.WebDevelopment}
        </button>
        <button className="sidebar-contact-me button">{props.ContactMe}</button>
        <button className="sidebar-behind-the-scenes button">
          {props.BehindTheScenes}
        </button>
      </nav>
    </div>
  );
};

Sidebar.customProps = {
  text3: "Behind The Scenes\n",
  BehindTheScenes: "Behind The Scenes",
  PastWork: "Past Work",
  text: "Past Work\n",
  AboutMe: "About Me",
  text1: "Web Development",
  WebDevelopment: "Web Development",
  text2: "Contact Me\n",
  rootClassName: "",
  ContactMe: "Contact Me",
};

Sidebar.propTypes = {
  text3: PropTypes.string,
  BehindTheScenes: PropTypes.string,
  PastWork: PropTypes.string,
  text: PropTypes.string,
  AboutMe: PropTypes.string,
  text1: PropTypes.string,
  WebDevelopment: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  ContactMe: PropTypes.string,
};

export default memo(Sidebar);
