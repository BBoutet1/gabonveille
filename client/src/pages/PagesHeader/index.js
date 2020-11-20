import React from 'react'
import TopHeader from '../../components/TopHeader'
import Navbar from '../../components/Navbar'
import './style.css';

export default function PagesHeader() {

    return (
        <div className='pages-header'>
            <TopHeader/>
            <Navbar />
        </div>
    )
   
    
}