import React from 'react'
import styles from './Footer.module.scss'
import { FacebookLogo, GithubLogo, InstagramLogo, TwitterLogo } from "phosphor-react"

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.social}>
            <TwitterLogo size={22} weight="fill" color="white" className={styles.icons} />
            <FacebookLogo size={22} weight="fill" color="white" className={styles.icons} />
            <InstagramLogo size={22} weight="fill" color="white" className={styles.icons} />
            <GithubLogo size={22} weight="fill" color="white" className={styles.icons} />
        </div>
        <div className={styles.developer}>
            <p>Leo Thomas Monteiro / Alura. 2022.</p>
        </div>
    </footer>
  )
}
