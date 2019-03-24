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
        {markerSpots.map(spot => <MarkerSpot
          id={spot.id}
          key={spot.id.toString()}
          x={this.props.x + this.props.width / 2}
          y={this.props.y + (this.props.height / 5) * spot.id - (this.props.height / 10)} 
        />)}
      </div>
    )
  }

  constructor(props) {
    super(props);
    const app = this.props.app;

    const markerContainer = new Pixi.Container();
    markerContainer.name = 'markerContainer';

    const stack = new Pixi.Graphics();
    stack.name = 'stack';

    stack.beginFill(0x333332);
    stack.drawRoundedRect(this.props.x, this.props.y, this.props.width, this.props.height, 10);
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
