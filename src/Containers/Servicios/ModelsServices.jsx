import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useTranslation } from 'react-i18next';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
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
      <Button variant="outlined" onClick={handleClickOpen} sx={{ width: '100%', background: 'rgba(0, 0, 0, 0.72)' }}>
        <p>{t('readmore')}</p>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, background: '#15171A' }} className='titleDialog' id="customized-dialog-title">
          <p>{t('trimodeling')}</p>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{ background: '#15171A' }}>
          <Accordion defaultExpanded sx={{ background: '#0f1113' }}>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ color: '#ff8c00', fontWeight: 'bold' }}
            >
              {t('quest1')}
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>{t('trimoldser1')}</li>
                <li>{t('trimoldser2')}</li>
                <li>{t('trimoldser3')}</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ color: '#ff8c00', fontWeight: 'bold' }}
            >
              {t('quest2')}
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>{t('trimoldser4')}</li>
                <li>{t('trimoldser5')}</li>
                <li>{t('trimoldser6')}</li>
                <li>{t('trimoldser7')}</li>
                <li>{t('trimoldser8')}</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{ color: '#ff8c00', fontWeight: 'bold' }}
            >
              {t('quest3')}
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>{t('trimoldser9')}</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
