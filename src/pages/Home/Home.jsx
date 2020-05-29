import React from "react";
import { makeStyles, Grid, CssBaseline, Typography } from "@material-ui/core";
import NavBar from "../../shared/components/NavBar";
import VoteCard from "./components/VoteCard";
import VoteCardResume from "./components/VoteCardResume";
import Data from "../../shared/utils/Data";


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


export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar currentPath="Teste" />
      <div className={classes.root}>
        <Grid container justify="center" >
          <Grid
            container
            spacing={4}
            justify="flex-start"
            className={classes.grid} >
            
            <VoteCard />

            <Typography className={classes.spacingTitle} variant="h5">LATEST POLLS</Typography>

            <Grid
               className={classes.contentLatestPoll} 
               container spacing={4}
               alignContent={"space-between"}>
              <Grid item xs={4}>
                <VoteCardResume data={Data.poll1} />
              </Grid>
              <Grid item xs={4}>
                <VoteCardResume data={Data.poll2} />
              </Grid>
              <Grid item xs={4}>
                <VoteCardResume data={Data.poll3} />
              </Grid>
            </Grid>


          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
