import React from 'react';
import { useTranslation } from 'react-i18next';
import Icono from '../assets/img/icon.png';
import 'boxicons';

export default function navbar() {
    const { t, i18n } = useTranslation();
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    const handleLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const handleClick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

  return (
    <>
        <header className="header">
            <img src={Icono} className="logo" alt="" />
            <i className='bx bx-menu' id="menu-icon" onClick={handleClick}></i>
            <nav className="navbar">
                <a href="#home" className="active">{t('home')}</a>
                <a href="#about">{t('about')}</a>
                <a href="#services">{t('services')}</a>
                <a href="#portfolio">{t('portfolio')}</a>
                <a href="#contact">{t('contact')}</a>
                <select
                    name="select" 
                    className="translator" 
                    onChange={handleLanguage} 
                    value={i18n.language}
                >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </nav>
        </header>
    </>
  )
}
