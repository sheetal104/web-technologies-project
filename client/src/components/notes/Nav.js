import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './logo.png'

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
            <Link to="/">
                <img className='logoPic' src={Logo} alt="Logo" />
                <h1 className='prodpod'>PRODPOD</h1></Link>
            </div>
            <ul>

                <li><Link to="/">My Projects</Link></li>
                <li className='todo' onClick={portChangeTodo}>TODO</li>
                <li className='todo' onClick={portChangeDiscuss}>DISCUSS</li>
                <li onClick={logoutSubmit}><Link to="/">Logout</Link></li>
            </ul>
        </header>
    )
}
