import React from 'react'
import './styles.css'
import AboutPagePhoto from '../../assets/app.png'

export const AboutPage = () => {
    return (
        <section class="about" id="about">
            <div class="about-img">
                <img src={AboutPagePhoto} alt="" />
            </div>
            <div class="about-text">
                <h2>Sobre nossa Empresa</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit error qui nostrum, porro laborum
                    commodi eius blanditiis sint tempora vero libero. Iure nostrum dolorum quibusdam rem quidem nemo
                    doloribus culpa.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias doloribus, quos ullam cumque accusamus
                    consectetur soluta, temporibus incidunt adipisci culpa corrupti nulla quidem impedit eaque, architecto
                    velit explicabo nesciunt.</p>
                <a href="#home" class="btn">Saiba Mais</a>
            </div>
        </section>
    )
}
