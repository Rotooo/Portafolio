import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaSignalMessenger } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_s7eoj1q", "template_n5upeih", form.current, "ErUkiiAEY26YJMbfL")
    .then(() => {
        toast.success(t('mailsuccess'), {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          progress: undefined,
        });
       form.current.reset();
    }, (error) => {
        toast.error(t('mailfaild'), {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          progress: undefined,
        });
        console.log(error);
    });
  };

  return (
    <Container
      id="contact"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 4, sm: 12 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 className='title'>{t('contact')}</h1>
      <center><h2>{t('sendMessage')}</h2></center>
      <div className='spacing10' />
      <div className='formContact'>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name="from_name" className='inputTextForm' placeholder={t('name')} required />
          <br />
          <input type='email' name="from_email" className='inputTextForm' placeholder={t('email')} required />
          <br />
          <input type='text' name="subject" className='inputTextForm' placeholder={t('subject')} required />
          <br />
          <textarea className='inputTextForm' name="message" rows="7" placeholder={t('message')} required></textarea>
          <br />
          <button type='submit' className='inputSubmit'>{t('send')}</button>
        </form>
      </div>
      <div className='spacing30' />
      <div>
        <center><h2>{t('redes')}</h2></center>
        <Stack
          direction="row"
          useFlexGap
        >
          <Tooltip title="Facebook">
            <IconButton
              color="inherit"
              href="https://www.facebook.com/rotooo8701"
              aria-label="Facebook"
              target='_blank'
              sx={{ alignSelf: 'center' }}
            >
              <FacebookIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Twitter">
            <IconButton
              color="inherit"
              href="https://x.com/Rotooo8701?s=20"
              aria-label="X"
              target='_blank'
              sx={{ alignSelf: 'center' }}
            >
              <TwitterIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Youtube">
            <IconButton
              color="inherit"
              href="https://www.youtube.com/channel/UCys4lIMcxmfFNRdCBaiEbKQ"
              aria-label="Youtube"
              target='_blank'
              sx={{ alignSelf: 'center' }}
            >
              <YouTubeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Github">
            <IconButton
              color="inherit"
              href="https://github.com/Rotooo"
              aria-label="GitHub"
              target='_blank'
              sx={{ alignSelf: 'center' }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Signal">
            <IconButton
              color="inherit"
              href="https://signal.me/#eu/baPtmGBiaD8cPiCKXJeRmFqE4Voo3vNYw0OmZF-5kMMSJSEHof9HzJfGfVt-wS4Y"
              aria-label="Signal"
              target='_blank'
              sx={{ alignSelf: 'center' }}
            >
              <FaSignalMessenger />
            </IconButton>
          </Tooltip>
          <Tooltip title="Pinterest">
            <IconButton
              color="inherit"
              href="https://mx.pinterest.com/rotooo8701/"
              aria-label="Pinterest"
              target='_blank'
              sx={{ alignSelf: 'center' }}
            >
              <PinterestIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="RentAHuman">
            <IconButton
              color="inherit"
              href="https://rentahuman.ai/humans/tbvP79m2WA3FmKkaCY8s"
              aria-label="RentHuman"
              target='_blank'
              sx={{ alignSelf: 'center' }}
            >
              <FaRobot />
            </IconButton>
          </Tooltip>
        </Stack>
      </div>
    </Container>
  );
}
