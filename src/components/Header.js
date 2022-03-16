import React from "react";
import Alfred from "./Alfred.png";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBarSpacer: theme.mixins.toolbar
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>          
          <Typography variant="body1" color="inherit" className={classes.flex}>
            Alfred
          </Typography>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <Avatar alt="Alfred" src={Alfred} />
          </IconButton>
        </Toolbar>
      </AppBar>      
      <div className={classes.appBarSpacer}></div>
    </div>
  );
}
