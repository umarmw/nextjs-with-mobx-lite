const ProductTile = (props) => {
    let products = null;
    if(props.products){
        products = JSON.parse(props.products)
    }
    
    return (
        products  && 
        <ul>
        {products.map ((item, key) => 
            <li key={key}>{item.name}</li>
        )}
        </ul>
    )
    // return(<></>)
}

export default ProductTile;