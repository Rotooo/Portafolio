import React from 'react';
import { skills } from '../settings/myskill.jsx';

export default function Skills() {
  return (
    <>
        <section className="services" id="services">
            <h2 className="heading">Mis <span>Habilidades</span></h2>

            <div className="services-container">
                {skills.map((e) => {
                    return (                    
                        <div className="services-box" key={e.id}>
                            <i className={e.icon} ></i>
                            <h3>{e.name}</h3>
                            <p>{e.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    </>
  )
}
