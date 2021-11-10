import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


function Header(props){
    return(
        <>
        <header>
        <nav>
            <ul>
            <a><img className="logo" src="./logo.jpeg" /></a>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="produtos">Produtos</Link>
            </li>
            <li>
            <Link to="/compras">Compras</Link>
            </li>
            <li>
            <Link to="/sobre">Sobre</Link>
            </li>
            </ul>
        </nav>
        </header>
      
        </>
       
    )
}



export default Header
