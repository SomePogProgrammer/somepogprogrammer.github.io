import {memo} from "react";
import PropTypes from "prop-types";
import Link from "next/link"

import "./scss/feature-card5.scss";
import NextLink from "./linkNav";

const FeatureCard5 = (propsTable) => {
  var props = Object.assign(FeatureCard5.customProps, propsTable)
  return (
    <div className={`feature-card5-feature-card ${props.rootClassName} `}>
      <svg viewBox="0 0 1073.7371428571428 1024" className="feature-card5-icon">
        <path
          d="M1073.714 544c0 13.714-8.571 27.429-17.714 37.714l-192 226.286c-33.143 38.857-100.571 69.714-150.857 69.714h-621.714c-20.571 0-49.714-6.286-49.714-32 0-13.714 8.571-27.429 17.714-37.714l192-226.286c33.143-38.857 100.571-69.714 150.857-69.714h621.714c20.571 0 49.714 6.286 49.714 32zM877.714 347.429v91.429h-475.429c-71.429 0-160 40.571-206.286 95.429l-195.429 229.714c0-4.571-0.571-9.714-0.571-14.286v-548.571c0-70.286 57.714-128 128-128h182.857c70.286 0 128 57.714 128 128v18.286h310.857c70.286 0 128 57.714 128 128z"
          className=""
        ></path>
      </svg>
      <h2 className="feature-card5-text">{props.title}</h2>
      <span className="feature-card5-text1">{props.description}</span>
      <button className="feature-card5-past-work button">
      <NextLink to={"/pages/past-work"} displayText={props.PastWork}></NextLink>
      </button>
    </div>
  );
};

FeatureCard5.customProps = {
  title: "Past Work",
  description:
    "View ratings, quotes, and feedback from other's who I've done work for!",
  rootClassName: "",
  PastWork: "View",
};

FeatureCard5.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  PastWork: PropTypes.string,
};

export default memo(FeatureCard5);
