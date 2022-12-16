import React from 'react'
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import { Icone } from '../Components/UI'
import styled from 'styled-components'

const StyledIcone = styled(Icone)`
  filter: ${({ theme }) => theme.image};
`

export default (type) => {
  const Images = {
    Restaurante: <StyledIcone src={alimentacao} alt="Restaurante" />,
    Utilidades: <StyledIcone src={utilidades} alt="Utilidades" />,
    Saude: <StyledIcone src={saude} alt="Saude" />,
    Transporte: <StyledIcone src={transporte} alt="Transporte" />,
    default: <StyledIcone src={outros} alt="Outros" />,
  }

  return Images[type] || Images.default;
}
