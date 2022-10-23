import React from 'react';

class addProduct extends React.Component{

    render(){
        return(

            <>
                <div className='signupform'>
                    <form action="post" className='form'>
                        <div className='inputContainer'>
                            <label>Product Name</label>
                            <input className='input-box' type ="text"/>

                        </div>
                        <div className='inputContainer'>
                            <label>Selling Price</label>
                            <input className='input-box' type ="text"/>

                        </div>
                        <div className='inputContainer'>
                            <label>Quantity</label>
                            <input className='input-box' type ="text"/>

                        </div>
                        <div className='inputContainer'>
                            <label>Product Detail</label>
                            <input className='input-box' type ="text"/>

                        </div>
                        <div className='inputContainer'>
                            <input className='input-box' type='submit' value='submit'/>
                        </div>
                        
                    </form>
                </div>

            </>


        );
    }

}
export default addProduct;