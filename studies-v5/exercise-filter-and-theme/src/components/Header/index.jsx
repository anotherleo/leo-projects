import React from 'react'
import styles from './Header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={`container ${styles.wrapper}`}>
				<div>

				</div>
				<div className={styles.title}>
					<p>thomasleo.js | WEB DEV</p>
					<h1>Exercício de Map</h1>
				</div>
			</div>
		</header>
	)
}
