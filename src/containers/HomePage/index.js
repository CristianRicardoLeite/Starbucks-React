import React from 'react'
import './styles.css'
import HomePhoto from '../../assets/home.png'

export function HomePage() {
    return (
        <section class="home" id='home'>
            <div class="home-text">
                <span>Bem Vindo ao</span>
                <h1>Starbucks Coffee</h1>
                <h2>Nossa missão é inspirar e nutrir o espírito humano – uma pessoa, uma xícara de café e uma comunidade de
                    cada vez.</h2>
                <a href="#home" class="btn">Saiba Mais</a>
            </div>
            <div class="home-img">
                <img src={HomePhoto} alt="" />

            </div>
        </section>

    )
}