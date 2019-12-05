import { useContext, useEffect } from 'react'
// import { StoreContext, updateProduct } from '../store_old'
let flag = true;

const Button = () => {
    
    // const store = useContext(StoreContext)

    const handle = async(evt) => {
        
        const products = await getResult();
        console.log("products via button", products)
        this.props.updateProduct(products);
    }

    return (
        <button onClick={handle}>Refresh Product list</button>
    )
    // return(<></>)
}

const getResult = async () => {
    flag = !flag;
    const url = (flag)?'https://api.myjson.com/bins/esfh0': 'https://api.myjson.com/bins/16pvgk';
    const response = await fetch(url);
    return await response.json(); // parses JSON response into native JavaScript objects
}


export default Button;