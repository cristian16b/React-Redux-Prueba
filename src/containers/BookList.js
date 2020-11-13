import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookList extends Component {

  renderList () {
    // console.log(this.props.books);
    // this.props.books.map(book => {
    //   console.log(book.title);
    // })
    return this.props.books.map(book =>  {

            return(        <li key={book.title} className="list-group-item">
            {book.title}
        </li>)

    })
  }  

  render() {
    return (
      <div>
        <p>Listado de libros registrados</p>
        <ul className="list-group col-sm-4">
            {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books:state.books
  };
}

export default connect(mapStateToProps) (BookList);
