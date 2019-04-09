import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as Pixi from 'pixi.js';

import {withPixiApp} from '../context';

import GodMarkerSpot from './spot';

const spots = [];
for (let i = 1; i <= 10; i++) {
  spots.push(i);
}

class GodCard extends Component {
  constructor(props) {
    super(props);
    const {app, id, god} = this.props;
    this.god = god;

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
    godCard.drawRoundedRect(
      this.padding / 2, this.padding / 2,
      props.width - this.padding,
      props.height - this.padding,
      10
    );
    godCard.endFill();

    godContainer.addChild(godCard);
    godsContainer.addChild(godContainer);
  }

  render() {
    const tokenSize = Math.min(this.contentHeight / 3, this.contentWidth / 10);
    const {id} = this.props;

    return (
      <div>
        {spots.map(spot => (
          <GodMarkerSpot
            key={spot.toString()}
            id={spot}
            godId={id}
            x={this.padding + (spot - 1) * tokenSize + tokenSize / 2}
            y={this.padding + tokenSize / 2}
            size={tokenSize}
          />
        ))
        }
      </div>
    );
  }
}
GodCard.propTypes = {
  app: PropTypes.object.isRequired,
  god: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};


export default withPixiApp(GodCard);
