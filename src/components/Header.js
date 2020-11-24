import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { HeadsetTwoTone } from '@material-ui/icons';

function Header() {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <HeadsetTwoTone />
                <Typography variant="h6" component="h1">
                    Apollo Music Share
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;