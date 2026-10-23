
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {

    const [visivel, setVisivel] = useState(false)
    const { pathname } = useLocation()

    // 1. Voltar ao topo sempre que mudar de página
    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: 'instant'
        })

    }, [pathname])

    // 2. Verificar a posição da rolagem
    useEffect(() => {

        function verificarScroll() {

            if (window.scrollY > 300) {
                setVisivel(true)
            } else {
                setVisivel(false)
            }

        }

        window.addEventListener('scroll', verificarScroll)

        return () => {
            window.removeEventListener('scroll', verificarScroll)
        }

    }, [])

    // 3. Voltar ao topo ao clicar no botão
    function voltarAoTopo() {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }

    if (!visivel) {
        return null
    }

    return (
        <button
            className="scroll-up"
            onClick={voltarAoTopo}
        >
            ∧
        </button>
    )

}

export default ScrollToTop
