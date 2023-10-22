import {memo} from "react";

import PropTypes from "prop-types";
import "./scss/feature-card2.scss";

const FeatureCard2 = (propsTable) => {
  var props = Object.assign(FeatureCard2.customProps, propsTable)
  return (
    <div className={`feature-card2-feature-card ${props.rootClassName} `}>
      <svg viewBox="0 0 865.7188571428571 1024" className="feature-card2-icon">
        <path
          d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"
          className=""
        ></path>
      </svg>
      <h2 className="feature-card2-text">{props.title}</h2>
      <span className="feature-card2-text1">{props.description}</span>
    </div>
  );
};

FeatureCard2.customProps = {
  pastedImage_alt: "pastedImage",
  pastedImage_src: "7e5cbe67-43f7-47b9-b63e-2eacdb08388b",
  description:
    "I organize all my code, using proper and easy to read format. All variables will be camelCase.",
  title: "Organized Code",
  rootClassName: "",
  action: "SEE MORE",
};

FeatureCard2.propTypes = {
  pastedImage_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  action: PropTypes.string,
};

export default memo(FeatureCard2);
