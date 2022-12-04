import React from 'react'
import styles from './Menu.module.scss'
import homeIcon from '../../assets/icons/home-ativo.png'
import likesIcon from '../../assets/icons/mais-curtidas-inativo.png'
import seenIcon from '../../assets/icons/mais-vistas-inativo.png'
import newsIcon from '../../assets/icons/novas-inativo.png'
import surpriseIcon from '../../assets/icons/surpreenda-me-inativo.png'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <img src={homeIcon} alt="início" />
          <a href="/">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={likesIcon} alt="" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={seenIcon} alt="" />
          <a href="/">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={newsIcon} alt="" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpriseIcon} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}
