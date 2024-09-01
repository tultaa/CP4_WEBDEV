import './Home.css'
import React from 'react';

function Contato() {
    return ( 
<div class="container">
        <div class="hero">
            <div class="hero-text">
                <h1 class="titulo">Dúvidas e<br></br> suporte, entre<br></br>em contato:</h1>
                <div class="social-icons">
                <img src="/ttcontato.png" alt="twittericon"></img>
                <img src="/igcontato.png" alt="instagramicon"></img>
                <img src="/disccontato.png" alt="discordicon"></img>
                </div>
            </div>
            <div class="divider"></div>
            <div class="forms">
                <form>
                    <h2>Nome:</h2>
                    <input type="text" placeholder="" required></input>
                    <h2>E-mail:</h2>
                    <input type="email" placeholder="" required></input>
                    <h2>Mensagem:</h2>
                    <textarea placeholder="" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
</div>
     );
}

export default Contato;