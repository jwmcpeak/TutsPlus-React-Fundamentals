import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            completed: props.completed
        };
    }
    render() {
        let {title, description} = this.props;
        let completed = this.state.completed;
        let descriptionText = (!description) ? 'default text' : description;
        let completedText = (completed) ? 'Completed' : 'Not Completed';
        let completeClass = (completed) ? 'success' : 'danger';
        let buttonClass = `btn btn-${completeClass}`;

        console.log('render');

        return ( 
            
            <div className="todo-item p-3 mb-5 d-flex justify-content-between rounded">
                <div>
                    <h5>{title}</h5>
                    <p>{descriptionText}</p>
                </div>
                
                <button 
                    className={buttonClass}
                    onClick={() => this.setState({completed: !completed})}
                >{completedText}</button>
            </div>
                    
        );
    }
}
