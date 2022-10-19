import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
	body {
		background: ${({ theme }) => theme.body};
		color: ${({ theme }) => theme.text};
		margin: 0 1rem;
		font-family: 'Inter', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		transition: all 0.50s linear;
	}
`;
