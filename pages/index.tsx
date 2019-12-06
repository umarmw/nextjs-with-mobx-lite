import React, { useEffect } from 'react'
import fetch from 'isomorphic-unfetch';
import Button from '../components/button';
import ProductContainer from '../components/ProductContainer';
import { useRootData } from '../hook';

const Index = (props) => {

    const { setProducts } = useRootData(store => ({
        setProducts: store.setProducts
    }));
    
    useEffect(() => {
        setProducts(JSON.stringify(props.products));
    }, [])

    return (
        <div>
            <h1>Test product</h1>
            <Button />
            <ProductContainer />
        </div>
    )
}


Index.getInitialProps = async function() {
    const data = await getResult();
    return { "products": data};
};


const getResult = async () => {
    const url = 'https://api.myjson.com/bins/133yrg';
    const response = await fetch(url);
    return await response.json(); // parses JSON response into native JavaScript objects
}

export default Index;