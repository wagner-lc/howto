
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function BackToHome() {

    const [visivel, setVisivel] = useState(false)

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

    if (!visivel) {
        return null
    }

    return (
        <Link
            to="/"
            className="back-home"
            aria-label="Voltar para a página inicial"
            title="Voltar para a Home"
        >
            ‹
        </Link>
    )

}

export default BackToHome
