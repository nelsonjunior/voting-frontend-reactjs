import React from "react";
import { makeStyles, Grid, CssBaseline, Typography, Card, CardContent } from "@material-ui/core";
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
  contentLatestPoll: {
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
      <Grid container
        justify="center">
        <Card className={classes.grid}>
          <CardContent>
            <Grid container alignContent="flex-start" direction="column" >

              <Typography variant="h5">DashBoard</Typography>

            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment >
  );
}
