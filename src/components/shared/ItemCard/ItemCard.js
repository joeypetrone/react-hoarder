import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';

import './ItemCard.scss';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    removeStuff: PropTypes.func.isRequired,
  }

  removeItem = (e) => {
    e.preventDefault();
    const { item, removeStuff } = this.props;
    const itemId = item.id;
    removeStuff(itemId);
  }

  render() {
    const { item } = this.props;
    const singleLink = `/stuff/${item.id}`;
    const editLink = `/edit/${item.id}`;

    return (
      <div className="ItemCard col-3 mb-4">
        <div className="card px-2 pt-2">
          <img src={item.itemImage} className="card-img-top" alt={item.itemName} />
          <div className="card-body px-1 pb-3">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
            <Link className="btn btn-info m-1" to={singleLink}>View</Link>
            <Link className="btn btn-warning m-1" to={editLink}>Edit</Link>
            <button className="btn btn-danger m-1" onClick={this.removeItem}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
