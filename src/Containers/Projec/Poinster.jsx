import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import IconImage from '../../assets/images/Poinster.webp';
import { PoinsterSlide } from '../../Services/SliderItems';
import { programs } from '../../Services/Data';
import { useTranslation } from 'react-i18next';

const styles = {
  slider: {
    position: "relative",
    width: "100%",
    margin: "auto",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
  },
  caption: {
    position: "absolute",
    bottom: "10px",
    left: "20px",
    color: "#fff",
    background: "rgba(0,0,0,0.5)",
    padding: "8px 12px",
    borderRadius: "8px",
  },
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
    const [current, setCurrent] = React.useState(0);
  
    React.useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => (prev + 1) % PoinsterSlide.length);
        }, 4000); // cada 3 segundos
    
        return () => clearInterval(interval);
    }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className='paperKnow2' onClick={handleClickOpen}>
            <center>
              <img src={IconImage} width='60%' alt='PoinsterLogo' />
              <p>Poinster</p>
            </center>
      </div>
<Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        slots={{
          transition: Transition,
        }}
        sx={{ background: '#15171A' }}
      >
        <AppBar sx={{ position: 'relative', background: '#15171A' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <p>{t('projectdata')}</p>
            </Typography>
          </Toolbar>
        </AppBar>
        <div className='bodyDialog'>
            {/*Card Profile*/}
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <Card sx={{ display: 'flex', background: '#15171A' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 100, margin: 4 }}
                    image={IconImage}
                    alt="ColorPicker Logo"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <h3>Poinster</h3>
                      <i style={{ color: '#8a8a8a' }}>Software Library</i>
                      <br /><br />
                      {/*<a href='https://wepi94823y7gyw876r21.web.app/' className='inputSubmit' target='_blank'>Ver Demo</a>*/}
                      <a href='https://github.com/Rotooo/Poinster' className='inputSubmit' target='_blank'>Github</a>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>

              {/*Card About*/}
              <Grid item xs={12} md={8}>
                <Card sx={{ background: '#15171A' }}>
                  <center>
                    <Typography variant="h5" component="div" sx={{ color: '#ff8c00' }}>
                      <p>{t('tecs')}</p>
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item>
                        <div className='paperKnow3'>
                          <img src={programs[2].icon} width='50%' />
                          <p>{programs[2].title}</p>
                        </div>
                      </Grid>
                      <Grid item>
                        <div className='paperKnow3'>
                          <img src={programs[3].icon} width='50%' />
                          <p>{programs[3].title}</p>
                        </div>
                      </Grid>
                    </Grid>
                  </center>
                </Card>
              </Grid>
            </Grid>
            <div className='spacing5' />

            {/*Card Icons*/}
            <Card sx={{ background: '#15171A' }}>
              <center>
                <Typography variant="h5" component="div" sx={{ color: '#ff8c00' }}>
                  <p>{t('about')}</p>
                </Typography>
              </center>
              <center>
                <Typography variant="body2" sx={{ margin: 1 }}>
                  <p>{t('project2desc')}</p>
                </Typography>
              </center>
            </Card>
            <div className='spacing5' />

            {/*Card Slider*/}
            <Card sx={{ background: '#15171A' }}>
              <center>
                <Typography variant="h5" component="div" sx={{ color: '#ff8c00' }}>
                  <p>{t('captures')}</p>
                </Typography>
              </center>
              <div style={styles.slider}>
                <div style={styles.caption}>
                  {t(PoinsterSlide[current].subtitle)}
                </div>
                <img
                  src={PoinsterSlide[current].image}
                  alt="slider"
                  style={styles.image}
                />
              </div>
            </Card>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
