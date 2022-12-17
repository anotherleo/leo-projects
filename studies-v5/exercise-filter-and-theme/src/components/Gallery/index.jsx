import React from 'react'
import gallery from './gallery.json'
import styles from './Card.module.scss'

export default function Gallery() {
	return (
		<section>
			<div className="container">
				<div className="row">
					{gallery.map((photo) => {
						return (
							<div className="col-md-3" key={photo.id}>
								<div className={styles.card}>
									<img src={photo.path} alt={photo.title} />
									<p>Tag: {photo.tag}</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
