import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MyName() {
    const names = ["Victor Rios", "Rotooo"];
    const { t } = useTranslation();
    const [indix, setIndix] = useState(0);

    useEffect(() => {
      const crono = setInterval(() => {
        setIndix((prev) => (prev + 1) % names.length);
      }, 3000);
      return () => clearInterval(crono);
    }, []);

  return (
    <div className='HeroTitle'>
        <h1>{t('salute')} <span id='nombre-dinamico' className='titleGrow'>{names[indix]}</span></h1>
    </div>
  )
}
