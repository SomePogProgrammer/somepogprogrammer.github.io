import { Link } from "react-router-dom";
import "./css/navigation-links2.css";
import {memo} from "react"
import PropTypes from "prop-types";

const NavigationLinks2 = (propsTable) => {

  const props = self.fixComponentProps(propsTable);

  return (
    <nav
      className={`navigation-links2-nav navigation-links2-${props.rootClassName} `}
    >
      <Link to="/" className="navigation-links2-navlink">
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

NavigationLinks2.defaultProps = {
  PastWork: "Past Work",
  AboutMe1: "About Me",
  rootClassName: "",
  text: "Link",
  ContactMe: "Contact Me",
  link_text: "https://example.com",
  BehindTheScenes: "Behind The Scenes",
  AboutMe: "About Me",
  WebDevelopment: "Web Development",
};

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
