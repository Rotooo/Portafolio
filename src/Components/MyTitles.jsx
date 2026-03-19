import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MyTitles() {
    const { t } = useTranslation();
    const titles = [
        t('persoTitle1'), 
        t('persoTitle2'),
        t('persoTitle3'),
        t('persoTitle4'),
        t('persoTitle5'),
        t('persoTitle6'),
        t('persoTitle7'),
    ];
    const [indix, setIndix] = useState(0);

    useEffect(() => {
      const crono = setInterval(() => {
        setIndix((prev) => (prev + 1) % titles.length);
      }, 3000);
      return () => clearInterval(crono);
    }, []);

    return (
        <div className='HeroTitle'>
            <h2>{t('salute1')} <span id='nombre-dinamico' className='titleGrow'>{titles[indix]}</span></h2>
        </div>
    )
}
