import React from 'react';
import StudentIdCard from './StudentIdCard';
import BookingData from './BookingData';

class Booklist extends React.Component {
    constructor() {
        super()
        this.state = { BookingData };
    }
    handleDelete = id => {
        var BookingData = this.state.BookingData;
        BookingData.splice(id, 1);
        this.setState({ BookingData });
    }

    render() {
        const UpdatedBookData = this.state.BookingData.map((book, index) => {
            return (
                <StudentIdCard indexcount={index}
                    details={book}
                    handleDelete={this.handleDelete}></StudentIdCard>
            )
        })
        return (
            <div>
                {/* <h2 style={{ textAlign: 'left', marginLeft: '240px', marginBottom: '40px' }}> Booking Data</h2> */}
                {UpdatedBookData}
            </div>
        )
    }
}

export default Booklist;