import React from 'react';
import ReactDOM from 'react-dom';
import CreateTodo from './CreateTodo';
import EditModal from './EditModal';
import TodoItem from './TodoItem';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoItems: props.todoItems
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        let todoItems = this.state.todoItems.slice();
        todoItems.push(item);
        this.saveItems(todoItems);
    }

    saveItem(index, {title, description}) {
        let todoItems = this.state.todoItems.slice();
        todoItems[index].title = title;
        todoItems[index].description = description;
        this.saveItems(todoItems);
    }

    saveItems(todoItems) {
        this.setState({todoItems});
        this.props.onSaveItems(todoItems);
    }

    toggleCompleted(index) {
        let todoItems = this.state.todoItems.slice();
        todoItems[index].completed = !todoItems[index].completed;
        this.saveItems(todoItems);
    }

    render() {
        let items = this.state.todoItems.map((item, index) => (
            <div className="row align-items-center p-3">
                <div className="col-11">
                    <TodoItem 
                        title={item.title}
                        description={item.description} 
                        completed={item.completed} 
                        onToggleCompleted={() => this.toggleCompleted(index)  }
                    />
                </div>
                <div className="col">
                    <EditModal
                        title={item.title}
                        description={item.description} 
                        onItemEdited={(editedItem) => this.saveItem(index, editedItem)}
                    />
                </div>
            </div>


            
        ));


        return ( 
            <div className="container">
                <div className="mt-2 mb-5">
                    <CreateTodo 
                        onCreateItem={this.addItem}
                    />
                </div>
                <div>
                    {items}
                </div>
            </div>
        );
    }
}
