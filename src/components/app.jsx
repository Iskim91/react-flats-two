import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list';
import Marker from './marker';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: null,
      flats: flats,
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat,
    });
  }

  center = () => {
    if (this.state.selectedFlat === null) {
      return this.state.center
    } else {
      return {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      }
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.selectedFlat !== this.state.selectedFlat;
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} selectedFlat={this.state.selectedFlat} center={this.state.center} />
        <div className="map-container" style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key:  }}
            defaultCenter={this.center()}
            defaultZoom={this.state.zoom}
          >
            <Marker
              lat= {this.state.selectedFlat === null ? this.state.center.lat : this.state.selectedFlat.lat}
              lng= {this.state.selectedFlat === null ? this.state.center.lng : this.state.selectedFlat.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
