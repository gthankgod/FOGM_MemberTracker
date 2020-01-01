import React, { Fragment } from 'react'

const Modal = () => {
    return (
        <Fragment>
            <button
                type="button"
                className="mr-2 mb-2 btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal7"
            >
                Add Family(Modal-title)
                                </button>
            <div
                className="modal fade py-3"
                id="exampleModal7(Modal-id)"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"> Add Family(Modal-title) </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form method="POST" action="/members/family">
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="First Name">Family Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="familyName"
                                            placeholder="Please Enter the surname of the Head of family..."
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Add family
                        </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal
