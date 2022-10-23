import React from 'react';

class DeleteAdd extends React.Component{

    render(){

        return(
            <>
            <div className='add-list'>
                <p>Adds</p>
                <table>
                <tr>
                    <th >Advertisements</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>Clothing</td>
                    <td><button className="delete">Delete</button></td>
                </tr>
                <tr>
                    <td>Books</td>
                    <td><button className="delete">Delete</button></td>
                </tr>
                <tr>
                    <td>Your Routines</td>
                    <td><button className="delete">Delete</button></td>
                </tr>
            </table>
        
            </div>
            
            </>
        );
    }

}
export default DeleteAdd;