import axios from "axios";
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "../App.css";

const API = 'https://fakestoreapi.com/products';

// this is the latest component i am on working 13/07/22

const Product = () => {

    const [products, setProducts] = useState([]);



    const getProducts = () => {
        axios.get(API).then((response) => {
            // console.log(response);
            setProducts(response.data);
        })
    }

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-4">
                        <button className='btn btn-primary' onClick={getProducts}>productItems</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-3">
                    {
                        products.map((value) => {
                            return (
                                <div key={value.id} className="col-lg-4 col-md-6">
                                    <h4 className="blockquote-footer">{value.category}</h4>
                                    <div className="card" style={{ width: "15rem" }}>
                                        <Link to={`/productdetail/${value.id}`}>
                                            <img src={value.image} className="card-img-top" alt="..." />
                                        </Link>
                                        <div className="card-body">
                                            <span className="d-flex justify-content-between">
                                                <h3 className="m-0">₹{value.price}</h3>
                                                <h6 className="m-1">{value.rating.rate}* ratings</h6>
                                            </span>
                                            <span className="d-flex text-muted">
                                                <h4>{value.rating.count}</h4>&nbsp;
                                                <h5 className="mt-1">items in a stock</h5>
                                            </span>
                                            <h5 className="card-title line-br">{value.title}</h5>
                                            <p className="card-text">{value.description}</p>
                                            <Link to={`/productdetail/${value.id}`} className="btn btn-primary btn-sm">
                                            Read more...
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Product;