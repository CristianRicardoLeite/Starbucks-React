import React from 'react'
import './styles.css'
import Coffe1 from '../../assets/shop1.png'
import Coffe2 from '../../assets/shop2.png'
import Coffe3 from '../../assets/shop3.png'

export const TopRated = () => {
    return (
        <section class="shop" id="shop">
            <div class="heading">
                <h1>Cafés Mais Pedidos</h1>
            </div>
            <div class="shop-container">
                <div class="box">
                    <div class="box-img">
                        <img src={Coffe1} alt="Red-Coffee" />
                    </div>
                    <div class="stars">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star-half'></i>
                    </div>
                    <h2>Starbucks Coffee</h2>
                    <span>R$ 10.50</span>
                    <a href="#home" class="btn">Compre Agora</a>
                </div>

                <div class="box">
                    <div class="box-img">
                        <img src={Coffe2} alt="Brown-Coffee" />
                    </div>
                    <div class="stars">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star-half'></i>
                    </div>
                    <h2>Starbucks Coffee</h2>
                    <span>R$ 13.40</span>
                    <a href="#home" class="btn">Compre Agora</a>
                </div>

                <div class="box">
                    <div class="box-img">
                        <img src={Coffe3} alt="Green-Coffee" />
                    </div>
                    <div class="stars">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star-half'></i>
                    </div>
                    <h2>Starbucks Coffee</h2>
                    <span>R$ 12.70</span>
                    <a href="#home" class="btn">Compre Agora</a>
                </div>
            </div>
        </section>
    )
}
