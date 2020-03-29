import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';

import Home from './modules/home';
import Contact from './modules/contact';
import Games from './modules/games';
import Footer from './modules/footer';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
}));

const NoMatch = () => {
  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        404 Not found.
      </Typography>
    </div>
  );
};

const App = () => {
  const [hasError, setErrors] = useState(false); // eslint-disable-line
  const [data, setData] = useState({});

  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.rawg.io/api/games");
      res
        .json()
        .then(res => setData(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              JavaScript Frameworks Course Assignment
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/">
              <Home data={data} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/game">
              <Games />
            </Route>
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
