import React, { Component } from 'react';
import './ToggleButton.css'
import PropTypes from "prop-types";

export default class StudentIdCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const book = this.props.details;
        const { handleDelete, ShowMore } = this.props;
        const indexcount = this.props.indexcount;
        return (
            <div style={{ 'width': '40rem' }}>
                <div className="row">
                    <div className="col-sm-7">
                        <img src={book.Image} alt="Image" style={{ 'height': '200px', width: '200px' }} />
                    </div>
                    <div className="col-sm-5" style={{ textAlign: 'left' }}>
                        <p>Title :<b> {book.title}</b></p>
                        <p>Auther Name : {book.Author}</p>
                        {/* ternary operator in JSX. */}
                        {book.ShowPublished ? (<p>Published : {book.publish}</p>) : null}
                        <button className="btn btn-primary" onClick={() => ShowMore(indexcount, book.ShowPublished)}>
                            {book.ShowPublished ? "Show less" : "Show more"}</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(indexcount, book.title)}>Delete</button>

                    </div>
                    <br />
                </div>
            </div>
        )

    }


}

