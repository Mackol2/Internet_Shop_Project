import React from 'react';
import '../styles/header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Header = ({counter, setBucketVisible}) => {
    const goHomePage = () => {
        window.location = 'http://localhost:3000/';
    };
    const contactNumber = '222 501 777';

    return (
        <header className='header'>
            <Container>
                <Row>
                    <Col>
                        <div className='logo'>
                            <img onClick={goHomePage} src='https://www.ceramiq.pl/static/img/custom/logo.png'
                                 alt="logo"/>
                        </div>
                    </Col>
                    <Col>
                        <div className='contact'>
                            <p>Zadzwoń: {contactNumber}</p>
                        </div>
                    </Col>
                    <Col className='space'>
                        <div className='troley'>
                            <div onClick={setBucketVisible} className='trolleyContainer'>
                                <div className='trolleyIcon'>
                                    <p className='counter'>{counter}</p>
                                </div>
                            </div>
                            <div onClick={setBucketVisible} className='toTheCash'>
                                <p>do kasy ></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}
