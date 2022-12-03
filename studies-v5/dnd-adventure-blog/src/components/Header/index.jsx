import React from 'react'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.page__header}>
      <div className="container">
        <h1>Aventuras de D&D</h1>
        <p>A jornada de muitos heróis no multiverso</p>
      </div>
    </header>
  )
}
