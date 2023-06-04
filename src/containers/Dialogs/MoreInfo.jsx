import React from 'react';

export default function MoreInfo() {
    function myFunction() {
        var modal = document.getElementById("MoreInfoModal");
        if (modal.style.display === "none") {
            modal.style.display = "block";
            console.clear();
        } else {
            modal.style.display = "none";
            console.clear();
        }
    }
  return (
    <>
        <button id="myBtn" className="btn" onClick={myFunction}>Leer Más</button>
        <div id="MoreInfoModal" className="modal" style={{display: 'none'}}>
            <div className="modal-content">
                <div className="modal-header">
                    {/*<span className="close" onClick={myFunction}>&times;</span>*/}
                    <i className='bx bx-x' onClick={myFunction}></i>
                    <h1>Programación</h1>
                </div>
                <div className="modal-body">
                    <h1>hola</h1>
                </div>
            </div>
        </div>
    </>
  )
}