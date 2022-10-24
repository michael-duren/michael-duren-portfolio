import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	body {
		background: ${(p) => p.theme.bodyBackgroundColor};
    
		color: ${(p) => p.theme.bodyFontColor};
		margin: 0 1rem;
		font-family: 'Inter', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		transition: all 0.50s linear;
		height: 100vh;
	}

	code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: ${(props) => props.theme.bodyFontColor};
}

button {
  border: none;
}
`;
