import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { models } from '../../Services/Data';
import { ProgressBar } from '../../Components/ProgressBar';
import { useTranslation } from 'react-i18next';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className='paperKnow' onClick={handleClickOpen}>
            <center>
              <ViewInArIcon sx={{ fontSize: 40 }} />
              <p>{t('trimodeler')}</p>
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
              <p>{t('trimodeler')}</p>
            </Typography>
          </Toolbar>
        </AppBar>
        <div className='bodyDialog'>
          {models.map((e) => {
            return(
              <>
                <div className="spacing10" />
                <div className="cart" key={e.id}>
                    <div className="divicon">
                        <img src={e.icon} color={e.color} alt='Icon' />
                    </div>
                    <ProgressBar title={e.title} size={e.porcent} color={e.color} />
                </div>
              </>
            );
          })}
        </div>
      </Dialog>
    </React.Fragment>
  );
}
