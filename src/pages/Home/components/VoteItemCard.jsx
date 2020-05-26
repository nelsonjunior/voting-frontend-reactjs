import { Avatar, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';


import React from "react";

const useStyles = makeStyles((theme) => ({
    content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        margin: [theme.spacing(1)],
        minWidth: 250,
        [theme.disabled]: {
            color: 'red'
        }
    },
    
    space: {
        paddingLeft: 10
    },

}));

export default function VoteItemCard(props) {
    const classes = useStyles();
    const {imgItemVote, titleItemVote, selected} = props;
    return (
        <React.Fragment>
            <ToggleButtonGroup value={titleItemVote}>
                <ToggleButton className={classes.content} selected={selected}
                    variant="outlined" value={titleItemVote}>
                    <Avatar alt={titleItemVote} src={imgItemVote} />
                    <Typography
                        className={classes.space}
                        variant="subtitle1" color="textSecondary">
                        {titleItemVote}
                    </Typography>
                </ToggleButton>
            </ToggleButtonGroup>
        </React.Fragment>
    );
}
