import React from 'react'
import "./Home.css"
import Product from "./Product.js";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"  
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt="" />

                    <div className="home__row">
                        <Product 
                            id={231123}
                            title="The lean startup fdgdfgr ewerghfghtyzzdfgmdfg f ff rewret  sdf"  
                            price={29.99} 
                            image ="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                            rating = {5}
                            />
                        <Product 
                            id = {22341}
                            title="DualSense Wireless Controller"
                            price={69.96}
                            image="https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SX342_.jpg"
                            rating={5}
                            />
                        <Product 
                            id={2231}
                            title="Cyberpunk 2077 - PlayStation 4"
                            price={50.45}
                            image="https://images.milled.com/2020-10-15/iGVvHqBGTjOmLKTX/hEQSdvRB6ofC.gif"
                            rating={3}
                            />
                        
                    </div>

                    <div className="home__row">
                    <Product 
                            id="{231123}"
                            title="The lean startup fdgfhegfhgfhhzgryfghfgh"  
                            price={29.99} 
                            image ="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                            rating = {5}
                            />
                        <Product 
                            id = "{22341}"
                            title="DualSense Wireless Controller"
                            price={69.96}
                            image="https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SX342_.jpg"
                            rating={5}
                            />
                        <Product 
                            id="{2231}"
                            title="Cyberpunk 2077 - PlayStation 4"
                            price={50.45}
                            image="https://images.milled.com/2020-10-15/iGVvHqBGTjOmLKTX/hEQSdvRB6ofC.gif"
                            rating={3}
                            />
                        <Product 
                            id = "{22341}"
                            title="DualSense Wireless Controller"
                            price={69.96}
                            image="https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SX342_.jpg"
                            rating={5}
                        />
                    </div>
                    <div className="home__row">
                        <Product 
                            id="{2231}"
                            title="Cyberpunk 2077 - PlayStation 4"
                            price={50.45}
                            image="https://images.milled.com/2020-10-15/iGVvHqBGTjOmLKTX/hEQSdvRB6ofC.gif"
                            rating={3}
                            />
                    </div>

            </div>
        </div>
    )
}

export default Home
