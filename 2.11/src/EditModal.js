import React from 'react';
import ReactDOM from 'react-dom';

export default class EditModal extends React.Component {
    constructor(props) {
        super(props);

        this.modalRef = React.createRef();
        this.titleRef = React.createRef();
        this.descriptionRef = React.createRef();

        this.showModal = this.showModal.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    get modal() {
        return window.bootstrap.Modal.getInstance(this.modalRef.current) ?? 
                new window.bootstrap.Modal(this.modalRef.current);
    }

    handleEdit() {
        this.props.onItemEdited({
            title: this.titleRef.current.value,
            description: this.descriptionRef.current.value,
        });

        this.modal.hide();
    }

    showModal() {
        this.modal.show();
    }


    render() {
        let {title, description} = this.props;

        return (
            <React.Fragment>
                <button 
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    onClick={this.showModal}
                >Edit</button>

                <div className="modal fade" aria-hidden="true" ref={this.modalRef}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit To Do: {this.props.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label className="form-label">Title</label>
                                    <input 
                                        ref={this.titleRef}
                                        type="text" 
                                        className="form-control"
                                        defaultValue={title}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea 
                                        ref={this.descriptionRef}
                                        defaultValue={description}
                                        cols="30" 
                                        rows="5" 
                                        className="form-control"
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick={this.handleEdit}
                            >Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}