import { Grid, Typography } from "@material-ui/core";
import React from "react";
import moment from "moment";
import TimerUtil from "../utils/TimerUtil";

class Countdown extends React.Component {

  constructor(props) {
    super(props);

    const { timeTillDate, timeFormat } = this.props;
    const then = moment(timeTillDate, timeFormat);
    const now = moment();
    const d = moment.duration(then.diff(now));
    const distanceNow = d.asMilliseconds();
    const { days, hours, minutes, seconds } = TimerUtil.caluleCountdown(distanceNow);

    this.state = {
      runner: true,
      distance: d.asMilliseconds(),
      days,
      hours,
      minutes,
      seconds
    };

  }

  componentDidMount() {

    this.timerID = setInterval(() => {
      let runner = true;
      let distanceNow = this.state.distance;

      distanceNow = distanceNow - 1000;

      if (distanceNow < 0) {
        clearInterval(this.timerID);
        runner = false;
        this.setState({ runner });
        return;
      }

      const { days, hours, minutes, seconds } = TimerUtil.caluleCountdown(distanceNow);

      this.setState({ days, hours, minutes, seconds, runner, distance: distanceNow });

    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    this.setState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  }

  render() {

    const { days, hours, minutes, seconds, runner } = this.state;

    if (!runner) {
      return (
        <React.Fragment>
          <Grid container alignItems={"center"} justify={"flex-end"}>
            <Typography variant="h6">EXPIRED</Typography>
          </Grid>
        </React.Fragment>
      );
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
