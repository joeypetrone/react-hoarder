import React from 'react';
import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';

import './ItemCard.scss';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    const singleLink = `/stuff/${item.id}`;

    return (
      <div className="ItemCard col-3 mb-4">
        <div className="card p-2">
          <img src={item.itemImage} className="card-img-top" alt={item.itemName} />
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
            <Link className="btn btn-info" to={singleLink}>View</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
