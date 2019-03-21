import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

class MarkerSpot extends Component {
  render() {
    return (
      <div />
    )
  }

  constructor(props) {
    super(props);
    const app = this.props.app;
    const id = this.props.id;

    const spotText = new Pixi.Text(`${id}`,{fontFamily : 'Arial', fontSize: 30, fill : 0xaa1010, align : 'center'});
    spotText.x = 19;
    spotText.y = this.props.y;
    const markerContainer = app.stage.getChildByName('markerContainer');
    markerContainer.addChild(spotText);
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}

export default connect(mapStateToProps)(MarkerSpot);
