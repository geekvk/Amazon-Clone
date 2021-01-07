import React, { useEffect } from "react";
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import {auth} from "./Firebase";
import { useStateValue} from "./StateProvider";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe('pk_test_51I6KaTGddgr1e9pZXnp9hZm83xIoqkbf11ziqpOuOC7ZwSM7KJySCLGzhtffH9kAyYFgYvuBT0yNHN3fpZv2kmRr00p350MBUx');

// https://medium.com/cleverprogrammer/amazon-clone-using-react-the-ultimate-guide-fba2b36f3458
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
        auth.onAuthStateChanged(authUser => {
          console.log("AUTH USER >>>", authUser);
          if(authUser)
          {
            // used logged  in
            
            dispatch({
              type: 'SET_USER',
              user: authUser

            })
          }else{
            // user logged out
           
            dispatch({
              type:'SET_USER',
              user: null
            })
          }
        })
  }, [])
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/login">
            <Login />

          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />    
            </Route> 
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
            </Route>  
            <Route path="/">npm i
            <Header />
              <Home />
            </Route>        
          </Switch>
      
     
    </div>

    </Router>
    
  );
}

export default App;
