import React from 'react'
import fetch from 'isomorphic-unfetch';
import { useObserver } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { StoreContext, start, stop, updateProduct } from '../store'
import Clock from '../components/Clock'
import ProductTile from '../components/ProductTile'
import Button from '../components/Button'

const Index = (props) => {

    const store = useContext(StoreContext)

    useEffect(() => {
        start()
        updateProduct(props.products)
        return stop
    }, [])

    const handle = (evt) => {
        // evt.preventDefault();
        console.log("aa")
    }

    return (
        <div>
        <h1>Test product</h1>
        {useObserver(() => (
            <div>
            <Clock lastUpdate={store.lastUpdate} light={store.light} />
            
            <ProductTile products={store.product}/>
            </div>
        ))}
        <Button />
        </div>
    )
}


Index.getInitialProps = async function() {
    const data = await getResult();
    // console.log(data);
    return { "products": data};
};


const getResult = async () => {
    const url = 'https://api.myjson.com/bins/133yrg';
    const response = await fetch(url);
    return await response.json(); // parses JSON response into native JavaScript objects
}



export default Index;