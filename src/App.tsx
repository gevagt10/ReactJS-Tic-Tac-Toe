import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BoardComponent from './board/BoardComponent';
import 'antd/dist/antd.css';

const Welcome = (props: { name: string }) => {
    return <h1>Hello, {props.name}</h1>;
}


const App = () => {
    return (
        <div className="App">
            <BoardComponent />
            {/*<div className="App-body">*/}

                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                {/*<p>*/}
                {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    Learn React*/}
                {/*</a>*/}
                {/*<Welcome name={name}/>*/}
                {/*<button onClick={() => setName('Tam')}>Click me</button>*/}
            {/*</div>*/}
        </div>
    );
}


export default App;
