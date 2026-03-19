import React from 'react';

export const Stack = ({icon, title, name, url}) => {
  return(
    <>
      <div className={name}>
        <a href={url} target='_blank'>
          {icon}
          <p>{title}</p>
        </a>
        </div>
    </>
  );
};