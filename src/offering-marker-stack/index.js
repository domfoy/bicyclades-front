import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

import MarkerSpot from './spot';
import OfferingMarker from './marker';

const markerSpots = [];
for (let i = 1; i <= 5; i++) {
  markerSpots.push({
    id: i
  });
}

function getCoord({x, y, width, height}, markerIndex) {
  return {
    x: x + width / 2,
    y: y + (height / 5) * markerIndex - (height / 10)
  };
}

class OfferingMarkerStack extends Component {
  constructor(props) {
    super(props);
    const {
      app,
      x,
      y,
      width,
      height
    } = this.props;

    const markerContainer = new Pixi.Container();
    markerContainer.name = 'markerContainer';

    const stack = new Pixi.Graphics();
    stack.name = 'stack';

    stack.beginFill(0x333332);
    stack.drawRoundedRect(x, y, width, height, 10);
    stack.endFill();
    markerContainer.addChild(stack);
    app.stage.addChild(markerContainer);
  }

  render() {
    const {
      x,
      y,
      height,
      width,
      offeringMarkers
    } = this.props;

    return (
      <div>
        {markerSpots.map(spot => (
          <MarkerSpot
            id={spot.id}
            key={spot.id.toString()}
            {...getCoord({x, y, width, height}, spot.id)}
          />
        ))}
        {offeringMarkers.map(offering => (
          <OfferingMarker
            id={offering.order}
            key={offering.order.toString()}
            colour={offering.colour}
            {...getCoord({x, y, width, height}, offering.order)}
          />
        ))}
      </div>
    );
  }
}
OfferingMarkerStack.propTypes = {
  app: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  offeringMarkers: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};
const mapStateToProps = state => ({
  app: state.app,
  offeringMarkers: state.offerings
});

export default connect(mapStateToProps)(OfferingMarkerStack);
