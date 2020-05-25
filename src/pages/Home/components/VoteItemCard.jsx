import { Avatar, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FolderIcon from '@material-ui/icons/Folder';
import React from "react";

const useStyles = makeStyles((theme) => ({
    content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        margin: [theme.spacing(1)],
        minWidth: 250,
    },
    
    space: {
        paddingLeft: 10
    },

}));

export default function VoteItemCard(props) {
    const classes = useStyles();
    const {imgItemVote, titleItemVote} = props;
    return (
        <React.Fragment>
            <Button className={classes.content} variant="outlined">
                <Avatar alt={titleItemVote} src={imgItemVote} />
                <Typography
                    className={classes.space}
                    variant="subtitle1" color="textSecondary">
                    {titleItemVote}
                </Typography>
            </Button>
        </React.Fragment>
    );
}
