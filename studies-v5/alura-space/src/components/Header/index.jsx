import Logo from './Logo.svg'
import SearchIcon from './Search.svg'
import React from 'react'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
        <h1>
            <img src={Logo} alt="Alura Space" />
        </h1>
        <div className={styles.header__container}>
            <input className={styles.header__input} placeholder="O que você procura?" />
            <img src={SearchIcon} alt="Ícone de Busca" />
        </div>
    </header>
  )
}
