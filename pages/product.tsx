import React from 'react'
import fetch from 'isomorphic-unfetch';
// import { useObserver } from 'mobx-react-lite'
import { inject, observer, useObserver } from 'mobx-react'
import { useContext, useEffect } from 'react'
// import { StoreContext, start, stop, updateProduct } from '../store_old'
import { IStore } from '../stores/store'
import { Clock } from '../components/Clock'
import ProductTile from '../components/ProductTile'
import Button from '../components/Button'

const Product = (props, pageProps) => {

    console.log(props);
    console.log(pageProps);
    console.log(this);
    return (<h1>Produxts</h1>)
    // const store = useContext(StoreContext)

    // useEffect(() => {
    //     props.start()
    //     props.updateProduct(props.products)
    //     return stop
    // }, [])

    // const handle = (evt) => {
    //     // evt.preventDefault();
    //     console.log("aa")
    // }

    // return (
    //     <div>
    //     <h1>Test product</h1>
    //     {useObserver(() => (
    //         <div>
    //         <Clock lastUpdate={props.store.lastUpdate} light={props.store.light} />
            
    //         <ProductTile products={props.store.product}/>
    //         </div>
    //     ))}
    //     <Button />
    //     </div>
    // )
}


Product.getInitialProps = async function() {
    const data = await getResult();
    // console.log(data);
    return { "products": data};
};


const getResult = async () => {
    const url = 'https://api.myjson.com/bins/133yrg';
    const response = await fetch(url);
    return await response.json(); // parses JSON response into native JavaScript objects
}



export default Product;