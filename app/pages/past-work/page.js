'use client'
import Header from "../../components/header";
import { Helmet } from 'react-helmet'
import NavigationLinks2 from "../../components/navigation-links2";
import TestimonialCard1 from "../../components/testimonial-card1";
import TestimonialCard2 from "../../components/testimonial-card2";
import TestimonialCard3 from "../../components/testimonial-card3";
import TestimonialCard4 from "../../components/testimonial-card4";
import "../../page.scss";
import "../../globals.scss";
import "../scss/past-work.scss";


const PastWork = (props) => {
  return (
    <div className="past-work-container">
      <Helmet>
     
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <header data-role="Header" className="past-work-header fixed-navbar">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
        
          className="past-work-image"
        />
        <div className="past-work-nav">
          <NavigationLinks2
            rootClassName="root-class-name9"
            BehindTheScenes="Behind The Scenes"
          ></NavigationLinks2>
        </div>
        <div className="past-work-btn-group">
          <button className="past-work-login button">Login</button>
          <button className="past-work-register button">Register</button>
        </div>
        <h1 className="past-work-page-heading fixed-navbar">Past Work</h1>
      </header>
      <div className="past-work-banner"></div>
      <div className="past-work-container1"></div>
      <div className="past-work-banner1"></div>
      <div className="past-work-testimonial">
        <div className="past-work-container2">
          <h1 className="past-work-text">
            <span>My Reviews</span>
            <br></br>
          </h1>
          <span className="past-work-text3">
            I&apos;m proud of each and every project I do, big or small.
            I&apos;m also love helping others out with their projects and their
            passions, but I&apos;ll let these reviews speak for themselves, some
            are past employers, co-workers, or people that I&apos;ve helped.
          </span>
          <div className="past-work-container3">
            <TestimonialCard1 rootClassName="root-class-name2"></TestimonialCard1>
            <TestimonialCard2 rootClassName="testimonial-card2-root-class-name"></TestimonialCard2>
            <TestimonialCard1 rootClassName="root-class-name"></TestimonialCard1>
          </div>
        </div>
      </div>
      <div className="past-work-banner2"></div>
      <div className="past-work-testimonial1">
        <div className="past-work-container4">
          <div className="past-work-container5">
            <div className="past-work-container6">
              <TestimonialCard3 rootClassName="root-class-name1"></TestimonialCard3>
            </div>
            <TestimonialCard3 rootClassName="root-class-name2"></TestimonialCard3>
          </div>
          <div className="past-work-container7">
            <TestimonialCard4
              profile_src="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="root-class-name"
            ></TestimonialCard4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastWork;
