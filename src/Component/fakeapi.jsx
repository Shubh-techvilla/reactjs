// import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import "../App.css";

// export default function FakeApi() {

//     const [fake, setFake] = useState([]);

//     function fakeApi() {
//         // console.log("clicked");
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => {
//                 // console.log(response);
//                 setFake(response.data);
//             });


//             // axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9f15837d0bf94e028496e6c920ecbe82")
//             // .then((response) => {
//             //     // console.log(response);
//             //     setNews(response.data.articles);
//             // });

//     }
//     return (
//         <>
//             <div className="container my-3">
//                 <div className="row">
//                     <div className="col-4">
//                         <button className='btn btn-primary' onClick={fakeApi}>FakeApi</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="row g-3">
//                     {
//                         fake.map((value) => {
//                             return (
//                                 <div key={value.id} className="col-lg-4 col-md-6">
//                                     <div className="card" style={{ width: "18rem" }}>
//                                         <div className="card-body">
//                                             <h3>{value.userId}</h3>
//                                             <h5 className="card-title line-br">{value.title}</h5>
//                                             <p className="card-text">{value.body}</p>
//                                             <a href={value.id} className="btn btn-primary">Read more...</a>
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