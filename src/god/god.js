import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

import GodMarkerSpot from './spot';

let spots = [];
for (let i = 1; i <= 10; i++) {
  spots.push(i);
}

class GodCard extends Component {
  render() {
    const self = this;
    const tokenSize = Math.min(this.contentHeight / 3, this.contentWidth / 10);

    return (
      <div>
        {spots.map(spot => <GodMarkerSpot
          key={spot.toString()}
          id={spot}
          godId={this.god.id}
          x={this.padding + (spot - 1) * tokenSize + tokenSize / 2}
          y={this.padding + tokenSize / 2}
          size = {tokenSize}
          />)
        }
      </div>
    )
  }

  constructor(props) {
    super(props);
    const id = this.props.id;
    this.god = this.props.gods.find(g => g.id === id);

    const app = this.props.app;
    const godsContainer = app.stage
      .getChildByName('asideContainer')
      .getChildByName('godsContainer');

    const godContainer = new Pixi.Container();
    godContainer.name = `godContainer${id}`;
    godContainer.x = props.x;
    godContainer.y = props.y;

    const godCard = new Pixi.Graphics();
    this.padding = 10;
    this.contentHeight = props.height - 2 * this.padding;
    this.contentWidth = props.width - 2 * this.padding;

    godCard.beginFill(0x338832);
    godCard.drawRoundedRect(this.padding / 2, this.padding / 2, this.props.width - this.padding, this.props.height - this.padding, 10);
    godCard.endFill();

    godContainer.addChild(godCard);
    godsContainer.addChild(godContainer);
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.app,
    gods: state.gods
  }
}

export default connect(mapStateToProps)(GodCard);
