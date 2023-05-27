import React from 'react';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';
import Image1 from '../assets/img/ccbuho3.png';

export default function home() {
    const { t } = useTranslation();
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [t('systemE'), 'Youtuber', t('desiuux'), t('frontdev')],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        return() => {
            typed.destroy();
        }
    });

  return (
    <>
        <section className="home" id="home">
            <div className="home-content">
                <h3>{t('hello')}</h3>
                <h1>Victor Rios</h1>
                <h3>{t('presen')} <span ref={el}></span></h3>
                <p>esta es una descripcion sobre quien soy y que es lo que hago</p>
                <div className="social-media">
                    <a href="https://www.facebook.com/victor.rios.5876060/" target="_blank"><i className='bx bxl-facebook-square' ></i></a>
                    <a href="https://www.instagram.com/victor_rios70/" target='_blank'><i className='bx bxl-instagram' ></i></a>
                    <a href="https://github.com/Rotooo" target='_blank'><i className='bx bxl-github'></i></a>
                    <a href="#"><i className='bx bxl-discord-alt' ></i></a>
                </div>
                <a href="#" className="btn">{t('downloadcv')}</a>
            </div>

            <div className="home-img">
                <img src={Image1} alt="" />
            </div>
        </section>
    </>
  )
}
