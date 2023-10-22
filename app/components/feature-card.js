import {memo} from "react";
import PropTypes from "prop-types";
import "./scss/feature-card.scss";

const defaultProps = {
  rootClassName: "",
  description:
    "I offer, professional Front-End Web Development, using React.JS",
  pastedImage_src:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6f375762-a9fd-49c5-ae5b-f48d086c6723/c0b71442-6103-4607-a511-b4e524010607?org_if_sml=1197658",
  pastedImage_alt: "pastedImage",
  title1: "React.js",
  action: "SEE MORE",
  title: "R E A C T",
  icon_src: "",
}

const FeatureCard = (propsTable) => {

  var props = Object.assign(FeatureCard.customProps, propsTable)

  return (
    <div className={`feature-card-feature-card ${props.rootClassName} `}>
      <svg viewBox="0 0 1097.142857142857 1024" className="feature-card-icon">
        <path
          d="M352.571 799.429l-28.571 28.571c-7.429 7.429-18.857 7.429-26.286 0l-266.286-266.286c-7.429-7.429-7.429-18.857 0-26.286l266.286-266.286c7.429-7.429 18.857-7.429 26.286 0l28.571 28.571c7.429 7.429 7.429 18.857 0 26.286l-224.571 224.571 224.571 224.571c7.429 7.429 7.429 18.857 0 26.286zM690.286 189.714l-213.143 737.714c-2.857 9.714-13.143 15.429-22.286 12.571l-35.429-9.714c-9.714-2.857-15.429-13.143-12.571-22.857l213.143-737.714c2.857-9.714 13.143-15.429 22.286-12.571l35.429 9.714c9.714 2.857 15.429 13.143 12.571 22.857zM1065.714 561.714l-266.286 266.286c-7.429 7.429-18.857 7.429-26.286 0l-28.571-28.571c-7.429-7.429-7.429-18.857 0-26.286l224.571-224.571-224.571-224.571c-7.429-7.429-7.429-18.857 0-26.286l28.571-28.571c7.429-7.429 18.857-7.429 26.286 0l266.286 266.286c7.429 7.429 7.429 18.857 0 26.286z"
          className=""
        ></path>
      </svg>
      <h2 className="feature-card-text">{props.title1}</h2>
      <span className="feature-card-text1">{props.description}</span>
    </div>
  );
};

FeatureCard.customProps = {
  rootClassName: "",
  description:
    "I offer, professional Front-End Web Development, using React.JS",
  pastedImage_src:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6f375762-a9fd-49c5-ae5b-f48d086c6723/c0b71442-6103-4607-a511-b4e524010607?org_if_sml=1197658",
  pastedImage_alt: "pastedImage",
  title1: "React.js",
  action: "SEE MORE",
  title: "R E A C T",
  icon_src: "",
};

FeatureCard.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  title1: PropTypes.string,
  action: PropTypes.string,
  title: PropTypes.string,
  icon_src: PropTypes.string,
};

export default memo(FeatureCard);
