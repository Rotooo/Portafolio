import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import DevServices from '../../Containers/Servicios/DevServices';
import DesignServices from '../../Containers/Servicios/DesignServices';
import ModelServices from '../../Containers/Servicios/ModelsServices';
import ClassServices from '../../Containers/Servicios/ClassService';
import FinderServices from '../../Containers/Servicios/FinderService';
import MaintanceServices from '../../Containers/Servicios/MaintanceService';
import Devback from '../../assets/images/devback.webp';
import SchoolBanner from '../../assets/images/classroom.webp';
import Design3DBanner from '../../assets/images/design3D.webp';
import PCBanner from '../../assets/images/pcbuild.webp';
import DesignBanner from '../../assets/images/design.webp';
import FinderBanner from '../../assets/images/finder.webp';
import { useTranslation } from 'react-i18next';


export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <Container
      id="servicios"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 4, sm: 12 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 className='title'>{t('services')}</h1>
      <div className='panelServices'>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Card sx={{ width: 345, background: '#15171A' }}>
            <CardMedia
              sx={{ height: 140 }}
              image={Devback}
              title="Desarrollo de Software"
            />
            <CardContent>
              <center><h3>{t('devsoft')}</h3></center>
            </CardContent>
            <CardActions>
              <DevServices />
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ width: 345, background: '#15171A' }}>
            <CardMedia
              sx={{ height: 140 }}
              image={DesignBanner}
              title="Diseño Gráfico"
            />
            <CardContent>
              <center><h3>{t('designgra')}</h3></center>
            </CardContent>
            <CardActions>
              <DesignServices />
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ width: 345, background: '#15171A' }}>
            <CardMedia
              sx={{ height: 140 }}
              image={Design3DBanner}
              title="Modelado 3D"
            />
            <CardContent>
              <center><h3>{t('trimodeling')}</h3></center>
            </CardContent>
            <CardActions>
              <ModelServices />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <div className='spacing20' />
      <Grid container spacing={2}>
        <Grid item>
          <Card sx={{ width: 345, background: '#15171A' }}>
            <CardMedia
              sx={{ height: 140 }}
              image={SchoolBanner}
              title="Asesoria Informatica"
            />
            <CardContent>
              <center><h3>{t('itteach')}</h3></center>
            </CardContent>
            <CardActions>
              <ClassServices />
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ width: 345, background: '#15171A' }}>
            <CardMedia
              sx={{ height: 140 }}
              image={PCBanner}
              title="Mantenimiento de Computo"
            />
            <CardContent>
              <center><h3>{t('maintan')}</h3></center>
            </CardContent>
            <CardActions>
              <MaintanceServices />
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ width: 345, background: '#15171A' }}>
            <CardMedia
              sx={{ height: 140 }}
              image={FinderBanner}
              title="Finder"
            />
            <CardContent>
              <center><h3>Finder</h3></center>
            </CardContent>
            <CardActions>
              <FinderServices />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      </div>
    </Container>
  );
}