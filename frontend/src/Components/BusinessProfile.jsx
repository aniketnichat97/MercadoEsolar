import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import AddProduct from './addProduct';
import DeleteProduct from './DeleteProduct';
import AddAdvertisement from './addAdvertisement';
import DeleteAdd from './DeleteAdd';

class BusinessProfile extends React.Component{

    render(){
        return(

            <>
                 <h2> My profile</h2>
            <div className='card'>
                {/* <img src={} style={{}}/> */}
                <Router>
                <p>John Doe</p>
                <p>Student</p>
                <p>johdoe@gmail.com</p>
                <p>UTA</p>
                <a href='/addproduct'>Add product</a><br/>
                <a href='/deleteproduct'>Delete Product</a><br/>
                <a href='/postadd'>Post Advertisemnet</a><br/>
                <a href='/deleteadd'>delete Advertisemnet</a><br/>



                <Routes>
                <Route path='/addproduct' element={<AddProduct/>}/>
                <Route path='/postadd' element={<AddAdvertisement/>}/>
                <Route path='/deleteproduct' element={<DeleteProduct/>}/>
                <Route path='/deleteadd' element={<DeleteAdd/>}/>



                </Routes>
                </Router>
               

            </div>
            </>
        );
    }
}
export default BusinessProfile;