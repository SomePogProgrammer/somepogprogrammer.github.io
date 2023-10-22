import {memo} from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import "./scss/testimonial-card4.scss";

const TestimonialCard4 = (propsTable) => {
  var props = Object.assign(TestimonialCard4.customProps, propsTable)
  return (
    <div
      className={`testimonial-card4-testimonial-card ${props.rootClassName} `}
    >
      <svg
        viewBox="0 0 950.8571428571428 1024"
        className="testimonial-card4-icon"
      >
        <path
          d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"
          className=""
        ></path>
      </svg>
      <span className="testimonial-card4-text">{props.quote}</span>
      <div className="testimonial-card4-profile">
        <img
          alt={props.picture_alt}
          src={props.picture_src}
          className="testimonial-card4-image"
        />
        <div className="testimonial-card4-container">
          <span className="testimonial-card4-text1">{props.name}</span>
          <span className="testimonial-card4-text2">{props.role}</span>
        </div>
      </div>
    </div>
  );
};

TestimonialCard4.customProps = {
  quote:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo nec. Integer egestas, quam eu convallis ultrices, est nisl rutrum tellus, sed posuere velit nisi sit amet ante. In a augue porttitor, porta sapien sed, faucibus felis.",
  role: "N/A",
  picture_src:
    "https://images.unsplash.com/photo-1630476387426-52c6e0b14e50?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMyfHxiaW5hcnl8ZW58MHx8fHwxNjkxMDAyMjYzfDA&ixlib=rb-4.0.3&w=300",
  name: "N/A",
  rootClassName: "",
  picture_alt: "John Doe",
};

TestimonialCard4.propTypes = {
  quote: PropTypes.string,
  role: PropTypes.string,
  picture_src: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  picture_alt: PropTypes.string,
};

export default memo(TestimonialCard4);
