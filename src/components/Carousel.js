import React from 'react';
import { Container } from 'react-bootstrap';
import ReactElasticCarousel from 'react-elastic-carousel';
import image1 from '../images/carousel1.jpeg';
import image2 from '../images/carousel2.png';
import image3 from '../images/carousel3.jpg';
import image4 from '../images/carousel4.png';
import image5 from '../images/carousel5.png';

const Carousel = () => {

    const Item = [
        {
            id:1,
            image: image1,
            title: '[MCAD] 10 Must-See Contemporary Art Galleries in Metro Manila',
            desc: "Benilde's Museum of Contemporary Art and Design (MCAD Manila) is one of Tatler's 10 Must-See Contemporary Art Galleries in Metro Manila.",
            button: 'Visit MCAD'
        },

        {
            id:2,
            image: image2,
            title: 'do it (mcadmanila)',
            desc: "In this iteration of do it, MCAD partners with local artists, community groups and its online audience. As a response to stay-at-home orders, do it (MCAD Manila) will run both online and on-site. do it (MCAD Manila) launches online through the musuem's social media channels and website. The public is invited to participate by responding to instructions from different artists, which will be released by MCAD throughout the exhiibition run",
            button: 'Visit MCAD Manila'
        },
        
        {
            id:3,
            image: image3,
            title: 'Calling all Benilde Alumni',
            desc: 'The Trailblazers-Benilde Graduate Tracer Study is a campaign that aims to expand our community of alumni and achievers. With the tracer study, we can get better at communicating with our alumni. We can support our alumni by providing a quality network system to connect with their fellow Benildeans, better assess our graduates’ employability, and improve our curiculum, thus being globally competitive',
            button: 'SIGN UP AND JOIN OUR NETWORK'
        },

        {
            id:4,
            image: image4,
            title: '[HIFI] Incubation: müü.håå SS 2021',
            desc: 'From Benilde Fashion Design and Merchandising alumni to fashion forward founders, Mamuro Oki and Abraham A. Gurdian of Ha.Mu Studios, launches müü.håå SS 2021',
            button: 'See more information'   
        },

        {
            id:5,
            image: image5,
            title: 'Benilde opens Senior High School programs',
            desc: 'The College is set to open its very own Benilde Senior High School, effective Academic Year 2021 to 2022',
            button: ' See more information'
        }

    ]
    return (
       <ReactElasticCarousel className="background-black" itemsToShow={1} enableAutoPlay autoPlaySpeed={4000}>
           

               {Item.map((item) => (
                   
                   <div className="d-flex flex-column justify-content-center" key={item.id}>
                        <Container className="p-5">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-6">
                                    <img src={item.image}  className="img-fluid" alt="" />
                                </div>

                                <div className="col-md-6">
                                    <h2 className="title mt-5 text-center text-md-start">{item.title}</h2>
                                    <p className="desc mb-3">{item.desc}</p>
                                    <button className="btn btn-custom-dark text-uppercase">{item.button}</button>
                                </div>
                            </div>
                        </Container>
                    </div>
               ))}
              
          
       </ReactElasticCarousel>
    )
}

export default Carousel
