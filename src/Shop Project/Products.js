import React, {useEffect, useState} from "react";
import '../styles/products.css';
import Button from 'react-bootstrap/Button';


export const Products = ({send}) => {
    const [data, setData] = useState(false);

    useEffect(() => {
        const API = "http://localhost:4000";

        fetch(`${API}/db`)
            .then(response => response.json())
            .then(data => {
                setData((data));
            });
    }, []);

    if (data !== false) {
        const elements = [...data.products].map((el) => {
            return (
                <div className='box' key={el.id}>
                    <img src={el.img} alt=""/>
                    <h2>{el.name}</h2>
                    <p>{el.price} zł</p>
                    <p>{el.quantity} szt.</p>
                    <Button variant="outline-warning" onClick={() => send(el)}>Add to bucket</Button>
                </div>
            )
        });
        return (
            <div className='flexContainer'>
                {elements}
            </div>
        )
    }
}