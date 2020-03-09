import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

class App extends React.Component {
    render(){
        return (
           <div className='container'>
               <Popular/>
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