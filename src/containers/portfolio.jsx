import React from 'react';
import priImage from '../assets/img/bosque.png';
import secImage from '../assets/img/cueva.png';
import terImage from '../assets/img/golpe.png';
import cuaImage from '../assets/img/latex.png';
import qiuImage from '../assets/img/mago.png';
import sexImage from '../assets/img/rosa.png';

export default function portfolio() {
  return (
    <>
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Mis Ultimos <span>Trabajos</span></h2>

            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={priImage} alt="" />
                    <div className="portfolio-layer">
                        <h4>Diseñador Web</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quos.</p>
                        <a href="#"><i className='bx bx-link-external' ></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={secImage} alt="" />
                    <div className="portfolio-layer">
                        <h4>Diseñador Web</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quos.</p>
                        <a href="#"><i className='bx bx-link-external' ></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={terImage} alt="" />
                    <div className="portfolio-layer">
                        <h4>Diseñador Web</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quos.</p>
                        <a href="#"><i className='bx bx-link-external' ></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={cuaImage} alt="" />
                    <div className="portfolio-layer">
                        <h4>Diseñador Web</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quos.</p>
                        <a href="#"><i className='bx bx-link-external' ></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={qiuImage} alt="" />
                    <div className="portfolio-layer">
                        <h4>Diseñador Web</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quos.</p>
                        <a href="#"><i className='bx bx-link-external' ></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={sexImage} alt="" />
                    <div className="portfolio-layer">
                        <h4>Diseñador Web</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quos.</p>
                        <a href="#"><i className='bx bx-link-external' ></i></a>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}
