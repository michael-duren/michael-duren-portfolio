import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';
import Music from './routes/music/music.component';
import Navigation from './routes/navigation/navigation.component';
import LightTheme from './components/themes/light';
import DarkTheme from './components/themes/dark';
import { GlobalStyles } from './GlobalStyles';

const App = () => {
  const [theme, setTheme] = useState(DarkTheme);

  // if (!mountedComponent) return <div />;
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === 'light' ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
