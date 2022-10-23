import React from 'react';
import clubImage1 from '../images/club1.png';
import clubImage2 from '../images/club2.jfif';
import clubImage3 from '../images/club3.jfif';


class Club extends React.Component {

    render(){

        const myStyle ={width:'auto' ,height:'100%'};
        const myStyle1 ={width:'100%' ,height:'100%'};


        return(


        <div className="row">
        <div className="column">
          <div className="card">
                 <img src={clubImage1} style={myStyle1}/>
            <div className="container">
              <h2>Photography</h2>
              <p>Club deatails </p>
              <p><button className="button">Join the club</button></p>
            </div>
          </div>
        </div>
      
        <div className="column">
          <div className="card">
          <img src={clubImage2} style={myStyle}/>
            <div className="container">
                <h2>Sports</h2>
                <p>Club details </p>
                <p><button className="button">Join the club</button></p>
              </div>
          </div>
        </div>
        
        <div className="column">
          <div className="card">
          <img src={clubImage3} style={myStyle}/>
            <div className="container">
                <h2>Narthana</h2>
                <p>Club details </p>
                <p><button className="button">Join the club</button></p>
              </div>
          </div>
        </div>
        
      </div>
            


            

        );

    }

}

export default Club;

