'use client'
import {memo} from "react";
import PropTypes from "prop-types";
import NextLink from "./linkNav"
import Link  from "next/link";
import "./scss/feature-card8.scss";

const FeatureCard8 = (propsTable) => {
  var props = Object.assign(FeatureCard8.customProps, propsTable)

  return (
    <div className="feature-card8-feature-card">
      <svg viewBox="0 0 1097.142857142857 1024" className="feature-card8-icon">
        <path d="M352.571 799.429l-28.571 28.571c-7.429 7.429-18.857 7.429-26.286 0l-266.286-266.286c-7.429-7.429-7.429-18.857 0-26.286l266.286-266.286c7.429-7.429 18.857-7.429 26.286 0l28.571 28.571c7.429 7.429 7.429 18.857 0 26.286l-224.571 224.571 224.571 224.571c7.429 7.429 7.429 18.857 0 26.286zM690.286 189.714l-213.143 737.714c-2.857 9.714-13.143 15.429-22.286 12.571l-35.429-9.714c-9.714-2.857-15.429-13.143-12.571-22.857l213.143-737.714c2.857-9.714 13.143-15.429 22.286-12.571l35.429 9.714c9.714 2.857 15.429 13.143 12.571 22.857zM1065.714 561.714l-266.286 266.286c-7.429 7.429-18.857 7.429-26.286 0l-28.571-28.571c-7.429-7.429-7.429-18.857 0-26.286l224.571-224.571-224.571-224.571c-7.429-7.429-7.429-18.857 0-26.286l28.571-28.571c7.429-7.429 18.857-7.429 26.286 0l266.286 266.286c7.429 7.429 7.429 18.857 0 26.286z"></path>
      </svg>
      <h2 className="feature-card8-text">{props.title}</h2>
      <span className="feature-card8-text1">{props.description}</span>
      <button className="feature-card8-past-work button block">
      <NextLink to={"/pages/behind-the-scenes"} resetOnNav={true}  displayText={props.BehindTheScenes} ></NextLink>
      </button>
    </div>
  );
};

FeatureCard8.customProps = {
  BehindTheScenes: "View",
  title: "Behind The Scenes",
  description:
    "Personally, as a programmer I love looking at projects and thinking how I'd program them, and seeing the code behind them is another view I enjoy. So you can gauge how I format, and write my code.",
};

FeatureCard8.propTypes = {
  BehindTheScenes: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default memo(FeatureCard8);
