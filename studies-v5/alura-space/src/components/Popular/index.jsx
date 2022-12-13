import React from 'react'
import photosPopular from './popular.json'
import styles from './Popular.module.scss'

export default function Popular() {
	return (
		<aside className={styles.populares}>
			<h2>Populares</h2>
			<ul className={styles.populares__imagens}>
				{photosPopular.map((photoPopular) => {
					return <li key={photoPopular.id}>
						<img src={photoPopular.path} alt={photoPopular.alt} />
					</li>
				})}
			</ul>
			<button>Ver mais fotos</button>
		</aside>
	)
}
