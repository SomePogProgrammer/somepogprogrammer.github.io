import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './behind-the-scenes.css'

const BehindTheScenes = (props) => {
  return (
    <div className="behind-the-scenes-container">
      <Helmet>
        <title>BehindTheScenes - Traveler (Template 12)</title>
        <meta
          property="og:title"
          content="BehindTheScenes - Traveler (Template 12)"
        />
      </Helmet>
      <Header></Header>
    </div>
  )
}

export default BehindTheScenes
