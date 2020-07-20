import React from 'react';
import leaflet from 'leaflet';


// const Map = (props) => {

//   const mapRef = React.createRef();

// const city = [52.38333, 4.9];

//   const icon = leaflet.icon({
//     iconUrl: `img/pin.svg`,
//     iconSize: [30, 30]
//   });

//   const zoom = 12;

//   const map = leaflet.map(`map`, {
//     center: city,
//     zoom,
//     zoomControl: false,
//     marker: true
//   });
//   map.setView(city, zoom);

//   leaflet
//     .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
//       attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
//     })
//     .addTo(map);

//   const offerCords = [52.3709553943508, 4.89309666406198];

//   leaflet
//   .marker(offerCords, {icon})
//   .addTo(map);
// };

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    // const offersCords = this.props.offers.map((offer) => [offer.location.latitude, offer.location.longitude]);
    // console.log(offersCords);

    this.map = leaflet.map(this.mapRef.current, {
      center: [52.38333, 4.9],
      zoom: 12,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.props.offers.map((offer) => {
      leaflet.marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(this.map);
    });
    // this.offersLayer = leaflet.layerGroup(offersCords, {}).addTo(this.map);

    // const offerCords = [52.3709553943508, 4.89309666406198];

    // leaflet
    //   .marker(offerCords, {icon})
    //   .addTo(this.map);
  }

  render() {
    return (
      // <section className="cities__map map">
      <div id="map" ref={this.mapRef} className="cities__map"></div>
      // </section>

    // <section className="cities__map map">
    //   <div id="map" ref={this.mapRef} className="cities__map"></div>
    // </section>
    );
  }
}

export default Map;
