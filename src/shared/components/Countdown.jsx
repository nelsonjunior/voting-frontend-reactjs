import React from "react";
import { Grid, withStyles, Typography } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    width: 150,
  },
});

class Countdown extends React.Component {
  render() {
    const { classes } = this.props;
    // const { data } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid
            item
            xs={3}
            container
            direction="column"
            alignItems={"center"}
            alignItems={"center"}
          >
            <Typography variant="h5">370</Typography>
            <Typography variant="caption">days</Typography>
          </Grid>
          <Grid item xs={3} container direction="column" alignItems={"center"}>
            <Typography variant="h5">20</Typography>
            <Typography variant="caption">hours</Typography>
          </Grid>
          <Grid item xs={3} container direction="column" alignItems={"center"}>
            <Typography variant="h5">19</Typography>
            <Typography variant="caption">mins</Typography>
          </Grid>
          <Grid item xs={3} container direction="column" alignItems={"center"}>
            <Typography variant="h5">50</Typography>
            <Typography variant="caption">seconds</Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Countdown);
