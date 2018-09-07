import React, { Component } from 'react';

import '../../Assets/css/IFSMstyle.css';

import IFSM_model from '../../Assets/images/IFSMmodel1.jpg';
import IFSM_input from '../../Assets/images/IFSMinput1.jpg';
import IFSM_output from '../../Assets/images/IFSMoutput1.jpg';


class IFSM extends Component {
  render() {
    return (
      <div className="IFSMPage">
          <div className="IFSMWarning">
      <h1>Under Construction: Switch To Portrait</h1>
      </div>
      <div className="IFSMContent">
      <div className="headerTopIFSM">
            <h1 className="titleIFSM">Integrated Farm System Model (IFSM)</h1>
            <a className="linkIFSM" href="https://www.ars.usda.gov/northeast-area/up-pa/pswmru/docs/integrated-farm-system-model/" target="_blank" rel="noopener noreferrer">More</a>
        </div>

        <div className="IFSMimages">
            <div className="IFSMmodel">
                <img src={IFSM_model} alt="Model"/>
            </div>
            <div className="IFSMinput">
                <img src={IFSM_input} alt="Input"/>
            </div>
            <div className="IFSMoutput">
                <img src={IFSM_output} alt="Output"/>
            </div>

        </div>

        <div className="IFSMtext">
            <div className="WhatIFSM">
                <h1 className= "headersIFSM">What is IFSM?</h1>
                <p className="mainTextIFSM">IFSM is a simulation model which integrates processes such as crop harvest, feed storage, grazing, and feeding to predict the long-term performance, environmental impact, and economics of production systems. </p>
            </div>
            <div className="ResponsibilitiesIFSM">
                <h1 className= "headersIFSM">Responsibilities</h1>
                <ul className="mainTextIFSM">
                    <li>Update code based on the needs of the researchers who use the model</li>
                    <li>Document unclear sections of the model</li>
                    <li>Manage repositories</li>
                </ul>

            </div>
            <div className="ProjectsIFSM">
                <h1 className= "headersIFSM">Past Projects</h1>
                <ul className="mainTextIFSM">
                    <li>Allow researchers to specify the diet they could feed to specific types to cows to determine the economic and environmental impact of different types of ration </li>
                    <li>Update code to run simulation in 'Batch Mode'. This allowed users to obtain output for various farming scenarios through one simulation.</li>
                </ul>

            </div>

        </div>
      </div>
            </div>

    );
  }
}

export default IFSM;
