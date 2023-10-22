'use client'
import Header from '../../../components/header'
import '../../scss/request.scss'

export default function RequestPage() {
    
    return (
       
        <div className="request-container w-full h-full absolute">
            <Header></Header>
            <div className="banner"></div>
            <div className="inner-request-container bg-[#979797] rounded-xl flex-auto mx-auto w-full md:w-3/6 h-full">
                <div className="id-status-container text-center">
                    <h1 className=" font-source-code-pro text-white">WORK IN PROGRESS</h1>
                </div>
            </div>
        </div>
       
    )
}