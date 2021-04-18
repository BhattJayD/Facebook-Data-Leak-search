import './App.css';
import Header from "./components/header";
import Search from "./components/Search";
import About from "./components/about"
import React, { useState } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom"
import image1 from './Facebook.JPG';
import image2 from './Facebook1.JPG';


toast.configure()


function App() {
  const [dataa, setData] = useState([])
  const SearchNumber = (search) => {
    const number = { search }
    fetch(`/search?${number.search}`, {
      method: "GET"
    })
      .then(Response => Response.json()
        .then(daa => {
          setData(daa.response)
        }))
  }
  // const data=JSON.stringify(dataa)
  // console.log(dataa);
  return (
    <>
    <Router>
    <Header title="Search Data Leak" />
    <Switch>
          <Route exact path="/">
            <p style={{padding:"1px",width: 'calc(500px / 2)',alignItems: "center",margin: "0 auto",fontSize:20,color:"#ce1f6a"}}>Facebook Data Leak Search</p>
          <img style={{padding:"10px",width: 'calc(1000px / 2)',alignItems: "center",margin: "0 auto"}} src={image1} alt="Facebook evil logo "/>
          <img style={{padding:"10px",width: 'calc(1000px / 2)',alignItems: "center",margin: "0 auto"}} src={image2} alt="Facebook evil logo "/>
          </Route>
          <Route exact path="/about">
          <About/>            
          </Route>
          <Route exact path="/search" >
          <Search SearchNumber={SearchNumber} />
                    <div style={{color:"red"}}>{toast.success(dataa,{position: toast.POSITION.BOTTOM_CENTER, autoClose:15000})
                    ?<h3 style={{ padding: "30px", width: "500px", margin: "0 auto" }}>{dataa}</h3>
                    :""}
                    
                    </div>

        
          </Route>
        </Switch>
           </Router>
    </>

  );
}

export default App;
