/* Página individual do SQL */
import conteudoSql from '../content/sql.html?raw'
import HowToMenu from '../components/HowToMenu'
import itensSql from '../data/itensSql'

function SqlPage() {
    return (
        <>
            <HowToMenu 
                titulo="🗄️ SQL"
                subtitulo="Banco de dados, consultas e alterações."
                itens={itensSql} 
            />
            <div
                dangerouslySetInnerHTML={{ __html: conteudoSql }}
            />
        </>
        
    )
}

export default SqlPage