import React from 'react';

class addAdvertisement extends React.Component{

    render(){
        return(

            <>
            <div className='signupform'>
                <form action='post' className='form'>
                    <h2>Post your Advertisement</h2>

                    <div className='inputContainer'>
                        <label>Advertisement Title:</label>
                        <input className='input-box' type='text'/>
                    </div>
                    <div className='inputContainer'>
                        <label>Advertisement description:</label>
                        <input className='input-box' type='text'/>
                    </div>
                    <div className='inputContainer'>
                        
                        <input className='input-box' type='submit' value={submit}/>
                    </div>


                </form>

            </div>
            
            </>

        );
    }

}
export default addAdvertisement;