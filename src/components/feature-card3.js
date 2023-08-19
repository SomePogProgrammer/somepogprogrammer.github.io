import React from 'react'

import PropTypes from 'prop-types'

import './feature-card3.css'

const FeatureCard3 = (props) => {
  return (
    <div className={`feature-card3-feature-card ${props.rootClassName} `}>
      <svg viewBox="0 0 1090.8525714285713 1024" className="feature-card3-icon">
        <path
          d="M1017.714 532c0-16-17.714-20-30.286-20h-621.714c-30.286 0-70.286 18.857-89.714 42.286l-168 207.429c-5.143 6.857-10.286 14.286-10.286 22.857 0 16 17.714 20 30.286 20h621.714c30.286 0 70.286-18.857 89.714-42.857l168-207.429c5.143-6.286 10.286-13.714 10.286-22.286zM365.714 438.857h438.857v-91.429c0-30.286-24.571-54.857-54.857-54.857h-329.143c-30.286 0-54.857-24.571-54.857-54.857v-36.571c0-30.286-24.571-54.857-54.857-54.857h-182.857c-30.286 0-54.857 24.571-54.857 54.857v487.429l146.286-180c33.143-40.571 94.286-69.714 146.286-69.714zM1090.857 532c0 25.143-10.857 49.143-26.286 68.571l-168.571 207.429c-32.571 40-94.857 69.714-146.286 69.714h-621.714c-70.286 0-128-57.714-128-128v-548.571c0-70.286 57.714-128 128-128h182.857c70.286 0 128 57.714 128 128v18.286h310.857c70.286 0 128 57.714 128 128v91.429h109.714c38.857 0 77.714 17.714 94.857 54.286 5.714 12 8.571 25.143 8.571 38.857z"
          className=""
        ></path>
      </svg>
      <h2 className="feature-card3-text">{props.title}</h2>
      <span className="feature-card3-text1">{props.description}</span>
    </div>
  )
}

FeatureCard3.defaultProps = {
  description:
    'Projects are organized by directories, and subdirectories, clean, and easy to look through.',
  action: 'SEE MORE',
  title: 'Organized Projects',
  rootClassName: '',
}

FeatureCard3.propTypes = {
  description: PropTypes.string,
  action: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard3
