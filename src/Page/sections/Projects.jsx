import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ColorPicker from '../../Containers/Projec/Colorpicker';
import Poinster from '../../Containers/Projec/Poinster';
import Cafe from '../../Containers/Projec/Cafe';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <Container
      id="projects"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 4, sm: 12 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 className='title'>{t('myworks')}</h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <ColorPicker />
        </Grid>
        <Grid item>
          <Poinster />
        </Grid>
        {/*<Grid item>
          <Cafe />
        </Grid>*/}
      </Grid>
    </Container>
  );
}