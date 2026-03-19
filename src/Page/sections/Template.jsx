import * as React from 'react';
import Container from '@mui/material/Container';

export default function Testimonials() {

  return (
    <Container
      id="name"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 4, sm: 12 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 className='title'>Title</h1>
    </Container>
  );
}