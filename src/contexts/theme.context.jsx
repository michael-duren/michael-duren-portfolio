import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  theme: '',
  setTheme: (theme) => {},
});
