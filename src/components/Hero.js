import React from 'react';
import "./Hero.css";
import { Container } from 'react-bootstrap';
import card__logo from '../images/card_logo-1.png';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SchoolIcon from '@material-ui/icons/School';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MenuBookIcon from '@material-ui/icons/MenuBook';



const Hero = () => {
    return (
        <div className="hero vh-100">
            <Container className ="hero__desc">
                <div className="text-white text-center">
                    <h1 className="hero__title p-4">Be Real World Ready</h1>
                    <p>Specialized degree programs delivered by professional faculty in an industry-grade environment.</p>
                </div>


                <div className="row hero__item-holder ">
                    <div className="col-md-3 col-6 mb-1 text-white">
                        <div className="d-flex flex-column flex-lg-row align-items-lg-start align-items-center hero__item p-3">
                            <img src={card__logo} alt="" />

                            <div className="card__desc mx-2 my-2">
                                <h3 className="item__title">REGISTER <br/> NOW</h3>
                                <p><a href="/">View More<ChevronRightIcon/></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 mb-1 text-white">
                        <div className="d-flex flex-column flex-lg-row align-items-lg-start align-items-center hero__item p-3">
                            
                            <SchoolIcon className="item__icon"/>

                            <div className="card__desc mx-2 my-2">
                                <h3 className="item__title">APPLY FOR SCHOLARSHIP</h3>
                                <p><a href="/">View More<ChevronRightIcon/></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 mb-1 text-white">
                        <div className="d-flex flex-column flex-lg-row align-items-lg-start align-items-center hero__item p-3">
                            
                            <ListAltIcon className="item__icon"/>

                            <div className="card__desc mx-2 my-2">
                                <h3 className="item__title">APPLICATION PROCEDURES</h3>
                                <p><a href="/">View More<ChevronRightIcon/></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 mb-1 text-white">
                        <div className="d-flex flex-column flex-lg-row align-items-lg-start align-items-center hero__item p-3">
                            
                            <MenuBookIcon className="item__icon"/>

                            <div className="card__desc mx-2 my-2">
                                <h3 className="item__title">ENROLLMENT PROCESS</h3>
                                <p><a href="/">View More<ChevronRightIcon/></a></p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </Container>

               
            <div className="hero__overlay"></div>
        </div>

        
    )
}

export default Hero
