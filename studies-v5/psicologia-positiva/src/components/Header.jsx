import styled from 'styled-components'

export const StyledHeader = styled.header`
	padding-top: 60px;

	h1 {
		margin-bottom: 32px;
		font-size: 32px;
	}

	p {
		margin-bottom: 16px;
	}

	@media screen and (min-width: 768px) {
		padding-top: 100px;

		h1 {
			font-size: 48px;
		}
	}
`