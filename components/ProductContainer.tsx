
import React from 'react';
import { useRootData } from '../hook';

export const ProductTile: React.FC<{ products: string[] }> = ({ products }) => {
    return (
        <ul>
        {products.map ((item:any, key:any) => 
            <li key={key}>{item.name}</li>
        )}
        </ul>
    )
}
    
export const ProductContainer = () => {
    let products = useRootData(store => store.updatedProducts);
    products = (products.constructor !== Array)?JSON.parse(products):products
    return <ProductTile products={products} />
}

export default ProductContainer;