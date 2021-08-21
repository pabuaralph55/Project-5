import React from 'react'
import { Container } from 'react-bootstrap';
import './Section.css';

const Section = (props) => {

    function isEven() {

        return props.id % 2 === 0;
    }

    function isButton2() {
       if(props.button2 === undefined) {
           return false;
       } else return true
    }

    return (
        <div className={isEven() ? "section d-flex flex-column justify-content-center background-green" : "section d-flex flex-column justify-content-center"}>
            <Container className="p-5">
                <div className="row d-flex align-items-center">
                    <div className={isEven() ? "col-md-6 order-md-1" : "col-md-6"}>
                        <img src={props.image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="title mt-5 text-center text-md-start">{props.title}</h2>
                        <p className="desc mb-3">{props.desc}</p>
                        <button className={isEven() ? "btn btn-green text-uppercase" : "btn btn-white text-uppercase"}>{props.button1}</button>
                        <button className={isButton2() ? "btn btn-green text-uppercase d-block mt-3" : 'd-none'}>{props.button2}</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Section
