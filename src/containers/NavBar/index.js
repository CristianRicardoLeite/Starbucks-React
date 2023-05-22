import React from 'react'
import './styles.css'
import Logo from '../../assets/logo.png'

export const NavBar = () => {
    return (
        <header>
            <a href="#home" class="logo"><img src={Logo} alt=" Logo" /></a>
            <div class="bx bx-menu" id="menu-icon"></div>

            <ul class="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#shop">Nosso Café</a></li>
                <li><a href="#delivery">Delivery</a></li>
                <li><a href="#aplicativo">Aplicativo</a></li>
                <li><a href="#nossocafe">Shop</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </header>
    )
}
