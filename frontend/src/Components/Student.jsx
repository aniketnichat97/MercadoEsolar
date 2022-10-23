import React from 'react';
import Product from './Product';
import Club from './Club';
import Advertisement from './advertisement';

class Student extends React.Component {

    render(){

        return(
            <>
            
            <Product/>
            <Club/>
            <Advertisement/>
            </>
            
        );
    }

}
export default Student;