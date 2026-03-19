import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import MyName from '../../Components/MyName';
import MyTitles from '../../Components/MyTitles';
import MyPicture from '../../assets/images/Profile2.webp';
import IconsButtons from '../../Components/IconsButtons';

export default function Hero() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        pt: { xs: 14, sm: 10 },
        pb: { xs: 8, sm: 12 },
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="space-between"
      >

        {/* TEXTO */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: 500 }}>
            <MyName />
            <MyTitles />

            <Box sx={{ mt: 3 }}>
              <center><IconsButtons /></center>
            </Box>
          </Box>
        </Grid>

        {/* IMAGEN */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box
            component="img"
            src={MyPicture}
            alt="avatar"
            sx={{
              width: '100%',
              height: '100%'
            }}
          />
        </Grid>

      </Grid>
    </Container>
  );
}