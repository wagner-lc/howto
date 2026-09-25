/* Página individual do CSS */
import conteudoCss from '../content/css.html?raw'
import HowToMenu from '../components/HowToMenu'
import itensReact from '../data/itensCss'

function CssPage() {
    return (
        <>
            <HowToMenu 
                titulo="🎨 CSS"
                subtitulo="Estilos, layouts, cores e responsividade."
                itens={itensCss} 
            />
            <div
                dangerouslySetInnerHTML={{ __html: conteudoCss }}
            />
        </>
        
    )
}

export default CssPage