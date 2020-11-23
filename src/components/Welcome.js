// write code for Welcome component here
import React from 'react';
import ReactDOM from 'react-dom';

const Greeting= (props) =>{
  return (
    <>
  <h1>Hey!,{props.name}</h1>
    <h2>Welcome to Newton School</h2>
    </>
    );
}

ReactDOM.render(<Greeting />, document.getElementById('root'));
