import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDescrip extends Component {

  renderList () {
    console.log(this.props.descrip);
    // this.props.books.map(book => {
    //   console.log(book.title);
    // })
    return this.props.descrip.map(descrip =>  {

            return(        <li key={descrip} className="list-group-item">
            {descrip}
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
    descrip:state.decrip
  };
}

export default connect(mapStateToProps) (BookDescrip);
