import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default class App extends React.Component {
    render() {
        return ( 
            <div className="container">
                <div className="mt-2 mb-5">Todo creation</div>
                <div>
                    <div className="todo-item p-3 mb-5 d-flex justify-content-between rounded">
                        <div>
                            <h5>Item 1</h5>
                            <p>A short description</p>
                        </div>
                        
                        <button className="btn btn-success">Completed</button>
                    </div>
                    <div className="todo-item p-3 mb-5 d-flex justify-content-between rounded">
                        <div>
                            <h5>Item 2</h5>
                            <p>A short description</p>
                        </div>
                        
                        <button className="btn btn-danger">Not Completed</button>
                    </div>
                </div>
            </div>
        );
    }
}
