import React from 'react'
import Lottie from 'react-lottie'
import Animation from '../../assets/computer.json'

export const ComputerAnimation = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: Animation,
	}
	
  return (
    <Lottie options={defaultOptions} width={`50%`}/>
  )
}
