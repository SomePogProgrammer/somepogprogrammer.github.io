import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - Traveler (Template 12)</title>
        <meta property="og:title" content="Home - Traveler (Template 12)" />
      </Helmet>
      <section className="home-footer"></section>
      <span className="home-text">Send me an offer!</span>
      <ul className="home-ul list">
        <li className="list-item"></li>
        <li className="home-li1 list-item">
          <input
            type="text"
            required
            autoFocus
            placeholder="Role / Job"
            className="home-textinput input"
          />
          <input
            type="text"
            required
            autoFocus
            placeholder="Any insurance included?"
            className="home-textinput1 input"
          />
          <input
            type="text"
            required
            autoFocus
            placeholder="Payment Per Hour (Or Total)"
            className="home-textinput2 input"
          />
          <input
            type="text"
            required
            autoFocus
            placeholder="Hours:"
            className="home-textinput3 input"
          />
          <input
            type="text"
            cols="60"
            required
            className="home-textarea Content textarea"
          />
          <select required className="home-select">
            <option value="USD - Cashapp" selected>
              USD - Cashapp
            </option>
            <option value="USD - Check">USD - Check</option>
            <option value="USD - Cash">USD - Cash</option>
          </select>
          <span className="home-text01">
            <span>             Job Description:</span>
            <span className="home-text03">*</span>
            <span>  </span>
          </span>
          <span className="home-text05">
            <span>Description:</span>
            <span className="home-text07">*</span>
            <span>
               
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text09">(Include all Job Details)</span>
            <span> </span>
          </span>
          <span className="home-text11">
            <span>Job Type:</span>
            <span className="home-text13">*</span>
            <span>  </span>
          </span>
          <span className="home-text15">
            <span>             Payment &amp; Benefits:</span>
            <span className="home-text17">*</span>
            <span>  </span>
          </span>
          <select required className="home-select1">
            <option value="Full Time" selected>
              Full Time
            </option>
            <option value="Part Time">Part Time</option>
            <option value="Commission">Commission</option>
            <option value="Full Time - Internship">
              Full Time - Internship
            </option>
            <option value="Part Time - Internship">
              Part Time - Internship
            </option>
          </select>
          <button type="submit" className="home-button button">
            <span content="Send" className="home-text19">
              <br className="home-text20"></br>
              <span>Send</span>
              <br></br>
            </span>
          </button>
        </li>
        <li className="home-li2 list-item">
          <input
            type="text"
            required
            autoFocus
            placeholder="Employer Name"
            className="home-textinput4 input"
          />
          <span className="home-text23">
            <span>             Your Company:</span>
            <span className="home-text25">*</span>
            <span>  </span>
          </span>
          <span className="home-text27">
            <span>             Company Contact:</span>
            <span className="home-text29">*</span>
            <span>  </span>
          </span>
          <input
            type="text"
            required
            placeholder="Contacts:"
            className="home-textinput5 input"
          />
          <select required className="home-select2">
            <option value="Email" selected>
              Email
            </option>
            <option value="Option 2">Option 2</option>
            <option value="Phone">Phone</option>
            <option value="Option 3">Option 3</option>
            <option value="Discord">Discord</option>
          </select>
        </li>
      </ul>
    </div>
  )
}

export default Home
