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
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
