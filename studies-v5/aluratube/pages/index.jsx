import config from '../aluratube-config.json'
import styled from 'styled-components'
import React from 'react'
import Header from '../src/components/Header'


export default function Home() {
  return (
    <>
      <Header config={config} />
    </>
  )
}
