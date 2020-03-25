import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {

  renderFlats = () => {
    return this.props.flats.map((flat) => {
      // console.log(flat === this.props.selectedFlat);
      // console.log(flat);
      return (
        <Flat flat={flat} key={flat.name} selected={flat === this.props.selectedFlat} selectFlat={this.props.selectFlat} />
      );
    });
  }

  render() {
      // console.log(this.props.selectedflat);
    return (
      <div className="flat-list">
        {this.renderFlats()}
      </div>
    );
  }
}

export default FlatList;
