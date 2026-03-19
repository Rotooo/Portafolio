import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import MexFlag from '../../assets/icons/flag-mexico.svg';
import UsaFlag from '../../assets/icons/flag-usa.svg';

export default function LangButton() {
    const { i18n } = useTranslation();

    const changelanguage = () => {
        const newlang = i18n.language === "en" ? "es" : "en";
        i18n.changeLanguage(newlang);
    };

    const isDefaulLang = i18n.language === "es";

  return (
    <Box sx={{ maxWidth: '32px' }}>
        <button
            onClick={changelanguage}
          style={{
            fontSize: "16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "0 auto",
            background: 'none',
            border: 'none'
          }}
        >
            <img
              src={isDefaulLang ? UsaFlag : MexFlag}
              alt="flag"
              width="30"
            />
        </button>
    </Box>
  )
}
