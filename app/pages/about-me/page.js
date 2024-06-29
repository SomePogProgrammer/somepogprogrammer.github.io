'use client'
import "../../globals.scss";
import "../scss/about-me.scss";
import "../../page.scss";
import { Helmet } from 'react-helmet'
import React, {useEffect} from "react";
import NavigationLinks from "../../components/navigation-links2";
import FeatureCard from "../../components/feature-card";
import FeatureCard2 from "../../components/feature-card2";
import FeatureCard3 from "../../components/feature-card3";
import FeatureCard4 from "../../components/feature-card4";
import Header from "../../components/header";
import FeatureCard5 from "../../components/feature-card5";
import FeatureCard6 from "../../components/feature-card6";
import FeatureCard7 from "../../components/feature-card7";
import FeatureCard8 from "../../components/feature-card8";


import CodeEmbed from "../../componentUtilities/codeEmbed";



const AboutMe = (props) => {
  useEffect(() => {
    if (!localStorage.getItem("Last_Request_Time")) {
      localStorage.getItem("Last_Request_Time",null)
    }
    if (!localStorage.getItem("Job_Request")) {
         localStorage.setItem("Job_Request",null)
    }
    if (!localStorage.getItem("Interview_Request")) {
        localStorage.setItem("Interview_Request", null)
    }
    
  },[])
  return (

 
    <div className="about-me-container">
      
      <Helmet>
     
      </Helmet>
      <div data-role="MobileMenu" className="about-me-mobile-menu">
        <div className="about-me-nav">
          <NavigationLinks
            rootClassName="root-class-name8"
            BehindTheScenes="Behind The Scenes"
          ></NavigationLinks>
          <div className="about-me-btn-group">
            <button className="about-me-login button">Login</button>
            <button className="button about-me-register">Register</button>
          </div>
        </div>
        <div className="about-me-nav1">
          <div className="about-me-about">
            <div className="about-me-text-frame"></div>
            <div className="about-me-decor"></div>
            <div className="about-me-decor1"></div>
          </div>
          <div className="about-me-features">
            <h1 className="about-me-text">
              <span>Web Development</span>
              <br></br>
              <span>[Front-End]</span>
              <br></br>
            </h1>
            <div className="about-me-container1">
              <FeatureCard rootClassName="root-class-name2"></FeatureCard>
              <FeatureCard2 rootClassName="feature-card2-root-class-name2"></FeatureCard2>
              <FeatureCard3 rootClassName="feature-card3-root-class-name2"></FeatureCard3>
              <FeatureCard4 rootClassName="feature-card4-root-class-name2"></FeatureCard4>
            </div>
          </div>
        </div>
      </div>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="about-me-about1">
        <div className="about-me-text-frame1">
          <h2 className="about-me-text05">
            <span>Front-End Web Developer</span>
            <br></br>
          </h2>
          <li className="about-me-li list-item">
            <span className="about-me-text08">
              <span className="about-me-text09">
                5+ Years of total programming experience. (As of 6/11/2024)
              </span>
              <br className="about-me-text10"></br>
            </span>
          </li>
          <li className="about-me-li1 list-item">
            <span className="about-me-text11">
              <span className="about-me-text12">Knowledge in: </span>
              <br></br>
              <span className="about-me-text14">
                REACT.JS, JavaScript, HTML, CSS, JSX, JSON, Lua, LuaU.
              </span>
              <br></br>
            </span>
          </li>
        </div>
        <div className="about-me-decor2"></div>
        <div className="about-me-decor3"></div>
        <h2 className="about-me-text16">About Me</h2>
      </div>
      <div className="about-me-about2">
        <div className="about-me-text-frame2">
          <h2 className="about-me-text17">
            <span>Front-End Web Developer</span>
            <br></br>
          </h2>
          <li className="about-me-li2 list-item">
            <span className="about-me-text20">
              <span className="about-me-text21">
                5+ Years of total programming experience.
              </span>
              <br className="about-me-text22"></br>
            </span>
          </li>
          <li className="about-me-li3 list-item">
            <span className="about-me-text23">
              <span className="about-me-text24">Knowledge in: </span>
              <br></br>
              <span className="about-me-text26">
                REACT.JS, JavaScript, HTML, CSS, JSX, JSON, Lua, LuaU.
              </span>
              <br></br>
            </span>
          </li>
        </div>
        <div className="about-me-decor4"></div>
        <div className="about-me-decor5"></div>
        <h2 className="about-me-text28">About Me</h2>
      </div>
      <div className="about-me-banner">
        <div className="about-me-container2">
          <h1 className="about-me-text29">
            Web Developer &amp; Game Developer
          </h1>
          <span className="about-me-text30">
            I started programming when I was around 11 and fell in love with it.
            It&apos;s truly my passion. I&apos;m 100% self-taught, and I have 5+ as of 6/11/2024
            years of experience as a Game Developer, programming in Lua/LuaU.
            About a year and a half ago, I fell in love with web development. I
            already knew a programming language, so I had the programmer mind,
            along with a firm understanding of syntax beforehand. I was able to
            learn HTML, JavaScript, JSX, CSS, and JSON very quickly. In about 2
            months, thanks to my prior experience. So far I&apos;ve done smaller
            projects and personal websites and APIs. Another passion of mine is
            to teach others programming, and I even started up a Web Development
            Club at my school where I taught other students JavaScript, HTML,
            and CSS. And I&apos;m here now, looking for commissions, and
            part-time job offers. Internships too!
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1687603921109-46401b201195?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxSZWFjdCUyMEphdmFzY3JpcHR8ZW58MHx8fHwxNjkwODI3NDM4fDA&amp;ixlib=rb-4.0.3&amp;w=300"
          className="about-me-image"
        />
      </div>
      <div className="about-me-banner1"></div>
      <div className="about-me-container3">
        <div className="about-me-container4"></div>
       
        <div className="about-me-container5">
          <CodeEmbed language="tsx" exStyling={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)', overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden', height: "100%",overflow: 'hidden', backgroundColor: "#262626" }}
            codeToEmbed={`
        export default function App() {

        return (
          <BrowserRouter>
          <Routes>
            <Route
              path="*"
              element={
              <>
                <Layout />
                <NoPage className="NoPage" />
              </>
            }

            ></Route>
            <Route
            index
            element={
            <>
              <Home />
              <Layout />
            </>
            }

            />
            <Route
              path="pages/"
              element={
              <>
                <Layout />
                <NoPage />
              </>
            }

            ></Route>

            <Route path="pages" element={<Layout />
          }>
          <Route path="blogs" element={<Blogs
            />} />
            <Route path="contact" element={<Contact
              />} />
              <Route path="*" element={<NoPage />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
        );
      }
`}></CodeEmbed>
 <CodeEmbed language="tsx" exStyling={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)', overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden', height: "100%",overflow: 'hidden', backgroundColor: "#262626" }}
            codeToEmbed={`
            export default function App() {

              return (
                <BrowserRouter>
                <Routes>
                  <Route
                    path="*"
                    element={
                    <>
                      <Layout />
                      <NoPage className="NoPage" />
                    </>
                  }
      
                  ></Route>
                  <Route
                  index
                  element={
                  <>
                    <Home />
                    <Layout />
                  </>
                  }
      
                  />
                  <Route
                    path="pages/"
                    element={
                    <>
                      <Layout />
                      <NoPage />
                    </>
                  }
      
                  ></Route>
      
                  <Route path="pages" element={<Layout />
                }>
                <Route path="blogs" element={<Blogs
                  />} />
                  <Route path="contact" element={<Contact
                    />} />
                    <Route path="*" element={<NoPage />
                  } />
                </Route>
              </Routes>
            </BrowserRouter>
              );
            }
`}></CodeEmbed>
        </div>
      </div>
      <div className="about-me-banner2"></div>
      <div className="about-me-features1">
        <h1 className="about-me-text31">
          <span>What I Offer</span>
          <br></br>
        </h1>
        <div className="about-me-container6">
          <FeatureCard rootClassName="root-class-name1"></FeatureCard>
          <FeatureCard2 rootClassName="feature-card2-root-class-name1"></FeatureCard2>
          <FeatureCard3 rootClassName="feature-card3-root-class-name1"></FeatureCard3>
          <FeatureCard4 rootClassName="feature-card4-root-class-name1"></FeatureCard4>
        </div>
      </div>
      <div className="about-me-banner3"></div>
      <div className="about-me-features2">
        <div className="about-me-features3">
          <div className="about-me-container7">
            <div className="about-me-container8">
              <FeatureCard5 rootClassName="root-class-name5"></FeatureCard5>
              <FeatureCard6></FeatureCard6>
              <FeatureCard7></FeatureCard7>
              <FeatureCard8></FeatureCard8>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1630476387426-52c6e0b14e50?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMyfHxiaW5hcnl8ZW58MHx8fHwxNjkxMDAyMjYzfDA&amp;ixlib=rb-4.0.3&amp;w=500"
              className="about-me-image1"
            />
          </div>
        </div>
      </div>
    </div>
    
  
  );
}



export default AboutMe;
