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

:root {
  --background:   linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(3, 3, 40, 1) 11%,
    rgba(169, 240, 255, 1) 100%
  );
  --bg: rgba(244, 244, 244, 0.5);
  --bg-accent: background-color: rgba(0, 0, 0, 0.5);
  --speed: 500ms
  --border-radius: 2rem;
  --nav-size: 60px;
}



ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

button {
  border: none;
}
`;
