import { Typography } from '@material-ui/core';
import React from 'react';

function QueuedSongList() {
    const song = {
        title: "Luna",
        artist: "Forhill",
        thumbnail: "http://i3.ytimg.com/vi/NK8dcRiIq8s/hqdefault.jpg"
    }

    return (
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

function QueuedSong() {
    return <div>queued song</div>
}

export default QueuedSongList;