import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './logo.png'
import './Navbar.css'

export default function Nav({setIsLogin}) {

    return (
        <header>
            <div className="logoNav">
            <img className="imageNav" src={Logo} alt="logo"></img>
                <h2 className="prodpodNav">PRODPOD</h2>
            
                </div>
        </header>
    )
}
