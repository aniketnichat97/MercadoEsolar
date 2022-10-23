import React from 'react';

class DeleteProduct extends React.Component{

    render(){

        return(
            <>
            <div className='product-list'>
                <p>Products</p>
                
            <table>
            <tbody>
            <tr>
                <th >Products</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>Sony Monitor &nbsp $150</td>
                <td><button className="delete">Delete</button></td>
            </tr>
            <tr>
                <td>Home Decor &nbsp $300</td>
                <td><button className="delete">Delete</button></td>
            </tr>
            <tr>
                <td>Kitchen Ware &nbsp $80</td>
                <td><button className="delete">Delete</button></td>
            </tr>
            </tbody>
            </table>
        
            </div>
            
            </>
        );
    }

}
export default DeleteProduct;