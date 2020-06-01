import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Avatar, Divider, ButtonBase } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: 350,
        [theme.breakpoints.down("sm")]: {
            width: 450,
        },
    },
    details: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        padding: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            alignItems: "center",
            justifyContent: "center",
        },
    },
    optionsSpace: {
        paddingLeft: theme.spacing(1)
    },
    dividerSpace: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    cover: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    }
}));

export default function VoteCardResume(props) {
    const classes = useStyles();
    const currentPoll = props.data;
    const history = useHistory();


    function handleShowDetails(e) {
        e.preventDefault();
        history.push(`/details/${currentPoll.id}`);
    }

    return (
        <Card className={classes.root}>
            <ButtonBase onClick={handleShowDetails}>
                <CardContent className={classes.details}>
                    <Grid 
                        container
                        spacing={3}
                        alignItems={"flex-start"}
                        direction={"column"} >
                        <Grid container direction={"row"}
                            justify={"space-between"}>
                            <Grid item xs={8} container
                                alignItems={"flex-start"}
                                direction={"column"}>
                                <Typography variant="subtitle2" align={"right"}>
                                    CLOSED | {currentPoll.timeTillDate}
                                </Typography>
                                <Typography variant="h6">{currentPoll.title}</Typography>
                            </Grid>
                            <Avatar className={classes.cover}
                                variant="rounded"
                                alt={currentPoll.title}
                                src={currentPoll.coverImage} />
                        </Grid>
                        <Divider className={classes.dividerSpace} />
                        <Grid container direction={"row"}
                            alignItems={"center"}
                            justify={"space-between"}>
                            <Grid item
                                xs={10} container
                                direction={"row"}
                                alignItems={"center"}>
                                <Avatar alt={currentPoll.options[0].title}
                                    src={currentPoll.options[0].coverImage} />
                                <Typography
                                    className={classes.optionsSpace}
                                    variant="h6" color="textSecondary">
                                    {currentPoll.options[0].title}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography
                                    variant="h6" color="textSecondary">
                                    {currentPoll.options[0].percentage} %
                                </Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                </CardContent>
            </ButtonBase>
        </Card>
    );
}
