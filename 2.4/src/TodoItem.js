import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoItem extends React.Component {
    render() {
        return ( 
            
            <div className="todo-item p-3 mb-5 d-flex justify-content-between rounded">
                <div>
                    <h5>{this.props.title}</h5>
                    <p>{(!this.props.description) ? 'default text' : this.props.description}</p>
                </div>
                
                <button className="btn btn-success">{(this.props.completed === true) ? 'Completed' : 'Not Completed'}</button>
            </div>
                    
        );
    }
}
