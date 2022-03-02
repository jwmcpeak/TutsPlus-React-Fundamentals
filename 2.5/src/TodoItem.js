import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoItem extends React.Component {
    render() {
        let {title, description, completed} = this.props;
        let descriptionText = (!description) ? 'default text' : description;
        let completedText = (completed) ? 'Completed' : 'Not Completed';
        let completeClass = (completed) ? 'success' : 'danger';
        let buttonClass = `btn btn-${completeClass}`;

        return ( 
            
            <div className="todo-item p-3 mb-5 d-flex justify-content-between rounded">
                <div>
                    <h5>{title}</h5>
                    <p>{descriptionText}</p>
                </div>
                
                <button className={buttonClass}>{completedText}</button>
            </div>
                    
        );
    }
}
