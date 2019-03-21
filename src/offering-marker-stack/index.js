import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

import MarkerSpot from './spot';

let markerSpots = [];
for (let i = 1; i <= 5; i++) {
  markerSpots.push({
    id: i
  });
}

class OfferingMarkerStack extends Component {
  render() {
    return (
      <div>
        {markerSpots.map(spot => <MarkerSpot id={spot.id} key={spot.id.toString()} y={50 * spot.id - 50 + 7} />)}
      </div>
    )
  }

  constructor(props) {
    super(props);
    const app = this.props.app;

    const markerContainer = new Pixi.Container();
    markerContainer.name = 'markerContainer';
    markerContainer.position = {
      x: this.props.x,
      y: this.props.y
    };

    const stack = new Pixi.Graphics();
    stack.name = 'stack';

    stack.beginFill(0x333332);
    stack.drawRoundedRect(0, 0, 50, 250, 10);
    stack.endFill();
    markerContainer.addChild(stack);
    app.stage.addChild(markerContainer);
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}

export default connect(mapStateToProps)(OfferingMarkerStack);
