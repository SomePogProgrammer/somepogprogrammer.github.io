import { Link} from "react-router-dom";

import "./scss/navigation-links2.scss";
import { memo } from "react"
import PropTypes from "prop-types";
import { useEffect } from "react";


function NavigationLinks2(propsTable) {
  var props = Object.assign(NavigationLinks2.customProps, propsTable)
  NavigationLinks2.useRenderHead()

  return (
    <nav
      className={`navigation-links2-nav navigation-links2-${props.rootClassName} `}
    >
      
      <Link
      
       to={"/"} className="navigation-links2-navlink">
        {props.AboutMe}
      </Link>
      <Link to="/past-work" className="navigation-links2-navlink1">
        {props.PastWork}
      </Link>
      <Link to="/web-development" className="navigation-links2-navlink2">
        {props.WebDevelopment}
      </Link>
      <Link to="/contact-me" className="navigation-links2-navlink3">
        {props.ContactMe}
      </Link>
      <Link to="/behind-the-scenes" className="navigation-links2-navlink4">
        {props.BehindTheScenes}
      </Link>
    </nav>
  );
};

NavigationLinks2.useRenderHead = function() {

  useEffect(() =>  {

    var listOf = {
      "about-me": "AboutMe",
      "past-work": "PastWork",
      "contact-me": "ContactMe",
      "web-development": "WebDevelopment",
      "behind-the-scenes": "BehindTheScenes"
    }
    var location = window.location.hash

    if (location == "" | location == "#/" ) {
      document.title = "SomeProgrammer's Portfolio"
    } else if (listOf[location.split("#/")[1]] != null) {

      document.title = listOf[location.split("#/")[1]] + " - SomeProgrammer's Portfolio"

    } else if (location.toLowerCase().match("jobrequest")) {
      document.title = "Job Request - SomeProgrammer's Portfolio"
    }

  },[])
}
NavigationLinks2.customProps = {
  PastWork: "Past Work",
  AboutMe: "About Me",
  rootClassName: "",
  text: "Link",
  ContactMe: "Contact Me",
  link_text: "https://example.com",
  BehindTheScenes: "Behind The Scenes",
  AboutMe: "About Me",
  WebDevelopment: "Web Development",
}


NavigationLinks2.propTypes = {
  PastWork: PropTypes.string,
  AboutMe1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  ContactMe: PropTypes.string,
  link_text: PropTypes.string,
  BehindTheScenes: PropTypes.string,
  AboutMe: PropTypes.string,
  WebDevelopment: PropTypes.string,
};

export default memo(NavigationLinks2);
