import React from 'react'
import './styles.css'
import deliveryPhoto from '../../assets/delivery.png'

export const Delivery = () => {
    return (
        <div>
            <section class="delivery" id="delivery">
                <div class="heading">
                    <span>Peça Agora</span>
                    <h1>Pedir com Uber Eats</h1>
                </div>
                <div class="container">
                    <div class="delivery-img">
                        <img src={deliveryPhoto} alt="" />
                    </div>
                    <div class="delivery-text">
                        <h2>Hoje Você Merece Entrega</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit error qui nostrum, porro laborum
                            commodi eius blanditiis sint tempora vero libero. Iure nostrum dolorum quibusdam rem quidem nemo
                            doloribus culpa.</p>
                        <a href="#home" class="btn">Peça Agora</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
