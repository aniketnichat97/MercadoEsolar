import React from 'react';

class StudentProfile extends React.Component{

    render(){
        return(

            <>
            <h2> My profile</h2>
            <div className='card'>
                {/* <img src={} style={{}}/> */}
                <p>John Doe</p>
                <p>Student</p>
                <p>johdoe@gmail.com</p>
                <p>UTA</p>

            </div>
            </>

        );
    }



}
export default StudentProfile;