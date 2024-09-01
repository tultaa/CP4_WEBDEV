import Card from './Card';
import './Home.css'
import React from 'react';

function HomeContent(props) {

    const cardsocials = [
        {
          titulo: "01",
          social: "Youtube",
          texto: "Crie conteúdo cativante e conquiste sua audiência no maior palco digital do mundo.",
          color: "#F1C2B0",
          imagemIcone: "/src/Components/img/yt.png"
        },
        {
          titulo: "02",
          social: "Tiktok",
          texto: "Destaque-se com vídeos curtos e criativos na plataforma que está redefinindo o entretenimento global.",
          color: "#F9EB98",
          imagemIcone: "/src/Components/img/tiktok.png"
        },
        {
          titulo: "03",
          social: "Facebook",
          texto: "Engaje sua audiência na rede social mais popular do mundo com vídeos envolventes.",
          color: "#C0D9DD",
          imagemIcone: "/src/Components/img/fb.png"
        },
        {
            titulo: "04",
            social: "Instagram",
            texto: "Transforme sua visão em realidade visual com Reels, Stories e posts no feed que capturam a atenção.",
            color: "#6975E8",
            imagemIcone: "/src/Components/img/ig.png"
        }
      ]


    return ( 
        

    <div class="container">
        
        <div class="hero">
            <div class="hero-text">
                <h1 class="titulo">Crie seus vídeos<br></br> online</h1>
                <p>Transforme suas ideias em filmes<br></br> memoráveis onde a criatividade<br></br> encontra a simplicidade.</p>
                <a href="#" class="cta-button">Começar agora!</a>
            </div>
            <div class="hero-image">
            <img src="/src/Components/img/heroimage.png" alt="Criação de vídeo"></img>
            </div>
        </div>
        
        <div class="cards">
                <Card dados={cardsocials}/>
        </div>
    </div>
     );
}

export default HomeContent;