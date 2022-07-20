import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams(); //string
    // console.log(useParams());
    // console.log(id);


    useEffect(() => {
        getProduct()
    });

    function getProduct() {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            const data = Object.values(response);
            // console.log(response);
            // console.log(data);
            const newProduct = data.find((item) => item.id === parseInt(id));
            // console.log(newProduct);
            // console.log(response.data);
            setProduct(newProduct);
            // });
            // const filteredData = data.filter(function (item) {
            //     return item.Search_volume >=200;
               
            });
            // setProduct(filteredData);
            // console.log(filteredData);


        // });

    }

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-4">
                        {/* <button className='btn btn-primary' onClick={getProduct}>Items</button> */}
                    </div>
                </div>
            </div>

            <div key={product.id} className="col-lg-4 col-md-6">
                <h4 className="blockquote-footer">{product.category}</h4>
                <div className="card" style={{ width: "20rem" }}>
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="d-flex justify-content-between">
                            <h3 className="m-0">₹{product.price}</h3>
                            {/* <h6 className="m-1">{product.rating.rate}* ratings</h6> */}
                        </span>
                        <span className="d-flex text-muted">
                            {/* <h4>{product.rating.count}</h4>&nbsp; */}
                            <h5 className="mt-1">items in a stock</h5>
                        </span>
                        <h5 className="card-title line-br">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        {/* <a href={product.id} className="btn btn-primary btn-sm">Read more...</a> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;