'use client'
import AboutMe from "./pages/about-me/page"
import { useEffect } from "react"


export default function AboutMe_Home() {
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
        <AboutMe/>
    )
}
