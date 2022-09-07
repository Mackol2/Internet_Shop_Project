import React from "react";
import '../styles/bucket.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const Bucket = ({bucket, visible}) => {
    let totalPrize = 0;
    bucket.forEach((el) => {
        totalPrize = totalPrize + el.price * el.quantity;
        return totalPrize;
    });

    const updateMagazineBuy = () => {
        bucket.forEach((el) => {
            const API = "http://localhost:4000";

            const data = {
                id: el.id,
                name: el.name,
                quantity: el.quantity -1,
                price: el.price,
                img: el.img
            };

            fetch(`${API}/products/${el.id}`, {
                method: "PATCH",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
        })
        (setTimeout(function(){
            window.location.reload();
        },100));
    };

    const clearBucket = () => {
      alert('Koszyk wyczyszczono');
        setTimeout(function(){
            window.location.reload();
        },100)
    };

    const elements = bucket.map((el) => {
        return (
            <div className='box2'>
                <Container>
                    <Row>
                        <Col>
                            <h2>{el.name}</h2>
                        </Col>
                        <Col className='space'>
                            <p>Cena: {el.price} zł</p>
                        </Col>
                        <Col className='space'>
                            <p>Ilość: 1 szt.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    });

    if (visible === 'true') {
        return (
            <div className='bucket'>
                {elements}
                <Container>
                    <Row>
                        <Col>
                            <h3 className='summary'>Podsumowanie: </h3>
                        </Col>
                        <Col>
                            <p className='summary2'>Cena całkowita: {totalPrize} zł</p>
                        </Col>
                    </Row>
                </Container>
                <div className="btnMy">
                    <Button onClick={clearBucket} variant="secondary" size="lg">Anuluj zakupy</Button>
                    <Button onClick={updateMagazineBuy} variant="primary" size="lg">Kup teraz</Button>
                </div>

            </div>
        )
    }


}