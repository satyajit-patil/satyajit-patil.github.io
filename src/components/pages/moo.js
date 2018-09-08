import React, { Component } from 'react';

import '../../Assets/css/Moostyle.css';

class Moo extends Component {
  render() {
    return (
      <div className="MooPage">
    <div className="MooWarning">
      <h1>Under Construction: Switch To Portrait</h1>
      </div>
      <div className="MooContent">
        <div className="headerTopMoo">
            <h1 id="titleMoo">Moo: A Subset of C++</h1>
        </div>

        <div className="TopRowMoo">
            <div className="WhatMoo">
                <h1 className="headersMoo">What is Moo?</h1>
                <p className="mainTextMoo">Moo is a programming language created by building the front end and back end of a compiler.</p>
            </div>
            <div className="ScannerMoo">
                <h1 className="headersMoo">1. Scanner</h1>
                <p className="mainTextMoo">The Scanner was created using Jlex. The main job of the scanner is to identify and return the next token.</p>
            </div>
            <div className="ParserMoo">
                <h1 className="headersMoo">2. Parser</h1>
                <p className="mainTextMoo">The Parser was created using Java CUP. The parser will find syntax errors and, for syntactically correct programs, it will build an abstract-syntax tree (AST) representation of the program.</p>
            </div>
        </div>

        <div className="BottomRowMoo">
            <div className="NAMoo">
                <h1 className="headersMoo">3. Name Analyzer</h1>
                <p className="mainTextMoo">Inserted methods to analyze the names of all nodes in the AST. The Name Analyzer will catch any static semantic errors.</p>
            </div>
            <div className="SAMoo">
                <h1 className="headersMoo">4. Semantic Analyzer</h1>
                <p className="mainTextMoo">Inserted methods to check the 'types' of all nodes in the AST. The Semantic Analyzer is a type checker.</p>
            </div>
            <div className="ICGMoo">
                <h1 className="headersMoo">5. Intermediate Code Generator</h1>
                <p className="mainTextMoo">The Intermediate Code Generator generated MIPS assembly code for moo programs represented as abstract-syntax trees.</p>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Moo;
