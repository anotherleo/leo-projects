import { List } from 'phosphor-react'
import React from 'react'
import '../../styles/bootstrap-grid.css'
import Sidebar from '../Sidebar';
import styles from './Header.module.scss'
import logo from './reading.png'

export default function Header() {
	const [sidebar, setSidebar] = React.useState(true);

	return (
		<>
			<div className={styles.header}>
				<div className={`container ${styles.wrapper}`}>
					<div>
						<img src={logo} alt='logotipo' />
					</div>
					<div className={styles.hamburguer} onClick={() => setSidebar(!sidebar)}>
						<List size={40} weight='bold' />
					</div>
				</div>
			</div>

			{
				sidebar && 
				<Sidebar 
					close={() => setSidebar(!sidebar)} 
					logo={logo}
				/>
			}
		</>
	)
}
