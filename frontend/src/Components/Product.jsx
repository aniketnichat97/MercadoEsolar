import React from "react";
import productImage1 from '../images/product1.jpg';
import productImage2 from '../images/product2.jpg';
import productImage3 from '../images/product3.jpg';


class Product extends React.Component{

    render(){


        const myStyle ={width:'auto' ,height:'100%'};

        return(
            <div className="row">
            <div className="column">
              <div className="card">
                <img src={productImage1} style={myStyle}/>
                <div className="container">
                  <h2>Chair and table</h2>
                  <p className="price">$20</p>
                  <p>Visit www.mercadoescolar.com</p>
                  <p><button className="button">Add to Cart</button></p>
                </div>
              </div>
            </div>
          
            <div className="column">
              <div className="card">
              <img src={productImage2} style={myStyle}/>
                <div className="container">
                  <h2>TV</h2>
                  <p>$50</p>
                  <p>Visit www.mercadoescolar.com</p>
                  <p><button className="button">Add to Cart</button></p>
                </div>
              </div>
            </div>
            
            <div className="column">
              <div className="card">
              <img src={productImage3} style={myStyle}/>
                <div className="container">
                  <h2>Shirts</h2>
                  <p>$60</p>
                  <p>Visit www.mercadoescolar.com</p>
                  <p><button className="button">Add to Cart</button></p>
                </div>
              </div>
            </div>

            </div>


        );

    }


}

export default Product;

