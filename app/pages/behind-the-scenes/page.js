'use client'
import '../scss/behind-the-scenes.scss'
import "../../page.scss";
import "../../globals.scss";
import { Helmet } from 'react-helmet'
import React from 'react'
import Header from '../../components/header'


const BehindTheScenes = () => {
  return (
    <div className="behind-the-scenes-container">
      <Helmet>
       
      </Helmet>
      <Header>
      </Header>
      <h1 className="font-source-code-pro mt-36">[Work In Progress]</h1>
    </div>
  )
}

export default BehindTheScenes
