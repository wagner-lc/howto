/* Página individual do Html */
import conteudoHtml from '../content/html.html?raw'
import HowToMenu from '../components/HowToMenu'
import itensHtml from '../data/itensHtml'

function HtmlPage() {
    return (
        <>
            <HowToMenu 
                titulo="🎨 Html"
                subtitulo="Estilos, layouts, cores e responsividade."
                itens={itensHtml} 
            />
            <div
                dangerouslySetInnerHTML={{ __html: conteudoHtml }}
            />
        </>
        
    )
}

export default HtmlPage