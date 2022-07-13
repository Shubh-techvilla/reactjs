import axios from "axios";
import React, {useState} from "react";
const API = 'https://fakestoreapi.com/products';

const ProductApi = () =>{

    const[products, setProducts] = useState([]);



    const getProducts = ()=>{
        axios.get(API).then((response) => {
            console.log(response);
            // setProducts(response.data);
        })}
    
    return(
        <>
        <h1>i am product Api</h1>
        <button onClick={getProducts}>click</button>
        </>
    );
}

export default ProductApi;