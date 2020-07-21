import React from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';

const city = [52.38333, 4.9];
const zoom = 12;

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const icon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.map = L.map(this.mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
      .addTo(this.map);

    this.props.offers.forEach(({location}) => {
      L.marker([location.latitude, location.longitude], {icon}).addTo(this.map);
    });
  }

  render() {
    return (
      <div id="map" ref={this.mapRef} className="cities__map"></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    })
  }))
};
