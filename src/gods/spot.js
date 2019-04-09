import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as Pixi from 'pixi.js';

import {withPixiApp} from '../context';

class GodMarkerSpot extends Component {
  constructor(props) {
    super(props);
    const {app, id, godId} = props;
    const godContainer = app.stage
      .getChildByName('asideContainer')
      .getChildByName('godsContainer')
      .getChildByName(`godContainer${godId}`);

    const tile = new Pixi.Graphics();

    tile.beginFill(0xFF0000);
    tile.drawCircle(0, 0, props.size / 2);
    tile.endFill();

    tile.x = props.x;
    tile.y = props.y;
    godContainer.addChild(tile);

    const spotText = new Pixi.Text(`${id}`, {
      fontFamily: 'Arial',
      fontSize: props.size / 2,
      fill: 0xffffff,
      align: 'center'
    });
    spotText.anchor.set(0.5, 0.5);
    spotText.x = props.x;
    spotText.y = props.y;
    godContainer.addChild(spotText);
  }

  render() {
    return (
      <div />
    );
  }
}

GodMarkerSpot.propTypes = {
  app: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  godId: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default withPixiApp(GodMarkerSpot);
