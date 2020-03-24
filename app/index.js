import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'

class App extends React.Component {
    render(){
        return (
           <div className='container'>
               {/* <Popular/> */}
               <Battle />
           </div> 
        )
    }
}


ReactDOM.render(
    //React Element
    <App />,
    //where to render element to
    document.getElementById('app')

)