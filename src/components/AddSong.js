import React from 'react';
import { TextField, InputAdornment, Button } from '@material-ui/core';
import { AddBoxOutlined, Link } from '@material-ui/icons';

function AddSong() {
    return (
        <div>
            <TextField
                placeholder="Add Youtube or Soundcloud Url"
                fullWidth
                margin="normal"
                type="url"
                InputProps={{
                    startAdorment: (
                        <InputAdornment position="start">
                            <Link />
                        </InputAdornment>
                    )
                }}
            />
            <Button
                variant="contained"
                color="primary"
                endIcon={<AddBoxOutlined />}
            >
                Add
            </Button>
    
        </div>
    )
}

export default AddSong;