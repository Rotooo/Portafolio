import React from 'react';
import { useTranslation } from 'react-i18next';
import Icono from '../assets/img/icon.png';
import 'boxicons';

export default function navbar() {
    const { t, i18n } = useTranslation();
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    const handleLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const handleClick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            if(top >= offset && top < offset + height){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

  return (
    <>
        <header className="header">
            <img src={Icono} className="logo" alt="" />
            <i className='bx-x' id="menu-icon" onClick={handleClick}></i>
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
