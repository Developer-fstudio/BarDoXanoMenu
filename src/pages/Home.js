import React from 'react'
import logo from "./logo.png";
import Footer from './Footer';
import { Link } from 'react-router-dom';
import restaurante from "./img/restaurante.jpg";
import Lounge from "./img/lounge.jpg";




function Home() {
    
    return (
        <div>
            <main>
        <section className="menu section">
          <div className="title">
            <Link to={"/"}>
            <img src={logo} alt="logo" href="/Restaurante" className="logo" />
            </Link>
            <h2>Escolha a sua opção:</h2>
            <div className="underline"></div>
          </div>
          <div className="section-center-home">
          <Link to={"/Restaurante"}>
          <article className="menu-item">
            <img src={restaurante} alt="restaurante" className="photo" />
            
            <div className="item-info">
              <header>
                <h4>Restaurante</h4>
              </header>
              <p className="item-text">Espaço Acolhedor onde é servida comida regional e vinho da terra.</p>
            </div>
          </article>
          </Link>
          </div>
          
          <div className="section-center-home">
          <Link to={"/Lounge"}>
          <article className="menu-item">
            <img src={Lounge} alt="lounge" className="photo" />
            
            <div className="item-info">
              <header>
                <h4>Lounge</h4>
              </header>
              <p className="item-text">Espaço Acolhedor onde é servido um refrescante e divinal cocktail enquanto desfruta de uma tabua de queijos.</p>
            </div>
          </article>
          </Link>
          </div>
          

        </section>
      </main>
      <Footer></Footer>

        </div>
        
    )
}

export default Home
