import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';
import './App.css';

export default class App extends React.Component {
    render() {
        return ( 
            <div className="container">
                <div className="mt-2 mb-5">Todo creation</div>
                <div>
                    <TodoItem 
                        title="Item 1" 
                        description="Item 1 description" 
                        completed={true} 
                    />

                    <TodoItem 
                        title="Item 2"  
                        completed={false}
                    />
                </div>
            </div>
        );
    }
}
