/* Página individual do React (não confundir com a tecnologia React) */
import conteudoReact from '../content/react.html?raw'
import HowToMenu from '../components/HowToMenu'
import itensReact from '../data/itensReact'

function ReactPage() {
    return (
        <>
            <HowToMenu 
                titulo="⚛️ React"
                subtitulo="Guia prático para transformar o HoW to! de HTML/CSS em uma aplicação React."
                itens={itensReact} 
            />
            <div
                dangerouslySetInnerHTML={{ __html: conteudoReact }}
            />
        </>
        
    )
}

export default ReactPage