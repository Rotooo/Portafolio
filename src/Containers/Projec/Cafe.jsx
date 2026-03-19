import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import IconImage from '../../assets/images/coffee.webp';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

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
              <img src={IconImage} width='60%' alt='CoffeLogo' />
              <p>El Café Secreto</p>
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
              <p>Titulo</p>
            </Typography>
          </Toolbar>
        </AppBar>
        <div className='bodyDialog'>
            <h1>hola mundo</h1>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
