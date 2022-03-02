import React from 'react';
import ReactDOM from 'react-dom';

export default class CreateTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemTitle: ''
        };

        this.changeTitle = this.changeTitle.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    changeTitle(event) {
        this.setState({
            itemTitle: event.target.value
        });
    }

    submitForm(event) {
        event.preventDefault();

        this.props.onCreateItem({
            title: this.state.itemTitle,
            completed: false
        });
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className="row mb-3">
                    <label htmlFor="todoTitle" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-6">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="todoTitle"
                            value={this.state.itemTitle}
                            onChange={this.changeTitle}
                        />
                    </div>
                    <div className="col-sm-2">
                        <button 
                            className="btn btn-primary"
                        >Create</button>
                    </div>
                </div>
            </form>
        );
    }
}