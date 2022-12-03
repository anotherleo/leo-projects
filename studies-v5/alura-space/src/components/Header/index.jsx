import Logo from './Logo.svg'
import SearchIcon from './Search.svg'
import React from 'react'

export default function Header() {
  return (
    <header>
        <h1>
            <img src={Logo} alt="Alura Space" />
        </h1>
        <div>
            <input placeholder="O que você procura?" />
            <img src={SearchIcon} alt="Ícone de Busca" />
        </div>
    </header>
  )
}
