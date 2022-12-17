import React from 'react'
import { InstagramLogo } from 'phosphor-react'
import styles from './Footer.module.scss'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<p>
					<span>Leo Thomas Monteiro &copy; 2022</span>
					<a href="https://www.instagram.com/thomasleo.js/">
						<InstagramLogo size={20} weight="light" />
						@thomasleo.js
					</a>
				</p>
			</div>
		</footer>
	)
}
