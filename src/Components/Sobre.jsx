import './Home.css'
import React from 'react';

function Sobre() {
    return ( 
<div class="container">
        
    <div class="hero">
            <div class="hero-text">
                <h1 class="titulo">Bem-vindo à<br></br> revolução dos<br></br>vídeos!</h1>
                <p>Somos uma startup com o objetivo de facilitar<br></br> a produção de conteúdo em larga escala com<br></br> qualidade profissional, capaz de atingir uma<br></br> audiência de milhões de seguidores</p>
                <a href="#" class="cta-button">Baixe o app</a>
            </div>

        <div class="telas">
           
            <img src="/tela1.png" alt="Criação de vídeo"></img>
            
            
            <img src="/tela2.png" alt="Criação de vídeo"></img>
            
        </div>
    </div>
    <h2 class="TituloPlanos">Planos</h2>
    <div class="plans">
            <div class="plan">
                <div class="plan-content">
                    <h3>Individual</h3>
                    <p>1 usuário</p>
                    <p>10 Vídeos R$15</p>
                </div>
                <a href="#" class="plan-btn">Cadastrar</a>
            </div>
            <div class="plan">
                <div class="plan-content">
                    <h3>Profissional - Times</h3>
                    <p>1-10 Usuários</p>
                    <p>Vídeos Ilimitados R$40</p>
                    <p>+10 Usuários</p>
                    <p>Vídeos Ilimitados R$20</p>
                </div>
                <a href="#" class="plan-btn">Cadastrar</a>
            </div>
            <div class="plan">
                <div class="plan-content">
                    <h3>Corporativo</h3>
                    <img src="/plano.png" alt="Corporate plan icon"></img>
                </div>
                <a href="#" class="plan-btn">Entre Em Contato</a>
            </div>
        </div>
        
</div>
     );
}

export default Sobre;