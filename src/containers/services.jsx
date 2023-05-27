import React from 'react';
import CodeDialog from './Dialogs/CodeDialog';

export default function services() {
  return (
    <>
        <section className="services" id="services">
            <h2 className="heading">Mis <span>Servicios</span></h2>

            <div className="services-container">
                <div className="services-box">
                    <center>
                        <i className='bx bx-code-alt' ></i>
                        <h3>Desarrollo Web</h3>
                        <p className='services-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet porro sapiente non totam tenetur ut alias reprehenderit, enim saepe?</p>
                    </center>
                    <div className='services-btn'>
                        <CodeDialog />
                    </div>
                </div>

                <div className="services-box">
                    <i className='bx bx-palette' ></i>
                    <h3>Diseño Gráfico</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet porro sapiente non totam tenetur ut alias reprehenderit, enim saepe?</p>
                    <a href="#" className="btn">Leer Mas</a>
                </div>

                <div className="services-box">
                    <i className='bx bx-doughnut-chart' ></i>
                    <h3>Marketing Digital</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet porro sapiente non totam tenetur ut alias reprehenderit, enim saepe?</p>
                    <a href="#" className="btn">Leer Mas</a>
                </div>

                <div className="services-box">
                    <i className='bx bx-code-alt' ></i>
                    <h3>Desarrollo Web</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet porro sapiente non totam tenetur ut alias reprehenderit, enim saepe?</p>
                    <a href="#" className="btn">Leer Mas</a>
                </div>

                <div className="services-box">
                    <i className='bx bx-palette' ></i>
                    <h3>Diseño Gráfico</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet porro sapiente non totam tenetur ut alias reprehenderit, enim saepe?</p>
                    <a href="#" className="btn">Leer Mas</a>
                </div>

                <div className="services-box">
                    <i className='bx bx-doughnut-chart' ></i>
                    <h3>Marketing Digital</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet porro sapiente non totam tenetur ut alias reprehenderit, enim saepe?</p>
                    <a href="#" className="btn">Leer Mas</a>
                </div>

                <div className="services-box">
                    <i className='bx bx-code-alt' ></i>
                    <h3>Desarrollo Web</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet porro sapiente non totam tenetur ut alias reprehenderit, enim saepe?</p>
                    <a href="#" className="btn">Leer Mas</a>
                </div>

                <div className="services-box">
                    <i className='bx bx-palette' ></i>
                    <h3>Diseño Gráfico</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet porro sapiente non totam tenetur ut alias reprehenderit, enim saepe?</p>
                    <a href="#" className="btn">Leer Mas</a>
                </div>

            </div>
        </section>
    </>
  )
}
