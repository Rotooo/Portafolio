import React from 'react';

export default function CodeDialog() {
    function myFunc() {
        var modal = document.getElementById("CodeDialog");
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
        <button id="myBtn" className="btn" onClick={myFunc}>Leer Más</button>
        <div id="CodeDialog" className="modal" style={{display: 'none'}}>
            <div className="modal-content">
                <div className="modal-header">
                    {/*<span className="close" onClick={myFunction}>&times;</span>*/}
                    <i className='bx bx-x' onClick={myFunc}></i>
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