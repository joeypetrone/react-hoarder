import React from 'react';

import './MyStuff.scss';

class MyStuff extends React.Component {
  viewItemEvent = (e) => {
    e.preventDefault();
    const itemId = 'monkeyButt5000';
    this.props.history.push(`/stuff/${itemId}`);
  }

  editItemEvent = (e) => {
    e.preventDefault();
    const itemId = 'monkeyButt5000';
    this.props.history.push(`/edit/${itemId}`);
  }

  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <button className='btn btn-light m-2' onClick={this.viewItemEvent}>View</button>
        <button className='btn btn-light m-2' onClick={this.editItemEvent}>Edit</button>
      </div>
    );
  }
}

export default MyStuff;
