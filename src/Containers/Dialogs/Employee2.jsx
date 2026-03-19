import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTranslation } from 'react-i18next';

export default function ScrollDialog() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen('paper')} aria-label="Ver">
        <VisibilityIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{ background: 'rgba(0, 0, 0, 0.72)' }}
      >
        <DialogTitle id="scroll-dialog-title" sx={{ paddingLeft: 3, background: '#15171A' }}>
            <p>{t('dataemploye')}</p>
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'} sx={{ background: '#15171A' }}>
            <table className='tableInfo'>
              <tr>
                <td><b className='textimport'>{t('companyname')}: </b></td>
                <td>Centro de Bachillerato Tecnológico en Computación</td>
              </tr>
              <tr>
                <td><b className='textimport'>{t('jobposition')}: </b></td>
                <td>{t('puesto2')}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <b className='textimport'>{t('activities1')}:</b>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <ul>
                    <li>{t('job2desc1')}</li>
                    <li>{t('job2desc2')}:</li>
                      <ul>
                        <li>{t('job2point1')}</li>
                        <li>{t('job2point2')}</li>
                        <li>{t('job2point3')}</li>
                        <li>{t('job2point4')}</li>
                        <li>{t('job2point5')}</li>
                        <li>{t('job2point6')}</li>
                        <li>{t('job2point7')}</li>
                        <li>{t('job2point8')}</li>
                        <li>{t('job2point9')}</li>
                        <li>{t('job2point10')}</li>
                      </ul>
                    <li>{t('job2desc3')}</li>
                    <li>{t('job2desc4')}</li>
                  </ul>
                </td>
              </tr>
            </table>
        </DialogContent>
        <DialogActions sx={{ background: '#15171A' }}>
          <Button onClick={handleClose}>
            <p>{t('close')}</p>
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
