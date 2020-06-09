import React from 'react';

import itemData from '../../../helpers/data/itemData';

import './SingleItem.scss';

class SingleItem extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    itemData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('unable to get single item: ', err));
  }

  removeSingleItem = (e) => {
    e.preventDefault();
    const removeItemId = this.props.match.params.itemId;
    itemData.deleteItem(removeItemId)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('unable to delete item in single view: ', err));
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleItem col-10">
        <div className="d-flex flex-wrap justify-content-center">
          <h1>{item.itemName}</h1>
          <div className="card mb-3">
            <img src={item.itemImage} className="card-img-top p-4 border" alt={item.itemName} />
            <p className="card-text m-3">{item.itemDescription}</p>
            <div className="mb-3">
              <button className="btn btn-danger m-1" onClick={this.removeSingleItem}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleItem;
