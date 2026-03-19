import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import MyName from '../../Components/MyName';
import MyTitles from '../../Components/MyTitles';

export default function Hero() {
  return (
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <MyName />
          <MyTitles />
        </Stack>
      </Container>
  );
}
