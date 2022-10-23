import React from 'react';
import AddProduct from './addProduct';
import DeleteProduct from './DeleteProduct';
import DeleteAdd from './DeleteAdd';
import DeleteClub from './DeleteClub';
import LeaveClub from './LeaveClub';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddAdvertisement from './addAdvertisement';


class StudentProfile extends React.Component{

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
                <a href='/history'>Purchase History</a><br/>
                <a href='/deleteclub'>Leave?delete club</a><br/>
                <a href='/postadd'>Post Advertisemnet</a><br/>
                <a href='/deleteadd'>delete Advertisemnet</a><br/>



                <Routes>
                <Route path='/addproduct' element={<AddProduct/>}/>
                <Route path='/postadd' element={<AddAdvertisement/>}/>
                <Route path='/deleteproduct' element={<DeleteProduct/>}/>
                <Route path='/deleteadd' element={<DeleteAdd/>}/>
                <Route path='/deleteclub' element={<DeleteClub/>}/>
                <Route path='/leaveclub' element={<DeleteProduct/>}/>



                </Routes>
                </Router>
               

            </div>
            </>

        );
    }



}
export default StudentProfile;