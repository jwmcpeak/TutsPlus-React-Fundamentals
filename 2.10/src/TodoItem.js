import React from 'react';
import ReactDOM from 'react-dom';

export default function TodoItem({title, description, completed, onToggleCompleted}) {

    let descriptionText = (!description) ? 'default text' : description;
    let completedText = (completed) ? 'Completed' : 'Not Completed';
    let buttonClass = `btn btn-${(completed) ? 'success' : 'danger'}`;

    return ( 
        
        <div id="item-id" className="todo-item p-3 mb-5 d-flex justify-content-between rounded">
            <div>
                <h5>{title}</h5>
                <p>{descriptionText}</p>
            </div>
            
            <button 
                className={buttonClass}
                onClick={() => onToggleCompleted()}
            >{completedText}</button>
        </div>
                
    );
    
}
