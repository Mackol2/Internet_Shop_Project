import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from './Shop Project/header'
import {Products} from "./Shop Project/Products";
import {Bucket} from './Shop Project/Bucket'

function App() {
    const [bucket, setElement] = useState([]);
    const [counter, setCounter] = useState(0);
    const sendToBucket = (el) => {
        setElement([...bucket, {id: el.id, name: el.name, price: el.price, quantity: el.quantity, img: el.img}]);
        setCounter(prevState => prevState + 1);
    };

    const [visible, setVisible] = useState('false');
    const setBucketVisible = () => {
        if (visible === 'false') {
            setVisible('true');
        }
        if (visible === 'true') {
            setVisible('false');
        }
    };

    return (
        <div>
            <Header counter={counter} setBucketVisible={setBucketVisible}
                    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                    minBreakpoint="xxs"/>
            <Products send={sendToBucket}
                      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                      minBreakpoint="xxs"/>
            <Bucket visible={visible} bucket={bucket}/>
        </div>

    );
}

export default App;
