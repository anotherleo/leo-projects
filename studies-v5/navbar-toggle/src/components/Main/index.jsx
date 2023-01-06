import React from 'react'
import '../../styles/bootstrap-grid.css'
import styles from './Main.module.scss'

export default function Main() {
	return (
		<main className={`container ${styles.main}`}>
			<h1 className={styles.title}>Exercício de Sidebar</h1>
			<p>Desenvolvido com React.</p>
			<p>Método: usando hook useState.</p>
			<p>Extras: SASS, CSS Modules, Bootstrap.</p>
			<p>Imagem de Freepik, ícones de Phosphor Icons.</p>
		</main>
	)
}
