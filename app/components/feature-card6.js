import {memo} from "react";
import Link  from "next/link";
import PropTypes from "prop-types";

import "./scss/feature-card6.scss";
import NextLink from "./linkNav";

const FeatureCard6 = (propsTable) => {
  var props = Object.assign(FeatureCard6.customProps, propsTable)

  if (props) {
    props = props;
  } else {
    props = propsTable;
  }
  return (
    <div className="feature-card6-feature-card">
      <svg viewBox="0 0 1170.2857142857142 1024" className="feature-card6-icon">
        <path d="M146.286 877.714h438.857v-292.571h-438.857v292.571zM731.429 585.143h292.571v-438.857h-438.857v146.286h54.857c50.286 0 91.429 41.143 91.429 91.429v201.143zM1170.286 91.429v548.571c0 50.286-41.143 91.429-91.429 91.429h-347.429v201.143c0 50.286-41.143 91.429-91.429 91.429h-548.571c-50.286 0-91.429-41.143-91.429-91.429v-548.571c0-50.286 41.143-91.429 91.429-91.429h347.429v-201.143c0-50.286 41.143-91.429 91.429-91.429h548.571c50.286 0 91.429 41.143 91.429 91.429z"></path>
      </svg>
      <h2 className="feature-card6-text">{props.title}</h2>
      <span className="feature-card6-text1">{props.description}</span>
      <button className="feature-card6-past-work button">
        <NextLink to={"/pages/web-development"} displayText={props.WebDevelopment} resetOnNav={true} />
      </button>
    </div>
  );
};

FeatureCard6.customProps = {
  rootClassName: "",
  description:
    "View my past work! Like my APIs, Datastores, Servers, Web applications, Websites, and other development items!",
  WebDevelopment: "View",
  title: "Web Development",
};

FeatureCard6.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  WebDevelopment: PropTypes.string,
  title: PropTypes.string,
};

export default memo(FeatureCard6);
