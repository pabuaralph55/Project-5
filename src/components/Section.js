import React from 'react'
import { Container } from 'react-bootstrap';
import './Section.css';

const Section = (props) => {

    /* const [even, setEven] = useState(false);
    const [button2, setButton2] = useState(undefined);
    const [green, setGreen] = useState(false);
    const [black, setBlack] = useState(false); */



    function isEven() {
        return props.id % 2 === 0;
    }

    function isButton2() {
       if(props.button2 === undefined) {
           return false;
       } else return true
    }

    function isGreen() {
        if(props.id === 2 || props.id === 3) {
            return true;
        } else return false;
    }

    function isBlack() {
        if(props.id === 6) {
            return true;
        } else return false;
    }
    return (
        <div className={isGreen() ? "section d-flex flex-column justify-content-center background-green" : isBlack() ? "section d-flex flex-column justify-content-center background-black" : "section d-flex flex-column justify-content-center"}>
            <Container className="p-5">
                <div className="row d-flex align-items-center">
                    <div className={isEven() ? "col-md-6 order-md-1" : "col-md-6"}>
                        <img src={props.image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="title mt-5 text-center text-md-start">{props.title}</h2>
                        <p className="desc mb-3">{props.desc}</p>
                        <button className={isGreen() ? "btn btn-custom-dark text-uppercase" : isBlack() ? "btn btn-custom-dark text-uppercase" : "btn btn-white text-uppercase"}>{props.button1}</button>
                        <button className={isButton2() ? "btn btn-custom-dark text-uppercase d-block mt-3" : 'd-none'}>{props.button2}</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Section
