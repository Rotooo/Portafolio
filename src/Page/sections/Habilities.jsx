import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DevForm from '../../Containers/Conocimientos/DevForm';
import DesignForm from '../../Containers/Conocimientos/DesignForm';
import OfficeForm from '../../Containers/Conocimientos/OfficeForm';
import ModelsForm from '../../Containers/Conocimientos/ModelsForm';
import OSForm from '../../Containers/Conocimientos/OSForm';
import DatabaseForm from '../../Containers/Conocimientos/DatabaseForm';
import EditionForm from '../../Containers/Conocimientos/EditionForm';
import ElectroForm from '../../Containers/Conocimientos/ElectroForm';
import SoftwareForm from '../../Containers/Conocimientos/SoftwareForm';

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <Container
      id="habilities"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 4, sm: 12 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 className='title'>{t('skills')}</h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <DevForm />
        </Grid>
        <Grid item>
          <DesignForm />
        </Grid>
        <Grid item>
          <SoftwareForm />
        </Grid>
        <Grid item>
          <OfficeForm />
        </Grid>
        <Grid item>
          <DatabaseForm />
        </Grid>
        <Grid item>
          <OSForm />
        </Grid>
        <Grid item>
          <ModelsForm />
        </Grid>
        <Grid item>
          <EditionForm />
        </Grid>
        <Grid item>
          <ElectroForm />
        </Grid>
      </Grid>
    </Container>
  );
}