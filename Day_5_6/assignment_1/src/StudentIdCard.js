import React, { Component } from 'react';

class StudentIdCard extends React.Component {
    constructor(props) {
        super(props)
        // this.handleClick = this.handleClick.bind(this);
    }
    // handleClick = (id, title, e) => {
    //     debugger
    //     var BookingData = this.State.BookingData;
    //     BookingData.splice(id, 0);
    //     this.setState({ BookingData });
    //     console.log(this.State);
    //     //alert("Are you sure you want to delete " + title + " ?");
    // }

    render() {
        const book = this.props.details;
        const { handleDelete } = this.props;
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
                        <p>Published : {book.publish}</p>
                        {/* <button className="btn btn-danger" onClick={(e) => this.handleClick(book.BookID, book.title, e)}>Delete</button> */}
                        <button className="btn btn-danger" onClick={() => handleDelete(indexcount, book.title)}>Delete</button>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}

export default StudentIdCard;