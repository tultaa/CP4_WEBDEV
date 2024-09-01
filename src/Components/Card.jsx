function Card({ dados }) {

    return (
        <>

        {dados.map((pegaDados) => (
            <div className="card"
                style={
                    {
                        backgroundColor: pegaDados.color
                    }
            }>
                <div class="card-icon">
                    <img src={pegaDados.imagemIcone}></img>
                </div>

                <h1 class="tituloCard">{pegaDados.titulo}</h1>
                <h3>{pegaDados.social}</h3>
                <p class="textoCard">{pegaDados.texto}</p>
            </div>

        ))}

        </>
    );

}
export default Card;