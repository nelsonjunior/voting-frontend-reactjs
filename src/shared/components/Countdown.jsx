import { Grid, Typography } from "@material-ui/core";
import React from "react";

class Countdown extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Grid container spacing={1}>
            <Grid
              item
              xs={3}
              container
              direction="column"
              alignItems={"center"}
            >
              <Typography variant="h6">370</Typography>
              <Typography variant="caption">days</Typography>
            </Grid>
            <Grid item xs={3} container direction="column" alignItems={"center"}>
              <Typography variant="h6">20</Typography>
              <Typography variant="caption">hours</Typography>
            </Grid>
            <Grid item xs={3} container direction="column" alignItems={"center"}>
              <Typography variant="h6">19</Typography>
              <Typography variant="caption">mins</Typography>
            </Grid>
            <Grid item xs={3} container direction="column" alignItems={"center"}>
              <Typography variant="h6">50</Typography>
              <Typography variant="caption">seconds</Typography>
            </Grid>
          </Grid>
        </React.Fragment>
    );
  }
}

export default Countdown;
