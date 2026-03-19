import React from 'react';
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

export default function IconsButtons() {
  return (
    <div>
        <center>
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
        </center>
    </div>
  )
}
