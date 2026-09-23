/* Página individual do Javascript  */
import conteudoJavascript from '../content/js.html?raw'
import HowToMenu from '../components/HowToMenu'
import itensJavascript from '../data/itensJavascript'

function JavascriptPage() {

    return (
        <>
            <HowToMenu 
                titulo="⚡ JavaScript"
                subtitulo="Guia rápido para consultar e relembrar JavaScript,
                desde os fundamentos até a comunicação com PHP."
                itens={itensJavascript}
            />
            <div
                dangerouslySetInnerHTML={{ __html: conteudoJavascript }}
            />
        </>
        
    )
}

export default JavascriptPage