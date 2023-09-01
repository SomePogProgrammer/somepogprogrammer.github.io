import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './behind-the-scenes.css'

const BehindTheScenes = () => {
  return (
    <div className="behind-the-scenes-container">
      <Helmet>
        <title>BehindTheScenes - SomeProgrammer's Portfolio</title>
        <meta
          property="og:title"
          content="BehindTheScenes - SomeProgrammer's Portfolio"
        />
      </Helmet>
      <Header></Header>
    </div>
  )
}

export default BehindTheScenes
