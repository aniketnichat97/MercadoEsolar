import React from 'react';

class DeleteClub extends React.Component{

    render(){
        return(
            <>
            <div className='club-list'>
                <p>CLubs</p>
                <table>
            <tr>
                <th >Clubs</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>Latest Home Decorations</td>
                <td><button className="delete">Delete</button></td>
            </tr>
            <tr>
                <td>Elctronics and Gadgets</td>
                <td><button className="delete">Delete</button></td>
            </tr>
            <tr>
                <td>Fashion and Styles</td>
                <td><button className="delete">Delete</button></td>
            </tr>
        </table>
            </div>

            </>
        );
    }
}
export default DeleteClub;