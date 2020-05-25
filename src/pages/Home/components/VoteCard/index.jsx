import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TimerUtil from "../../../../shared/utils/TimerUtil";
import { Grid, Button, Box } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Countdown from "../../../../shared/components/Countdown";
import VoteItemCard from "../VoteItemCard";
import Constantes from "../../../../shared/utils/Constantes";

const useStyles = makeStyles((theme) => ({
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
    width: 350,
    height: 250,
  },
  countdown: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }
}));

export default function VoteCard() {
  const classes = useStyles();
  const [currentPoll, setCurrentPoll] = useState(null);

  function generateVoteItem(element) {
    return currentPoll.options.map((value) =>
      React.cloneElement(element, {
        key: value.title,
        titleItemVote: value.title,
        imgItemVote: value.coverImage
      }),
    );
  }

  function handleLoadCurrentPoll() {
    const data = {
      title: "The best framework for Backend web app",
      description:
        "Select the best framework to develop the backend of a modern web application",
      expirationDate: new Date(),
      countVotes: 10,
      createdAt: new Date(),
      coverImage: Constantes.webFrameworks,
      options: [
        {
          title: "NestJS - Node",
          coverImage: "https://docs.nestjs.com/assets/logo-small.svg",
        },
        {
          title: "Buffalo - Go Lang",
          coverImage: "https://www.clipartmax.com/png/small/414-4145925_reflecting-on-the-first-year-of-buffalo-buffalo-rapid-golang-buffalo.png",
        },
        {
          title: "SpringBoot - Java",
          coverImage: "https://gitlab.com/uploads/-/system/project/avatar/10814146/1_O68LbDvD5Dcsnez73M7v4Q.png",
        },
        {
          title: "Flask - Python",
          coverImage: Constantes.flaskIcon,
        },
      ],
    };

    setCurrentPoll(data);
  }

  useEffect(() => {
    // Especifique como limpar depois desse efeito:
    return function cleanup() { };
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
        image={currentPoll.coverImage}
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
            <Typography variant="h5">
              {currentPoll.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {currentPoll.description}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.countdown}>
            <Typography variant="subtitle2" align={'right'}>
              Countdown
            </Typography>
            <Countdown />
          </Grid>
          <Grid item xs={12}
            container
            direction={"row"}>
            <Grid item xs={10} container>
              {
                generateVoteItem(
                  <VoteItemCard />
                )
              }
            {/*   
              <VoteItemCard />
              <VoteItemCard />
              <VoteItemCard /> */}
            </Grid>
            <Grid item xs={2}
              container
              direction={"column"}
              alignItems={"flex-end"}
              justify={"flex-end"}>
              <Box paddingBottom={1}>
                <Typography variant="subtitle2">
                  {currentPoll.countVotes} votes
                </Typography>
              </Box>
              <Button variant="contained"
                color="primary"
                startIcon={<SendIcon />}>
                Vote
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  );
}
