// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <>
//       <div className="nav">
//         <ul>
//           <li>home</li>
//           <li>about</li>
//           <li>information</li>
//           <li>contact us</li>
//           <li>help</li>
//         </ul>
//       </div>
//     </> 

//   );
// }




// export default App;



// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Component from './Compo';
// import Car from './class';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <Car /> */}
//     {/* <App /> */}
//     {/* <Component name="shivam soni" age="25"/> */}
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import { Add, Subt, Multi, Del} from './onecom';

// const heading = {
//     color: 'red'
// }

// function App() {
//     return (
//         <>
//             <h1 style={heading}>{Add (10, 20)}</h1>
//             <h1 className="hi">{Subt (20, 10)}</h1>
//             <h1>{Multi (2,5)}</h1>
//             <h1>{Del (11, 2)}</h1>

//         </>
//     );
// }







// import React from 'react';
// import FetchNews from './Component/FetchNews';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Details from './Component/Details';

// function App() {
//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<FetchNews />} />
//                     <Route path="/Details" element={<Details />} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );
// }


// export default App;



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import ContactUs from './Component/ContactUs';
import User from './Component/User';
import ProductApi from './Component/productApi';
import ProductDetail from './Component/productDetailsApi';
// import ShowData from './Component/ShowData';
// import FakeApi from './Component/fakeapi';
import PageNotFound from './Component/pageNotFound';
// import FetchNews from './Component/FetchNews';
// import Services from './Component/Services';
// import Service from './Component/Service';


function App() {
    return (
        <>
            {/* <FakeApi /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={About} />
                    <Route path="/product" element={<ProductApi />}>
                        <Route path="/productdetail/:id" element={<ProductDetail />} />
                    </Route>
                    <Route path="/productapi" element={<ProductApi />} />

                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/user" element={<User />} />
                    <Route path="*" element={<PageNotFound />} />
                   
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;



