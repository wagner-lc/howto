import React from 'react'

const Header = () => {
  return (
    <header class="topo">

        <div class="logo">
            <a href="index.html">
                <span>HoW</span>
                <strong>to!</strong>
            </a>
        </div>

        <p>
            Meu manual pessoal de programação
        </p>
        <div className='react-version'>
            <p>React version*</p>
        </div>

    </header>
  )
}

export default Header
