import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
	from{
		transform: rotate(0deg)
	} to{
		transform: rotate(360deg)
	}
`;

export const Spinner = styled.div`
  height: 4rem;
  width: 4rem;
  border: 4px solid ${(props) => props.theme.dropShadowColor};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 1rem auto;
  animation: ${rotation} 1s linear infinite;
`;
