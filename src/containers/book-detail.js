import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div className=" col-md-12  text-center " id="bookdetail"  font-size="20px">
      點選閱讀內容!</div>;
    }

    return (
      <div className=" col-md-12  text-red" id="bookdetail">
        <h3>詳細內容 :</h3>
        <div>主題 : {this.props.book.title}</div>
        {/*<div>Pages : {this.props.book.pages}</div>*/}
        <p>內容: {this.props.book.contents}</p>
        
          <img src={this.props.book.img} height="400" width="400"></img>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
