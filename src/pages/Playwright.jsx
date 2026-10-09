/* Página individual do Playwright */
import conteudoPlaywright from '../content/playwright.html?raw'
import HowToMenu from '../components/HowToMenu'
import itensPlaywright from '../data/itensPlaywright'

function PlaywrightPage() {
    return (
        <>
            <HowToMenu 
                titulo="🎭 Playwright"
                subtitulo="Testes automatizados."
                itens={itensPlaywright} 
            />
            <div
                dangerouslySetInnerHTML={{ __html: conteudoPlaywright }}
            />
        </>
        
    )
}

export default PlaywrightPage