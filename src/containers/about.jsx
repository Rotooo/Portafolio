import React from 'react';
import { useTranslation } from 'react-i18next';
import MoreInfo from './Dialogs/MoreInfo';
import Image1 from '../assets/img/ccbuho3.png';

export default function about() {
  const { t } = useTranslation();
  return (
    <>
        <section className="about" id="about">
            <div className="about-img">
                <img src={Image1} alt="" />
            </div>
            <div className="about-content">
                <h2 className="heading">{t('about')} <span>{t('abme')}</span></h2>
                <h3>{t('systemE')}</h3>
                <p>{t('aboutdes1')}</p>
                <p>{t('aboutdes2')}</p>
                <p>{t('aboutdes3')}</p>
                <MoreInfo />
            </div>
        </section>
    </>
  )
}
