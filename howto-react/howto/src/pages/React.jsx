import conteudoReact from '../content/react.html?raw'
import HowToMenu from '../components/HowToMenu'
import itensReact from '../data/itensReact'

function ReactPage() {
    return (
        <>
            <HowToMenu itens={itensReact} />
            <div
                dangerouslySetInnerHTML={{ __html: conteudoReact }}
            />
        </>
        
    )
}

export default ReactPage