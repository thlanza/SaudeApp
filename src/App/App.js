import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu'
import Calorias from '../pages/Calorias/Calorias';
import Listagem from '../pages/Calorias/Listagem';
import { useDispatch, useSelector } from 'react-redux'  
import { fetchListas, listasSelector } from '../slices/listas/listasSlice'	


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    },
    background: {
      default: '#f4f5fd'
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  shape: {
    borderRadius: '12px'
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '250px',
    width: '100%'
  }
})


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchListas());
  },[dispatch])

  const classes = useStyles();

  return (
    <Router>
    <ThemeProvider theme={theme} >
    <SideMenu />
    <div className={classes.appMain}>
        <Header />
        <Route exact path="/">
         <Calorias />
        </Route>
        <Route path="/listagem">
         <Listagem />
        </Route>
    </div>
    <CssBaseline />
    </ThemeProvider>
    </Router>
 
  );
}

export default App;
