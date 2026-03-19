import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
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
                <td>Meiwa Mold México S.A. de C.V</td>
              </tr>
              <tr>
                <td><b className='textimport'>{t('jobposition')}: </b></td>
                <td>{t('puesto1')}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <b className='textimport'>{t('activities1')}:</b>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <ul>
                    <li>{t('job1desc1')}</li>
                    <li>{t('job1desc2')}:</li>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                      <li>Typescript</li>
                      <li>Visual Basic .NET</li>
                      <li>C#</li>
                      <li>ReactJS</li>
                      <li>NodeJS</li>
                      <li>Python</li>
                    </ul>
                    <li>{t('job1desc3')}</li>
                    <li>{t('job1desc4')}</li>
                    <li>{t('job1desc5')}</li>
                    <li>{t('job1desc6')}</li>
                    <li>{t('job1desc7')}</li>
                    <li>{t('job1desc8')}</li>
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
