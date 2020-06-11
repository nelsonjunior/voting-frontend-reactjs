import React from "react";
import { makeStyles, Grid, CssBaseline, Typography } from "@material-ui/core";
import NavBar from "../../shared/components/NavBar";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    width: 1100,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
      flexDirection: "column",
      alignItens: "center"
    },
  },
  contentLatestPoll:{
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    },
  },
  spacingTitle: {
    marginTop: theme.spacing(3),
  }
}));


export default function DashBoard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar currentPath="/dashboard" />
      <div className={classes.root}>
        <Grid container justify="center" >
          <Grid
            container
            spacing={4}
            justify="flex-start"
            className={classes.grid} >
            
            <Typography className={classes.spacingTitle} variant="h5">DashBoard</Typography>

          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
