import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

class GodMarkerSpot extends Component {
  render() {
    return (
      <div />
    )
  }

  constructor(props) {
    super(props);
    const app = this.props.app;
    const id = props.id;
    const godContainer = app.stage
      .getChildByName('asideContainer')
      .getChildByName('godsContainer')
      .getChildByName(`godContainer${props.godId}`);

    const tile = new Pixi.Graphics();

    tile.beginFill(0xFF0000);
    tile.drawCircle(0, 0, props.size / 2);
    tile.endFill();

    tile.x = props.x + props.size / 2;
    tile.y = props.y + props.size / 2;
    godContainer.addChild(tile);

    const spotText = new Pixi.Text(`${id}`, {fontFamily : 'Arial', fontSize: props.size / 2, fill : 0xffffff, align : 'center'});
    spotText.x = props.x;
    spotText.y = props.y;
    godContainer.addChild(spotText);
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}

export default connect(mapStateToProps)(GodMarkerSpot);
