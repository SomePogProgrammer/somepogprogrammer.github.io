import React from "react";
import { Helmet } from 'react-helmet'
import {Link} from "react-router-dom";
import "./scss/page.scss";

const Page_404 = (props) => {
  return (
    <div className="page-container">
      <Helmet>
      </Helmet>
      
      <div className="page-container">
        <div className="page-container1">
          <h1 className="page-text inputOnContactMe">
            <span>HTTP ERROR</span>
            <br />
            <span>4 0 4 Page Not Found</span>
          </h1>
          <button className="page-send-offer button">
            <Link to="/" className="page-text4">
              Back To Main Page
            </Link>
          {/* <svg viewBox="0 0 987.4285714285713 1024" className="page-icon">
              <path d="M987.429 510.286c0 5.143-2.286 10.286-5.714 13.714l-219.429 202.286c-5.714 5.143-13.143 6.286-20 3.429-6.286-2.857-10.857-9.143-10.857-16.571v-128h-713.143c-10.286 0-18.286-8-18.286-18.286v-109.714c0-10.286 8-18.286 18.286-18.286h713.143v-128c0-7.429 4-13.714 10.857-16.571s14.286-1.714 20 2.857l219.429 200c3.429 3.429 5.714 8 5.714 13.143v0z"></path>
  </svg>*/}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page_404;
