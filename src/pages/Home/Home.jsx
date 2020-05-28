import React from "react";
import { makeStyles, Grid, CssBaseline, Typography } from "@material-ui/core";
import NavBar from "../../shared/components/NavBar";
import VoteCard from "./components/VoteCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    width: 1100,
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
    },
  },
  container:{
    width: 1100,
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar currentPath="Teste" />
      <div className={classes.root}>
        <Grid container justify="center" >
          <Grid
            spacing={4}
            alignItems="center"
            justify="center"
            container
            className={classes.grid}
          >
            <VoteCard />
            <Grid item xs container >

              <Typography variant="h5">LATEST POLLS</Typography>
            </Grid>

          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
