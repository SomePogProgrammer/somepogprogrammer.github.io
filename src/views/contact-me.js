import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './contact-me.css'

const ContactMe = (props) => {
  return (
    <div className="contact-me-container">
      <Helmet>
        <title>ContactMe - Traveler (Template 12)</title>
        <meta
          property="og:title"
          content="ContactMe - Traveler (Template 12)"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="contact-me-banner"></div>
      <div className="contact-me-container01">
        <h1 className="contact-me-text">
          <span>Send A Job Offer!</span>
          <br></br>
          <br></br>
        </h1>
        <div className="contact-me-container02">
          <svg className="contact-me-icon">
            <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
          </svg>
          <svg className="contact-me-icon02">
            <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
          </svg>
        </div>
        <div className="contact-me-container03">
          <div className="contact-me-container04">
            <svg viewBox="0 0 1024 1024" className="contact-me-icon04">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="contact-me-icon06">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="contact-me-icon08">
              <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
            </svg>
          </div>
        </div>
        <div id="offerForm" className="contact-me-container05">
          <h3 className="contact-me-company">
            <span>
              Your Company
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="contact-me-text05">*</span>
          </h3>
          <input
            type="text"
            required
            placeholder="Company / Employer Name"
            className="contact-me-company-name input inputOnContactMe"
          />
          <h3 className="contact-me-contact">
            <span>Contact: </span>
            <span className="contact-me-text07">*</span>
            <br></br>
            <span className="contact-me-text09">Contact Type: </span>
            <span className="contact-me-text10">*</span>
            <br></br>
          </h3>
          <select required className="contact-me-select inputOnContactMe">
            <option value="Phone" selected>
              Phone
            </option>
            <option value="Email">Email</option>
            <option value="Discord">Discord</option>
          </select>
          <input
            type="email"
            required
            placeholder="Contacts:"
            autoComplete="off"
            className="contact-me-contacts input inputOnContactMe"
          />
          <h3 className="contact-me-job-head">
            <span>Job: </span>
            <br></br>
            <span className="contact-me-text14">Description: </span>
            <span className="contact-me-text15">*</span>
            <br></br>
          </h3>
          <input
            type="text"
            required
            placeholder="Job Description"
            autoComplete="off"
            className="contact-me-job-description input inputOnContactMe"
          />
          <h3 className="contact-me-job-head1">
            <span className="contact-me-text17">Role/Job: </span>
            <span className="contact-me-text18">*</span>
            <br></br>
          </h3>
          <input
            type="text"
            required
            placeholder="Role (Ex: Front-End Developer)"
            autoComplete="off"
            className="contact-me-job-role input inputOnContactMe"
          />
          <h3 className="contact-me-job-head2">
            <span className="contact-me-text20">Job Type: </span>
            <span className="contact-me-text21">*</span>
            <br></br>
          </h3>
          <select required className="contact-me-select1 inputOnContactMe">
            <option value="Full Time" selected>
              Full Time
            </option>
            <option value="Part Time">Part Time</option>
            <option value="Commission">Commission</option>
            <option value="Part Time - Internship">
              Part Time - Internship
            </option>
            <option value="Full Time - Internship">
              Full Time - Internship
            </option>
          </select>
          <input
            type="text"
            required
            placeholder="Hours"
            autoComplete="off"
            className="contact-me-job-role1 input inputOnContactMe"
          />
          <h3 className="contact-me-payment">
            <span>Payment: </span>
            <br></br>
            <span className="contact-me-text25">Payment Method: </span>
            <span className="contact-me-text26">*</span>
            <br></br>
          </h3>
          <select required className="contact-me-select2 inputOnContactMe">
            <option value="USD - Cashapp" selected>
              USD - Cashapp
            </option>
            <option value="USD - Check">USD - Check</option>
            <option value="USD - Cash">USD - Cash</option>
          </select>
          <input
            type="text"
            required
            placeholder="Payment Per Hour (Or total for commissions)"
            autoComplete="off"
            className="contact-me-payment-per input inputOnContactMe"
          />
          <button className="contact-me-send-offer button">Send Offer</button>
        </div>
      </div>
      <div className="contact-me-container06">
        <h1 className="contact-me-text28">Schedule an Interview!</h1>
        <h1 className="contact-me-text29">
          I&apos;ll get an email telling me this information, I will contact you
          so we can schedule it!
        </h1>
        <div className="contact-me-container07">
          <svg className="contact-me-icon10">
            <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
          </svg>
          <svg className="contact-me-icon12">
            <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
          </svg>
        </div>
        <div className="contact-me-container08">
          <div className="contact-me-container09">
            <svg viewBox="0 0 1024 1024" className="contact-me-icon14">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="contact-me-icon16">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="contact-me-icon18">
              <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
            </svg>
          </div>
        </div>
        <div id="ScheduleForm" className="contact-me-container10">
          <h3 className="contact-me-company1">
            <span>
              Your Company
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="contact-me-text31">*</span>
          </h3>
          <input
            type="text"
            required
            placeholder="Company / Employer Name"
            className="contact-me-company-name1 input inputOnContactMe"
          />
          <h3 className="contact-me-contact1">
            <span>Contact: </span>
            <span className="contact-me-text33">*</span>
            <br></br>
            <span className="contact-me-text35">Contact Type: </span>
            <span className="contact-me-text36">*</span>
            <br></br>
          </h3>
          <select required className="contact-me-select3 inputOnContactMe">
            <option value="Phone" selected>
              Phone
            </option>
            <option value="Email">Email</option>
            <option value="Discord">Discord</option>
          </select>
          <input
            type="email"
            required
            placeholder="Contacts:"
            autoComplete="off"
            className="contact-me-contacts1 input inputOnContactMe"
          />
          <h3 className="contact-me-job-head3">
            <span>Job: </span>
            <br></br>
            <span className="contact-me-text40">Description: </span>
            <span className="contact-me-text41">*</span>
            <br></br>
          </h3>
          <input
            type="text"
            required
            placeholder="Job Description"
            autoComplete="off"
            className="contact-me-job-description1 input inputOnContactMe"
          />
          <button className="contact-me-send-offer1 button">Send Offer</button>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
