import { Grid, Typography } from "@material-ui/core";
import React from "react";
import moment from "moment";
import { Skeleton } from "@material-ui/lab";

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
      const distance = d.asMilliseconds();

      if (distance < 0) {
        clearInterval(this.interval);
        return;
      }

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

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

    if (seconds === 0) {
      return (
        <React.Fragment>
          <Grid container alignItems={"center"} justify={"flex-end"}>
            <Typography variant="h6">EXPIRED</Typography>
          </Grid>
        </React.Fragment>
      );
    }

    if (!seconds) {
      return (<Skeleton height={50} />);
    }

    return (
      <React.Fragment>
        <Grid container spacing={1}>
          <Grid item xs={3} container direction="column" alignItems={"center"}>
            <Typography variant="h6">{days}</Typography>
            <Typography variant="caption">days</Typography>
          </Grid>
          <Grid item xs={3} container direction="column" alignItems={"center"}>
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
      </React.Fragment >
    );
  }
}

export default Countdown;
