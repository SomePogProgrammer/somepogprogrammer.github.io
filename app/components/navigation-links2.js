'use client'
import Link from "next/link"
import "./scss/navigation-links2.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";


function NavigationLinks2(propsTable) {
  var props = Object.assign(NavigationLinks2.customProps, propsTable)
  var curURL = process.env.NEXT_PUBLIC_SITE_URL
  NavigationLinks2.useRenderHead()
  
  return (
    <nav
      className={`navigation-links2-nav navigation-links2-${props.rootClassName} `}
    >
      
      <Link
      
       href={curURL + "/"} onClick={ typeof window != "undefined" && window.scrollTo({'behavior':'smooth','top':"0"})} className="navigation-links2-navlink">
        {props.AboutMe}
      </Link>
      <Link href={curURL + "/pages/past-work"} onClick={typeof window != "undefined" && window.scrollTo({'behavior':'smooth','top':"0"})} className="navigation-links2-navlink1">
        {props.PastWork}
      </Link>
      <Link href={curURL + "/pages/web-development"} onClick={typeof window != "undefined" && window.scrollTo({'behavior':'smooth','top':"0"})} className="navigation-links2-navlink2">
        {props.WebDevelopment}
      </Link>
      <Link href={curURL + "/pages/contact-me"} onClick={typeof window != "undefined" && window.scrollTo({'behavior':'smooth','top':"0"})} className="navigation-links2-navlink3">
        {props.ContactMe}
      </Link>
      <Link href={curURL + "/pages/behind-the-scenes"} onClick={typeof window != "undefined" && window.scrollTo({'behavior':'smooth','top':"0"})} className="navigation-links2-navlink4">
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
      document.title = "JobRequest - SomeProgrammer's Portfolio"
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

export default NavigationLinks2;
