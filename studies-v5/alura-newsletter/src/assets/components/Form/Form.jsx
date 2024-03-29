import React from 'react'
import { Input } from '../Input/Input'

export const Form = ({ onSubmit }) => {
	const safeSubmit = event => {
		event.preventDefault()
		event.stopPropagation()
		const name = event.target[0].value
		const email = event.target[1].value
		onSubmit({ name, email })
	}

	return (
		<form onSubmit={safeSubmit} className='h-full flex flex-col items-center justify-center -mt-20 gap-10 mx-5'>
			<Input type="text" required placeholder="Insira seu nome" />
			<Input type="email" required placeholder="Insira seu e-mail" />
			<button type="submit" className='py-1 px-5 w-full max-w-sm bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black font-bold'>Continuar</button>
		</form>
	)
}
