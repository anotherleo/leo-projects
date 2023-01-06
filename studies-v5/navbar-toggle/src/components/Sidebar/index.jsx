import { X } from 'phosphor-react'
import React from 'react'
import styles from './Sidebar.module.scss'

export default function Sidebar({ close, logo }) {
  return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar__content}>
				<div onClick={close} className={styles.close}>
					<X size={32} weight='bold' />
				</div>
				<div>
					<img src={logo} alt='logotipo' />
				</div>
				<h2>Exercício de Sidebar</h2>
				<p>Lorem ipsum dolor sit amet consectetur.</p>
			</div>
		</div>
  )
}
