import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header class="topo">

        <div class="logo">
            <Link to="/">
                <span>HoW</span>
                <strong>2!</strong>
            </Link>
        </div>

        <p>
            Meu manual pessoal de programação
        </p>

    </header>
  )
}

export default Header
