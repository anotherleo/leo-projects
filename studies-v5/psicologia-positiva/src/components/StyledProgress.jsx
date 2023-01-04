import styled from 'styled-components'

export const StyledProgress = styled.progress`
	-webkit-appearance: none;
	appearance: none;
  width: 80%;
  height: 12px;

	&::-webkit-progress-bar {
		background-color: #eee;
		border-radius: 15px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
	}
	&::-webkit-progress-value {
		background-color: black;
		border-radius: 15px;
	}
`;
