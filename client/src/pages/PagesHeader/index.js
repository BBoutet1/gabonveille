import React from "react"
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import "./style.css";

export default function PagesHeader() {

    return (
        <div className="pages-header">
            <Header/>
            <Navbar/>
        </div>
    )
   
    
}