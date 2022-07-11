// import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import "../App.css";

// export default function FetchNews() {

//     const [news, setNews] = useState([]);

//     function fetchNews() {
//         // console.log("clicked");
//         axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9f15837d0bf94e028496e6c920ecbe82")
//             .then((response) => {
//                 // console.log(response);
//                 setNews(response.data.articles);
//             });
//     }
//     return (
//         <>
//             <div className="container my-3">
//                 <div className="row">
//                     <div className="col-4">
//                         <button className='btn btn-primary' onClick={fetchNews}>FetchNews</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="row g-3">
//                     {
//                         news.map((value) => {
//                             return (
//                                 <div className="col-lg-4 col-md-6">
//                                     <div className="card" style={{ width: "18rem" }}>
//                                         <img src={value.urlToImage} className="card-img-top" alt="..." />
//                                         <div className="card-body">
//                                             <h5 className="card-title line-br">{value.title}</h5>
//                                             <p className="card-text">{value.description}</p>
//                                             <a href="#" className="btn btn-primary">Main</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })
//                     }
//                 </div>
//             </div>
//         </>
//     );
// }