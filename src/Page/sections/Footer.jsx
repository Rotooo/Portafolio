import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/X';
import { FaSignalMessenger } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa6";

function Copyright() {
  return (
    <p>
      {'Copyright © '}<b>Rotooo&nbsp;</b>{new Date().getFullYear()}
    </p>
  );
}

export default function Footer() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderColor: 'divider',
        }}
      >
        <div><Copyright /></div>
        {/*<Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <Tooltip title="Twitter" placement="top">
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
          <Tooltip title="Youtube" placement="top">
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
          <Tooltip title="Github" placement="top">
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
          <Tooltip title="Signal" placement="top">
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
          <Tooltip title="Pinterest" placement="top">
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
          <Tooltip title="RentAHuman" placement="top">
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
        </Stack>*/}
      </Box>
    </Container>
  );
}
