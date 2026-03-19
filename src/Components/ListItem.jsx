import React from 'react'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import SchoolIcon from '@mui/icons-material/School';

export default function ListItem() {
  return (
    <div className='itemList'>
        <Grid container spacing={2}>
            <Grid item size={4}>
                <Avatar sx={{ width: '70px', height: '70px' }}>
                    <SchoolIcon sx={{ width: '40px', height: '40px' }} />
                </Avatar>
            </Grid>
            <Grid item size={8}>
                <p>Titulo</p>
                <i>subtitule</i>
            </Grid>
        </Grid>
    </div>
  )
}
