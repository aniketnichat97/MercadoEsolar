import React from 'react';
import addImage1 from '../images/jordan.jfif';
import addImage2 from '../images/iphone.jfif';
import addImage3 from '../images/mcd.jfif';


class Advertisement extends React.Component {

    render(){

        const myStyle ={width:'auto' ,height:'100%'};
        const myStyle1 ={width:'100%' ,height:'100%'};


        return(


        <div className="row">
        <div className="column">
        <div className="card">
            <img src={addImage1}  />
            <div className="container">
                <h2>New Air jordan</h2>
                <p > Jordan Release Dates 2022. </p> 
                <p >Air Jordan 6 “Red Oreo” ...</p>  
                <p>Jordan Zion 2 “Hope Diamond” ...</p>
              <p ><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      
        <div className="column">
        <div className="card">
            <img src={addImage2}  />
            <div className="container">
            <h2>New iphone 14 pro</h2>
                <p > iphone Release Dates Oct 2022.</p>  
                  <p>20% with all colors</p>  
                  <p >with new features:</p>
              <p ><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        
        <div className="column">
        <div className="card">
            <img src={addImage3}  />
            <div className="container">
            <h2>New McPlant Burger</h2>
                <p >  Release Dates 2022.</p>  
                  <p >Mcdonalds Releases</p>  
                  <p > Vegetarian Burger...</p>
                <p>Jordan Zion 2 “Hope Diamond” ...</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        
      </div>
            


            

        );

    }

}

export default Advertisement;

