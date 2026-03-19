import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Employee1 from '../../Containers/Dialogs/Employee1';
import Employee2 from '../../Containers/Dialogs/Employee2';
import Employee3 from '../../Containers/Dialogs/Employee3';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
      <Container
        id="about"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 4, sm: 12 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h1 className='title'>{t('about1')}</h1>
        <p>{t('aboutdesc')}</p>
        <br />
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, background: '#15171A' }}>
            <center><h2>{t('mystudy')}</h2></center>
              <List sx={{ width: '100%', bgcolor: '#0f1113' }}>
                <ListItem sx={{ fontFamily: 'Consolas' }}>
                  <ListItemAvatar>
                    <Avatar sx={{ background: '#1d1b1b', color: '#ff8c00' }}>
                      <SchoolIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<b>{t('school1')}</b>}
                    secondary={<p>Centro Bachillerato Tecnologico Industrial y de Servicios 282</p>}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ background: '#1d1b1b', color: '#ff8c00' }}>
                      <SchoolIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary={<b>{t('school2')}</b>}
                    secondary={<p>Universidad Tecnológica de Aguascalientes</p>}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ background: '#1d1b1b', color: '#ff8c00' }}>
                      <SchoolIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary={<b>{t('school3')}</b>}
                    secondary={<p>Universidad Tecnológica de Aguascalientes</p>}
                  />
                </ListItem>
              </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, background: '#15171A' }}>
            <center><h2>{t('myxp')}</h2></center>
              <List sx={{ width: '100%', bgcolor: '#0f1113' }}>
                <ListItem secondaryAction={ <Employee1 /> }>
                  <ListItemAvatar>
                    <Avatar sx={{ background: '#1d1b1b', color: '#ff8c00' }}>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<b>Meiwa Mold México S.A. de C.V</b>}
                    secondary={<p>{t('jobdate1')}</p>}
                  />
                </ListItem>
                <ListItem secondaryAction={ <Employee2 /> }>
                  <ListItemAvatar>
                    <Avatar sx={{ background: '#1d1b1b', color: '#ff8c00' }}>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary={<b>Centro de Bachillerato Tecnológico en Computación</b>}
                    secondary={<p>{t('jobdate2')}</p>}
                  />
                </ListItem>
                <ListItem secondaryAction={ <Employee3 /> }>
                  <ListItemAvatar>
                    <Avatar sx={{ background: '#1d1b1b', color: '#ff8c00' }}>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary={<b>Instituto Nacional de Estadística y Geografía (INEGI)</b>}
                    secondary={<p>{t('jobdate3')}</p>}
                  />
                </ListItem>
              </List>
          </Paper>
        </Grid>
      </Grid>
      </Container>
  )
}
