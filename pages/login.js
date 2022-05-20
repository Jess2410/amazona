import {
    List,
    ListItem,
    Typography,
    TextField,
    Button
  } from '@material-ui/core';
  import NextLink from 'next/link';
  import React from 'react';
  import Layout from '../components/Layout';
  import useStyles from '../utils/styles';
  import { Link as MUILink } from '@material-ui/core';
  
  export default function Login() {
    const classes = useStyles();
    return (
      <Layout title="Login">
        <form className={classes.form}>
          <Typography component="h1" variant="h1">
            Login
          </Typography>
          <List>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                inputProps={{ type: 'email' }}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Password"
                inputProps={{ type: 'password' }}
              ></TextField>
            </ListItem>
            <ListItem>
              <Button variant="contained" type="submit" fullWidth color="primary">
                Login
              </Button>
            </ListItem>
            <ListItem>
              <NextLink href="/register" passHref>
                <MUILink>Register</MUILink>
              </NextLink>
            </ListItem>
          </List>
        </form>
      </Layout>
    );
  }
