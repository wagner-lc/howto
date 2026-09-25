import { useState, useEffect } from 'react'

function ScrollToTop() {

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
            ↑
        </button>
    )

}

export default ScrollToTop