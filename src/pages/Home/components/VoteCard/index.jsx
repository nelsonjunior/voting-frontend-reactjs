import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TimerUtil from "../../../../shared/utils/TimerUtil";
import { Grid } from "@material-ui/core";
import Countdown from "../../../../shared/components/Countdown";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: 1100,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    flex: 1
  },
  cover: {
    width: 250,
    height: 250,
  },
});

export default function VoteCard() {
  const classes = useStyles();
  const [currentPoll, setCurrentPoll] = useState(null);

  function handleLoadCurrentPoll() {
    const data = {
      title: "The best framework for Backend web app",
      description:
        "Select the best framework to develop the backend of a modern web application",
      expirationDate: new Date(),
      countVotes: 10,
      createdAt: new Date(),
      coverImage: "",
      options: [
        {
          title: "Op 10",
          coverImage: "",
        },
      ],
    };

    setCurrentPoll(data);
  }

  useEffect(() => {
    // Especifique como limpar depois desse efeito:
    return function cleanup() {};
  });
  if (currentPoll === null) {
    TimerUtil.sleep(500).then(() => {
      handleLoadCurrentPoll();
    });
    return "Loading...";
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="/assets/images/default-placeholder-1-2.png"
        title="Live from space album cover"
      />
      <CardContent
        className={classes.details}
      >
        <Grid
          container
          alignContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Grid item xs={9}>
            <Typography component="h5" variant="h5">
              {currentPoll.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {currentPoll.description}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle2" align={'right'}>
                Countdown
            </Typography>
            <Countdown />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
