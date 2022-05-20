import React, { useContext } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { AppBar, Container, CssBaseline, ThemeProvider, Toolbar, Typography, Switch, Badge} from '@material-ui/core'
import useStyles from '../utils/styles'
import { Link as MUILink } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { Store } from '../utils/Store'
import Cookies from 'js-cookie'


export default function Layout({children, title, description}) {
    const {state, dispatch} = useContext(Store);
    const {darkMode, cart} = state;
    const theme = createTheme({
        typography:{
            h1: {
                fontSize: '1.6rem',
                fontWeight: '400',
                margin: '1rem 0'
        },
        h2: {
            fontSize: '1.4rem',
            fontWeight: '400',
            margin: '1rem 0'
        }, 
        body1: {
            fontWeight: 'normal',
        },
        },
        form: {
            maxWidth: 800,
            margin: '0 auto',
          },
    palette:{
        type: darkMode ? 'dark':'light',
        primary: {
            main: '#f0c000',
        },
        secondary: {
            main: '#208080',
        },
    }
    
   
    })
    const classes = useStyles()
    const darkModeChangeHandler = () => {
        dispatch({type: darkMode ? 'DARK_MODE_OFF':'DARK_MODE_ON'})
        const newDarkMode = !darkMode;
        Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF')
    }
  return (
    <div>
        <Head>
            <title>{title? `${title} - Next Amazona` :'Next Amazona'}</title>
            {description && <meta name="description" content={description} />}
        </Head>
        <ThemeProvider theme={theme}>
            <CssBaseline />
        <AppBar position="static" className='classes.navbar'>
            <Toolbar>
            {/* <Typography className={classes.brand}>Amazona</Typography> */}
                <NextLink href='/' passHref>  
                    <MUILink>
                        <Typography className={classes.brand}>Amazona</Typography>
                    </MUILink>
                </NextLink>
                <div className={classes.grow}></div> 
                <div>
                    <Switch checked={darkMode} onChange={darkModeChangeHandler} />
                    <NextLink href='/cart' passHref>  
                        <MUILink>  
                            {cart.cartItems.length > 0 ? (
                        <Badge badgeContent={cart.cartItems.length} color='secondary'>Cart</Badge>
                        ) : (
                        'Cart'
                        )}
                        
                        <Typography className={classes.navLinks}>Cart</Typography></MUILink>
                    </NextLink>
                    <NextLink href='/login' passHref>  
                        <MUILink> <Typography className={classes.navLinks}>Login</Typography></MUILink>
                    </NextLink>
                </div> 
            </Toolbar>
        </AppBar>
        <Container className='classes.main'>
            {children}
        </Container>
        <footer>
            <Typography className='classes.footer'>&copy; {new Date().getFullYear()} Amazona</Typography>
        </footer>
        </ThemeProvider>
    </div>
  )
}
