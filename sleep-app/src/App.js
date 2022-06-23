import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Registration from './components/registration';
import Login from './components/login';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './components/home';

const theme = createTheme({
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ height: '100%' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
