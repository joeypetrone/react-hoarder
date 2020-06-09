import React from 'react';

import ItemCard from '../../shared/ItemCard/ItemCard';

import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/itemData';

import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    const uid = authData.getUid();
    itemData.getItemsByUid(uid)
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('unable the get items: ', err));
  }

  removeStuff = (itemId) => {
    itemData.deleteItem(itemId)
      .then(() => {
        this.getItems();
      })
      .catch((err) => console.error('unable to delete item: ', err));
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    const { items } = this.state;
    const buildItemCards = items.map((item) => (
      <ItemCard key={item.id} item={item} removeStuff={this.removeStuff}/>
    ));

    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <div className="d-flex flex-wrap">
          {buildItemCards}
        </div>
      </div>
    );
  }
}

export default MyStuff;
