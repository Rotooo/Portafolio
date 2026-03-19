import React from 'react';

export const ProgressBar = ({size, color, title}) => {
  return(
    <div className="progress-bar">
      <labe className="ProgressTitle">{title}</labe>
      <p>{size}</p>
      <div className="progress">
        <hr className="barr" width={size} color={color} />
      </div>
    </div>
  );
};