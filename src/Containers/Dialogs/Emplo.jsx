import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ScrollDialog() {
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
      <IconButton onClick={handleClickOpen('paper')}>
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
            <p>Detalles del empleo</p>
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'} sx={{ background: '#15171A' }}>
            <table>
              <tr>
                <td><b className='textimport'>Nombre de la empresa: </b></td>
                <td>Meiwa Mold México S.A. de C.V</td>
              </tr>
              <tr>
                <td><b className='textimport'>Puesto: </b></td>
                <td>Jefe de departamento de sistemas</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <b className='textimport'>Actividades empeñadas:</b>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <ul>
                    <li>Mantenimiento preventivo y correctivo a Equipos de computo, laptops, servidores, no-breaks, Routers, módems, iPads, cámaras CCTV, circuitos electrónicos, impresoras.</li>
                    <li>Programación con HTML, CSS, JavaScript, Visual Basic .NET, C#, React, NodeJS y Python.</li>
                    <li>Monitoreo y reparación de la infraestructura de la conexión a internet de la compañía.</li>
                    <li>Cotización de equipos de computo de fuentes confiables o de proveedores recomendados.</li>
                    <li>Monitoreo y corrección de ciberataques, así como la creación de copias de seguridad en todos los dispositivos.</li>
                    <li>Monitoreo de correo electrónicos por medio de CPanel.</li>
                    <li>Diseño gráfico para las interfaces, los logos y los fondos de pantalla de la empresa.</li>
                  </ul>
                </td>
              </tr>
            </table>
        </DialogContent>
        <DialogActions sx={{ background: '#15171A' }}>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
