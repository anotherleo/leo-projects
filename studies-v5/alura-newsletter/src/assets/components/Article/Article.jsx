import React from 'react'

export const Article = ({ title, text, tags, image, alt }) => {
	return (
		<div className='p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-md flex flex-col items-center'>
			<h3 className='text-xl text-alura-200 dark:text-gray-200 font-bold text-center mb-2'>{title}</h3>
			<div className='w-full flex justify-end gap-3'>
				{
					tags.map((tag, index) => {
						return (
							<span key={index} className='mb-2 bg-alura-100 dark:bg-dark-100 px-3 py-1 rounded-full font-bold text-gray-200 dark:text-gray-400 text-xs uppercase'>{tag}</span>
						)
					})
				}
			</div>
			<div className='grid gap-1'>
				{
					text.map((content, index) => {
						return (
							<p key={index} className='text-alura-200 dark:text-gray-400'>{content}</p>
						)
					})
				}
			</div>
			{ image && <img src={image} alt={alt} className='m-2' /> }
		</div>
	)
}
