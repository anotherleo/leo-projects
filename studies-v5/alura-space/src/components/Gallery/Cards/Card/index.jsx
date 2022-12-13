import React from 'react'
import { ArrowsOutSimple, Heart } from 'phosphor-react'

export default function Card({ photo, styles }) {
	return (
		<li key={photo.id} className={styles.gallery__card}>
			<img
				src={photo.image}
				alt={photo.title}
				className={styles.gallery__image}
			/>
			<p className={styles.gallery__description}>
				{photo.title}
			</p>
			<div>
				<p>{photo.credits}</p>
				<span>
					<Heart size={22} weight='light' color='white' />
					<ArrowsOutSimple size={22} weight='light' color='white' />
				</span>
			</div>
		</li>
	)
}
