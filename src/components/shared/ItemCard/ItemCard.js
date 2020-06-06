import React from 'react';

import './ItemCard.scss';

class ItemCard extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <div className="ItemCard col-3 mb-4">
        <div className="card">
          <img src={item.itemImage} className="card-img-top" alt={item.itemName} />
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
