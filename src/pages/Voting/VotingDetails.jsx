import React from "react";
import {
  makeStyles,
  Grid,
  CssBaseline,
  Typography,
  Breadcrumbs,
} from "@material-ui/core";
import NavBar from "../../shared/components/NavBar";
import VoteCard from "../Home/components/VoteCard";
import Data from "../../shared/utils/Data";
import { Link } from "react-router-dom";
import { LineChart, PieChart } from 'react-chartkick';
import 'chart.js';

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
      alignItens: "center",
    },
  },
  contentLatestPoll: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  spacingBreadcrumbs: {
    marginBottom: theme.spacing(2),
  },
  spacingTitle: {
    marginTop: theme.spacing(3),
  },
}));

export default function VotingDetails(props) {

  const currentPoll = Data.mapPoll[props.match.params.id];

  const classes = useStyles();

  const data = [
    {"name":"More of the same", "data": {"2017-01-01": 3, "2017-01-02": 4, "2017-01-03": 6, "2017-01-04": 3, "2017-01-05": 14, "2017-01-06": 9}},
    {"name":"Very Good", "data": {"2017-01-01": 5, "2017-01-02": 3, "2017-01-03": 12, "2017-01-04": 5, "2017-01-05": 10, "2017-01-06": 5}},
    {"name":"Good", "data": {"2017-01-01": 15, "2017-01-02": 4, "2017-01-03": 4, "2017-01-04": 7, "2017-01-05": 6, "2017-01-06": 5}},
    {"name":"Bad", "data": {"2017-01-01": 2, "2017-01-02": 13, "2017-01-03": 6, "2017-01-04": 2, "2017-01-05": 7, "2017-01-06": 8}}
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar currentPath="Teste2" />
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid
            container
            spacing={4}
            justify="flex-start"
            className={classes.grid}
          >
            <Breadcrumbs className={classes.spacingBreadcrumbs} aria-label="breadcrumb">
              <Link color="inherit" to="/" >
                Home
              </Link>
              <Link color="inherit" 
                to="/details"
                aria-current="page" >
                {currentPoll.title}
              </Link>
            </Breadcrumbs>

            <VoteCard id={props.match.params.id} />

            <Typography className={classes.spacingTitle} variant="h5">
              GRAPHICS RESULT
            </Typography>
            <Grid container justify="space-evenly">
              <Grid item xs={8}>
                <LineChart data={data} legend="bottom"/>
              </Grid>
              <Grid item xs={4}>
                 <PieChart legend={false} data={[["More of the same", 35], ["Very Good", 23], ["Good", 17], ["Bad", 25]]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
