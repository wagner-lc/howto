/* Página individual do Git */
import conteudoGit from '../content/git.html?raw'
import HowToMenu from '../components/HowToMenu'
import itensGit from '../data/itensGit'

function GitPage() {
    return (
        <>
            <HowToMenu 
                titulo="🐈 GitHub/git"
                subtitulo="Versionamento"
                itens={itensGit} 
            />
            <div
                dangerouslySetInnerHTML={{ __html: conteudoGit }}
            />
        </>
        
    )
}

export default GitPage