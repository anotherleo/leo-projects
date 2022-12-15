import React from 'react';
import { Box, Botao } from '../../Components/UI';
import { extratoLista } from '../../info';
import styled from 'styled-components';
import Items from '../Items';

const BotaoMargin = styled(Botao)`
    margin-top: 25px;
`

export default function Extrato() {
  return (
    <Box>
        {extratoLista.updates.map(({id, type, from, value, date}) => {
            return (
                <Items 
                    key={id}
                    type={type}
                    from={from}
                    value={value}
                    date={date}
                />
            )
        })}
        <BotaoMargin>Ver mais</BotaoMargin>
    </Box>
  )
}
