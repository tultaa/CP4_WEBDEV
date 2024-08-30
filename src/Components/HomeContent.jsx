import './Home.css'
import React from 'react';

//Cards:

//Numero
const num1 = "01"
const num2 = "02"
const num3 = "03"
const num4 = "04"

//Titulo
const social1 = "Youtube"
const social2 = "Tiktok"
const social3 = "Facebook"
const social4 = "Instagram"

//texto
const paragrafo1 = "Crie conteúdo cativante e conquiste sua audiência no maior palco digital do mundo."
const paragrafo2 = "Destaque-se com vídeos curtos e criativos na plataforma que está redefinindo o entretenimento global."
const paragrafo3 = "Engaje sua audiência na rede social mais popular do mundo com vídeos envolventes."
const paragrafo4 = "Transforme sua visão em realidade visual com Reels, Stories e posts no feed que capturam a atenção."

//cor
const cor1 = '#F1C2B0'
const cor2 = '#F9EB98'
const cor3 = '#C0D9DD'
const cor4 = '#6975E8'




function HomeContent(props) {
    return ( 
        

    <div class="container">
        
        <div class="hero">
            <div class="hero-text">
                <h1 class="titulo">Crie seus vídeos<br></br> online</h1>
                <p>Transforme suas ideias em filmes<br></br> memoráveis onde a criatividade<br></br> encontra a simplicidade.</p>
                <a href="#" class="cta-button">Começar agora!</a>
            </div>
            <div class="hero-image">
            <img src="src/Components/img/heroimage.png" alt="Criação de vídeo"></img>
            </div>
        </div>
        
        <div class="cards">
            <div class="card card-01" background-color={cor1}>
                <div class="card-icon">
                    <img src="src/Components/img/yt.png" alt="YT ICON"></img>
                </div>
                <h1 class="tituloCard">{num1}</h1>
                <h3>{social1}</h3>
                <p class="textoCard">{paragrafo1}</p>
            </div>

            <div class="card card-02" background-color={cor2}>
                <div class="card-icon">
                    <img src="src/Components/img/tiktok.png" alt="TIKTOK ICON"></img>
                </div>
                <h1 class="tituloCard">{num2}</h1>
                <h3>{social2}</h3>
                <p class="textoCard">{paragrafo2}</p>
            </div>

            <div class="card card-03" background-color={cor3}>
                <div class="card-icon">
                    <img src="src/Components/img/fb.png" alt="FACEBOOK ICON"></img>
                </div>
                <h1 class="tituloCard">{num3}</h1>
                <h3>{social3}</h3>
                <p class="textoCard">{paragrafo3}</p>
            </div>

            <div class="card card-04" background-color={cor4}>
                <div class="card-icon">
                    <img src="src/Components/img/ig.png" alt="INSTAGRAM ICON"></img>
                </div>
                <h1 class="tituloCard">{num4}</h1>
                <h3>{social4}</h3>
                <p class="textoCard">{paragrafo4}</p>
            </div>
        </div>
    </div>
     );
}

export default HomeContent;