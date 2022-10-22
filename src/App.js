import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme, darkTheme } from './Themes';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Navigation from './routes/navigation/navigation.component';
import { useLightMode } from './components/use-light-mode/useLightMode';

const App = () => {
  const theme = useContext(ThemeContext);

  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  // if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
