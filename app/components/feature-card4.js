import {memo} from "react";

import PropTypes from "prop-types";

import "./scss/feature-card4.scss";

const FeatureCard4 = (propsTable) => {
  var props = Object.assign(FeatureCard4.customProps, propsTable)
  return (
    <div className={`feature-card4-feature-card ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="feature-card4-icon">
        <path
          d="M73.143 804.571h585.143v-73.143h-585.143v73.143zM73.143 512h585.143v-73.143h-585.143v73.143zM969.143 768c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM73.143 219.429h585.143v-73.143h-585.143v73.143zM969.143 475.429c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM969.143 182.857c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM1024 658.286v219.429h-1024v-219.429h1024zM1024 365.714v219.429h-1024v-219.429h1024zM1024 73.143v219.429h-1024v-219.429h1024z"
          className=""
        ></path>
      </svg>
      <h2 className="feature-card4-text">{props.title}</h2>
      <span className="feature-card4-text1">{props.description}</span>
    </div>
  );
};

FeatureCard4.customProps = {
  action: "SEE MORE",
  title: "APIs & Databases",
  description:
    "Projects can be configured to include specific API, Embeds, and Databases.",
  rootClassName: "",
};

FeatureCard4.propTypes = {
  action: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default memo(FeatureCard4);
