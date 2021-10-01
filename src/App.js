import { render } from '@testing-library/react';
import React from 'react'
import Header from './Header';
import Main from './Main';


class AppC extends React.Component {
    render(){
        return <div>
        <Header/>
        <Main/>
        <Main/>
    
       
        

   </div>

    };
}; 


const App = () =>{
    return <div>
         <Header/>
         <Main/>
         <Main/>
        
        
         

    </div>
};


export default AppC;

