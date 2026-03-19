import React from 'react';
import { ProgressBar } from './ProgressBar';
import HtmlIcon from '../assets/icons/HTML5.svg';

export default function Dataform() {
  return (
    <div className="progress-card">
    <img src={HtmlIcon} width="50px" height="50px" alt="HtmlIcon" />    
      <div className="contentDataForm">
        <div className="progress-row">
          <div className="progress-bar">
            <ProgressBar size="70%" color="#fff" title="HTML" />
          </div>
        </div>
      </div>
    </div>
  )
}
