import { Typography } from '@material-ui/core';
import React from 'react';
import { Avatar, IconButton, makeStyles, useMediaQuery } from '@material-ui/core';
import { Delete } from "@material-ui/icons";

function QueuedSongList() {
    const greaterThanMd = useMediaQuery(theme  => theme.breakpoints.up('md'));

    const song = {
        title: "Luna",
        artist: "Forhill",
        thumbnail: "http://i3.ytimg.com/vi/NK8dcRiIq8s/hqdefault.jpg"
    }

    return greaterThanMd && (
        <div style={{ margin: '10px 0' }}>
            <Typography color="textSecondary" variant="button">
                QUEUE (5)
            </Typography>
            {Array.from({ length: 5}, () => song).map((song, i) => (
                <QueuedSong key={i} song={song} />
            ))}
        </div>
    )
}

const useStyles = makeStyles({
    avatar: {
      width: 44,
      height: 44
    },
    text: {
      textOverflow: "ellipsis",
      overflow: "hidden"
    },
    container: {
      display: "grid",
      gridAutoFlow: "column",
      gridTemplateColumns: "50px auto 50px",
      gridGap: 12,
      alignItems: "center",
      marginTop: 10
    },
    songInfoContainer: {
      overflow: "hidden",
      whiteSpace: "nowrap"
    }
  });

function QueuedSong({ song }) {
    const classes = useStyles();
    const { thumbnail, artist, title } = song;

    return (
        <div className={classes.container}>
            <Avatar src={thumbnail} alt="Song thumbnail" className={classes.avatar} />
            <div className={classes.songInfoContainer}>
                <Typography variant="subtitle2" className={classes.text}>
                    {title}
                </Typography>
                <Typography color="textSecondary" variant="body2" className={classes.text}>
                    {artist}
                </Typography>
            </div>
            <IconButton>
                <Delete color="error" />
            </IconButton>
        </div>
    )
}

export default QueuedSongList;