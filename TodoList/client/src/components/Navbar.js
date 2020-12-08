import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './logo.png'
import './Navbar.css'

export default function Nav({setIsLogin}) {

    const logoutSubmit = () =>{
        localStorage.clear()
        setIsLogin(false)
    }
    const port1='http://localhost:3006'
    const portChangeTodo = () =>{   
        /* port.replace("http://localhost:3000","")
        console.log(port) */
        window.location.assign("http://localhost:3006")
    }
    const portChangeDiscuss = () =>{   
        /* port.replace("http://localhost:3000","")
        console.log(port) */
        window.location.assign("http://localhost:8000")
    }
    return (
        <header>
            <div className="logo">
            <img className="image" src={Logo} alt="logo"></img>
                <h2 className="prodpod">PRODPOD</h2>
            
                </div>
        </header>
    )
}
