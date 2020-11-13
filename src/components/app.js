import React, { Component } from 'react';
import BookList from '../containers/BookList';
import BookDescrip from '../containers/BookDescrip';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList></BookList>
        <BookDescrip></BookDescrip>
      </div>
    );
  }
}
