
import React from 'react';
import { useRootData } from '../hook';

let flag = true;

const Button: React.FC = () => {

    const { setProducts } = useRootData(store => ({
        setProducts: store.setProducts
    }));

    const handle = async() => {
        const products = await getResult();
        setProducts(JSON.stringify(products));
    }

    return (
        <button onClick={handle}>Refresh Product list</button>
    )
}

const getResult = async () => {
    flag = !flag;
    const url = (flag)?'https://api.myjson.com/bins/esfh0': 'https://api.myjson.com/bins/16pvgk';
    const response = await fetch(url);
    return await response.json();
}

export default Button;