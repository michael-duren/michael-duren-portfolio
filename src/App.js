import { Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Navigation from './routes/navigation/navigation.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
