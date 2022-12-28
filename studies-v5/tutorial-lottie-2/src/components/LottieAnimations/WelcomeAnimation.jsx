import React from 'react'
import Lottie from 'react-lottie'
import Animation from '../../assets/welcome.json'

export const WelcomeAnimation = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: Animation,
	}

  return (
    <Lottie options={defaultOptions} width={`50%`}/>
  )
}
