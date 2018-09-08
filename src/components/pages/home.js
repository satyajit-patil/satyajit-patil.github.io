import React, { Component } from 'react';

import '../../Assets/css/style.css';
import resume from './../../Assets/pdfs/Resume.pdf';
import portrait from './../../Assets/images/portrait.JPG';
import aboutPenta from './../../Assets/images/diamond4.jpg';
import motivationFist from './../../Assets/images/fist.png';
import contactEmail from './../../Assets/images/email1.png';
import contactLinkedIn from './../../Assets/images/ln1.png';

import {
    Link
} from 'react-router-dom';

var scrollIntoView = require('scroll-into-view');

class Home extends Component {


    automatedScrolling(element) {
        return function () {
            var elmnt = document.getElementById(element);
            scrollIntoView(elmnt, { time: 1000, align: { top: 0 } });
        }
    }

    render() {

        return (
            <div className="Home">
                <div className="HomeWarning">
                    <h1>Under Construction: Switch To Portrait</h1>
                </div>
                <div className="HomeContent">
                    <section class="jumbotron">
                        <div class="jumboImage">
                            <img src={portrait} alt="Portrait of Jit"/>
                        </div>
                        <div class="jumboText">
                            <div class="jumboHeader">
                                <h1> Developer & Designer</h1>
                            </div>

                            <div class="jumboLink">
                                <h1> <a onClick={this.automatedScrolling('about')}>About</a>  /  <a onClick={this.automatedScrolling('work')}>Work</a>  /  <a onClick={this.automatedScrolling('contact')}>Contact</a>  /  <a id="resume" href={resume} target="_blank">Résumé</a> </h1>
                            </div>

                            <div class="Name">
                                <div class="Satyajit">
                                    <span class="Sa">SA</span><span class="Tya">TYA</span><span class="Jit">JIT</span>
                                </div>
                                <div class="YP">Yuvraj Patil</div>
                            </div>
                        </div>
                    </section>

                    <section class="AboutContent">
                        <div class="AboutLeft">
                            <div class="AboutLeftHead">
                                <h1 class="leftHeaders">About</h1>
                                <div class="aboutLink">
                                    <h1>
                                        <a onClick={this.automatedScrolling('about')}>About</a>  /  <a onClick={this.automatedScrolling('work')}>Work</a>  /  <a onClick={this.automatedScrolling('contact')}>Contact</a></h1>
                                </div>
                                <div class="aboutImage" >
                                    <img src={aboutPenta} alt="Pentagon of Jit"/>
                                </div>
                            </div>
                        </div>

                        <div id="about" class="AboutRight">
                            <div class="AboutRightWrapper">
                                <div class="statement">
                                    <p>I am a software developer and designer studying at the University of Wisconsin Madison.</p>
                                </div>
                                <div class="objective">
                                    <p>I am seeking a Software Engineering Internship position.</p>
                                </div>
                                <div class="UWM">
                                    <div class="UWMHeader">
                                        <p>University of Wisconsin Madison (UWM)</p>
                                    </div>
                                    <div class="UWMDegree">
                                        <p>Bachelors of Science in Computer Science; May 2019</p>
                                    </div>
                                    <div class="UWMLocation">
                                        <p>Madison, Wisconsin</p>
                                    </div>
                                    <div class="UWMBody">
                                        <p>My last two years at UWM has presented unprecedented scale and diversity of opportunity. Classes with phenomenal professors introduced me to the computing industry and adjusted my worldview. My experience with the <a href="https://mcburney.wisc.edu/" target="_blank" rel="noopener noreferrer">McBurney Disability Resource Center </a> showed me how important empathetic leadership can be when put in the appropriate context. My fast-paced major and involvement in campus-wide events validated my ideal that quality stems from attention to detail. </p>
                                    </div>
                                    <div class="UWMQuote">
                                        <p>UWM is showing me what I love to do, gifting me with a love for learning, and surrounding me with inspirational peers and professors. </p>
                                    </div>
                                </div>
                                <div class="RIS">
                                    <div class="RISHeader">
                                        <p>Ruamrudee International School (RIS)</p>
                                    </div>
                                    <div class="RISDegree">
                                        <p>International Baccalaureate Diploma; May 2015</p>
                                    </div>
                                    <div class="RISLocation">
                                        <p>Bangkok, Thailand</p>
                                    </div>
                                    <div class="RISBody">
                                        <p>My 13 years at RIS equipped me with the technical foundation to pursue any career path. It gave me the luxury of ‘choosing what I want to do’. </p>
                                    </div>
                                    <div class="RISQuote">
                                        <p>As someone who is born in India, raised in Thailand, and studying in the United States, I am privileged to understand the importance of diversity. </p>
                                    </div>
                                </div>
                                <div class="Hobbies">
                                    <div class="HobbiesHeader">
                                        <p>If I wasn’t coding, I would most likely be</p>
                                    </div>
                                    <div class="HobbiesBody">
                                        <p>Drawing or Playing a Sport (Soccer, Golf, Badminton, Tennis, Cricket)</p>
                                    </div>
                                </div>
                                <div class="AboutQuote">
                                    <img src={motivationFist} alt="Motivation Fist"/>
                                    <p>My accomplishments have materialized through hard work. To achieve what I want to achieve, I do not need to be talented, I need to be obsessed.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="WorkContent">
                        <div class="WorkLeft">
                            <div class="WorkLeftHead">
                                <h1 class="leftHeaders">Work</h1>
                                <div class="projectLink">
                                    <h1> <a onClick={this.automatedScrolling('IFSM')}>IFSM</a>  /  <a onClick={this.automatedScrolling('Nannon')}>Nannon</a>  /  <a onClick={this.automatedScrolling('Moo')}>Moo</a> </h1>
                                </div>
                                <div class="workLink">
                                    <h1> <a onClick={this.automatedScrolling('about')}>About</a>  /  <a onClick={this.automatedScrolling('contact')}>Contact</a> </h1>
                                </div>
                            </div>
                        </div>
                        <div id="work" class="WorkRight">
                            <div id="IFSM" class="IFSM">
                                <h1>Integrated Farm System Model</h1>
                                <h2>United States Department of Agriculture</h2>
                                <div class="IFSMBP">
                                    <Link class="IFSMbutton" to="/ifsm">Read more</Link>
                                </div>
                            </div>
                            <div id="Nannon" class="Nannon">
                                <h1>Nannon</h1>
                                <h2>Nano Backgammon for Machine Learning Research</h2>
                                <div class="NannonBP">
                                    <Link to="/nannon" class="Nannonbutton">Read more</Link>
                                </div>
                            </div>

                            <div id="Moo" class="Moo">
                                <h1>Moo</h1>
                                <h2>Programming Language</h2>
                                <div class="MooBP">
                                    <Link to="/moo" class="Moobutton">Read more</Link>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section class="ContactContent">
                        <div class="ContactLeft">
                            <h1 class="leftHeaders">Contact</h1>
                            <div class="contactLink">
                                <h1> <a onClick={this.automatedScrolling('about')}>About</a>  /  <a onClick={this.automatedScrolling('work')}>Work</a> </h1>
                            </div>
                        </div>
                        <div id="contact" class="ContactRight">
                            <div class="contactStatement">
                                <p>If you want to collaborate on developing or designing software projects – you are welcome to contact me.</p>
                            </div>
                            <div class="logos">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/satyajit-patil-72bb64113/"> <img class="linkedin" src={contactLinkedIn} alt="LinkedIn"/></a>
                                <a href="mailto:spatil5@wisc.edu"><img class="email" src={contactEmail} alt="GMail"/></a>
                            </div>
                            <div class="contactName">
                                <p>Satyajit Patil</p>
                            </div>
                            <div class="contactPosition">
                                <p class="contactInfo">Software Developer & Designer </p>
                            </div>
                            <div class="Address">
                                <p class="contactInfo">432 W Gorham St </p>
                                <p class="contactInfo">Madison, WI 53703 </p>
                            </div>
                            <div class="Cell">
                                <p class="contactInfo">Cell: (608) 622-0050 </p>
                            </div>
                            <div class="Copyright">
                                <h1>&copy; 2018 SATYAJIT PATIL ALL RIGHTS RESERVED</h1>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;
