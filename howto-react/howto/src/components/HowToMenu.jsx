function HowToMenu({ titulo, subtitulo, itens }) {

    return (
        <section className="howto-menu">

            <h1>{titulo}</h1>

            <p className="howto-subtitulo">
                {subtitulo}
            </p>

            <div className="howto-grid">

                {itens.map((item) => (
                    <a
                        key={item.link}
                        href={item.link}
                        className="howto-card"
                    >
                        <span className="menu-icon">{item.icone}</span>

                        <strong>{item.titulo}</strong>

                        <small>{item.descricao}</small>
                    </a>
                ))}

            </div>

        </section>
    )
}

export default HowToMenu