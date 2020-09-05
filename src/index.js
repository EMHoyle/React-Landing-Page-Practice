import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import SideMenu from './components/SideMenu/SideMenu';
import Cards from './components/Cards/Cards';
import Contact from './components/Contact/Contact';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <Title content="Nuestros artículos"/>
      <SideMenu/>
      <Cards/>
      <Contact content="Contáctanos"/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


