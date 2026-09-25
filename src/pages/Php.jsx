/* Página individual do PHP */
import conteudoPhp from '../content/php.html?raw'
import HowToMenu from '../components/HowToMenu'
import itensPhp from '../data/itensPhp'

function PhpPage() {
    return (
        <>
            <HowToMenu 
                titulo="🐘 PHP"
                subtitulo="Backend, formulários, sessões e banco."
                itens={itensPhp} 
            />
            <div
                dangerouslySetInnerHTML={{ __html: conteudoPhp }}
            />
        </>
        
    )
}

export default PhpPage