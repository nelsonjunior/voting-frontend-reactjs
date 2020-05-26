import { Grid, Typography } from "@material-ui/core";
import React from "react";
import moment from "moment";

class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const d = moment.duration(then.diff(now));
      const countdown = moment.utc(d.asMilliseconds());
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    if (!seconds) {
      return null;
    } 

    return (
      <React.Fragment>
        <Grid container spacing={1}>
          <Grid item xs={3} container direction="column" alignItems={"center"}>
            <Typography variant="h6">{days}</Typography>
            <Typography variant="caption">days</Typography>
          </Grid>
          <Grid item xs={3} container dirßection="column" alignItems={"center"}>
            <Typography variant="h6">{hours}</Typography>
            <Typography variant="caption">hours</Typography>
          </Grid>
          <Grid item xs={3} container direction="column" alignItems={"center"}>
            <Typography variant="h6">{minutes}</Typography>
            <Typography variant="caption">mins</Typography>
          </Grid>
          <Grid item xs={3} container direction="column" alignItems={"center"}>
            <Typography variant="h6">{seconds}</Typography>
            <Typography variant="caption">seconds</Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Countdown;
