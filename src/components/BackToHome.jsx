import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function BackToHome() {

    const [visivel, setVisivel] = useState(false)
    const [gesto, setGesto] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {

        function verificarScroll() {
            setVisivel(window.scrollY > 300)
        }

        window.addEventListener('scroll', verificarScroll)

        return () => {
            window.removeEventListener('scroll', verificarScroll)
        }

    }, [])

    // Detecta o gesto iniciado na borda esquerda
    useEffect(() => {

        let inicioX = null
        let inicioY = 0

        function iniciarToque(event) {

            const toque = event.changedTouches[0]

            if (toque.clientX <= 25) {
                inicioX = toque.clientX
                inicioY = toque.clientY

                setGesto({
                    x: Math.max(28, toque.clientX),
                    y: toque.clientY,
                    pronto: false
                })
            } else {
                inicioX = null
            }

        }

        function moverToque(event) {

            if (inicioX === null) return

            const toque = event.changedTouches[0]
            const distanciaX = toque.clientX - inicioX
            const distanciaY = Math.abs(toque.clientY - inicioY)

            setGesto({
                x: Math.max(28, toque.clientX),
                y: toque.clientY,
                pronto: distanciaX > 80 && distanciaY < 60
            })

        }

        function finalizarToque(event) {

            if (inicioX === null) return

            const toque = event.changedTouches[0]
            const distanciaX = toque.clientX - inicioX
            const distanciaY = Math.abs(toque.clientY - inicioY)

            if (distanciaX > 80 && distanciaY < 60) {
                navigate('/')
            }

            inicioX = null
            setGesto(null)

        }

        function cancelarToque() {
            inicioX = null
            setGesto(null)
        }

        window.addEventListener('touchstart', iniciarToque, { passive: true })
        window.addEventListener('touchmove', moverToque, { passive: true })
        window.addEventListener('touchend', finalizarToque, { passive: true })
        window.addEventListener('touchcancel', cancelarToque)

        return () => {
            window.removeEventListener('touchstart', iniciarToque)
            window.removeEventListener('touchmove', moverToque)
            window.removeEventListener('touchend', finalizarToque)
            window.removeEventListener('touchcancel', cancelarToque)
        }

    }, [navigate])

    return (
        <>
            {visivel && (
                <Link
                    to="/"
                    className="back-home"
                    aria-label="Voltar para a página inicial"
                    title="Voltar para a Home"
                >
                    ‹
                </Link>
            )}

            {gesto && (
                <div
                    className={`gesture-home-indicator ${gesto.pronto ? 'pronto' : ''}`}
                    style={{
                        top: '50%',
                        left: `${Math.min(gesto.x, 100)}px`
                    }}
                    aria-hidden="true"
                >
                    ⌂
                </div>
            )}
        </>
    )

}

export default BackToHome