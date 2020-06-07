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

  render() {
    const { item } = this.state;
    return (
      <div className="SingleItem col-10">
        <div className="d-flex flex-wrap justify-content-center">
          <h1>{item.itemName}</h1>
          <div className="card mb-3">
            <img src={item.itemImage} className="card-img-top p-4 border" alt={item.itemName} />
            <p className="card-text m-3">{item.itemDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleItem;
