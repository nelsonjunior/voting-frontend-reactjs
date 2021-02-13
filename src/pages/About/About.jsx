import React from "react";
import { makeStyles, Grid, CssBaseline, Typography, Card, CardContent, ListItem, List, ListItemText, ListItemIcon, Divider } from "@material-ui/core";
import NavBar from "../../shared/components/NavBar";
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  grid: {
    width: 1100,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
      flexDirection: "column",
      alignItens: "center"
    },
  },
  spacingTitle: {
    marginTop: theme.spacing(1),
  },
  spacingDivider: {
    marginTop: theme.spacing(3),
  }
}));

function generateItemList(list) {
  return list.map((value) =>
    <ListItem key={value}>
      <ListItemIcon>
        <FeaturedPlayListIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText primary={value} />
    </ListItem>
  );
}


export default function About() {
  const classes = useStyles();
  const listFeatures = ["Use of queued process to record vote", "Modern and responsive frontend", "Use of microservices for the backend"];
  const listStackReact = ["[ReactJS] - HTML enhanced for web apps!", "[Chartkick] - beautiful JavaScript charts", "[Material-UI] - React components with Material Design"];


  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar currentPath="/about" />
      <Grid container
        justify="center">
        <Card className={classes.grid}>
          <CardContent>
            <Grid container alignContent="flex-start" direction="column" >
            
                <Typography variant="h5">Voting App</Typography>
                <Typography className={classes.spacingTitle} variant="body1">This project is intended to study stack development of web applications with different backend and frontend.</Typography>
                <Typography className={classes.spacingTitle} variant="body1">Project build by Nelson.</Typography>
              
                <Divider variant="middle" className={classes.spacingDivider}/>
                <Typography  className={classes.spacingTitle} variant="h6">Features</Typography>
                <Typography className={classes.spacingTitle} variant="body1">You can also:</Typography>
                <List dense>
                  {generateItemList(listFeatures)}
                </List>
                <Typography  className={classes.spacingTitle} variant="h6">TechFrontend</Typography>
                <Typography className={classes.spacingTitle} variant="body1">VotingApp uses a number of open source projects to work properly</Typography>
                <Typography  className={classes.spacingTitle} variant="h6">Stack React</Typography>
                <Typography className={classes.spacingTitle} variant="body1">You can also:</Typography>
                <List dense>
                  {generateItemList(listStackReact)}
                </List>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
