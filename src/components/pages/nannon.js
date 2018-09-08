import React, { Component } from 'react';

import '../../Assets/css/Nannonstyle.css';
import nannon from './../../Assets/pdfs/Nannon.pdf';

import HCNB from '../../Assets/images/HCNB.png';
import HCB from '../../Assets/images/HCB.png';
import NBB from '../../Assets/images/NBB.png';


class Nannon extends Component {
  render() {
    return (
      <div className="NannonPage">
      <div className="NannonWarning">
      <h1>Under Construction: Switch To Portrait</h1>
      </div>
      <div className="NannonContent">
<div className="headerTopNannon">
            <h1 className="titleNannon">Nannon</h1>
            <a className="linkNannon" href={nannon} target="_blank">More</a>
        </div>

        <div className="Nannonimages">
            <div className="HCNBNannon">
                <img src={HCNB} alt="Naive Bayes"/>
            </div>
            <div className="HCBNannon">
                <img src={HCB} alt="HandCoded"/>
            </div>
            <div className="NBBNannon">
                <img src={NBB} alt="Bayes"/>
            </div>

        </div>

        <div className="Nannontext">
            <div className="WhatNannon">
                <h1 className="headersNannon">What is Nannon?</h1>
                    <p className="mainTextNannon">The goal is to get all one’s checkers across the board and out of play (“to safety”). Players must overcome the luck of the die with strategic choices. The game illuminates the relationship between different methods of learning. </p>
            </div>
            <div className="PlayersNannon">
                <h1 className="headersNannon">The Players</h1>
                <ul className="mainTextNannon">
                    <li>Greedy Hand-Coded: beats random player 63% of the time</li>
                    <li>Naïve Bayes: beats random player 61% of the time</li>
                    <li>Bayes Net: beats random player 67% of the time</li>
                </ul>

            </div>
            <div className="ResultsNannon">
                <h1 className="headersNannon">Results</h1>
                    <p className="mainTextNannon">The results are represented by the three figure above. The random player loses to all players by a significant margin. The Greedy Hand-Coded player performs better than both the Naïve Bayes player and the Bayer Net player.The Bayes Net player performs better than the Naïve Bayes player.</p>
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Nannon;
