import React, {Component} from 'react';

class BookList extends Component {
    render() {
        let bookItems = this.props.books.map(book => {
            return (<div className='bookInfo'>
                <img className='bookImage' src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`} />
            <p>{book.title}</p>
            <div>Author: {book.author}</div>
            <div>Publication Year: {book.year}</div>
            <div>Language: {book.language}</div>
            </div>
            )
            
        })
        return <div class="mainBookContainer">{bookItems}</div>


    }
}

export default BookList