import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TimerUtil from "../../../shared/utils/TimerUtil";
import { Grid, Button, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Countdown from "../../../shared/components/Countdown";
import VoteItemCard from "./VoteItemCard";
import Data from "../../../shared/utils/Data";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 1100,
    [theme.breakpoints.down("sm")]: {
      width: 450,
    }
  },
  details: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  detailsContent: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  cover: {
    width: 350,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  content: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  countdown: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function VoteCard(props) {
  const classes = useStyles();
  const [currentPoll, setCurrentPoll] = useState(null);

  function generateVoteItem(element) {
    return currentPoll.options.map((value) =>
      React.cloneElement(element, {
        key: value.title,
        titleItemVote: value.title,
        imgItemVote: value.coverImage,
        selected: value.selected,
      })
    );
  }

  function handleLoadCurrentPoll() {

    setCurrentPoll(Data.data);
  }

  useEffect(() => {
    // Especifique como limpar depois desse efeito:
    return function cleanup() {};
  });
  if (currentPoll === null) {
    if(props.id){
      setCurrentPoll(Data.mapPoll[props.id])
      return;
    }

    TimerUtil.sleep(500).then(() => {
      handleLoadCurrentPoll();
    });
    return "Loading...";
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={currentPoll.coverImage}
        title="Live from space album cover"
      />
      <CardContent className={classes.details}>
        <Grid
          container
          className={classes.details}
          alignContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Grid item xs={9}>
            <Typography variant="h5">{currentPoll.title}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {currentPoll.description}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.countdown}>
            <Typography variant="subtitle2" align={"right"}>
              Countdown
            </Typography>
            <Countdown timeTillDate={currentPoll.expirationDate} timeFormat="MM-DD-YYYY h:mm:ss" />
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction={"row"}
            className={classes.content}
          >
            <Grid item xs={10} container>
              {generateVoteItem(<VoteItemCard />)}
            </Grid>
            <Grid
              item
              xs
              container
              direction={"column"}
              alignItems={"flex-end"}
              justify={"flex-end"}
            >
              <Box paddingBottom={1}>
                <Typography variant="subtitle2">
                  {currentPoll.countVotes} votes
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                startIcon={<SendIcon />}
              >
                Vote
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
