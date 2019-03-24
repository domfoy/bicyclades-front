import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

import OfferingMarkerStack from '../offering-marker-stack';

class UpperAsideBoard extends Component {
  render() {
    return (
      <div>
        <OfferingMarkerStack
          x={this.props.x + this.padding}
          y={this.props.y + this.padding}
          width={this.contentWidth / 10}
          height={this.contentHeight}
        />
      </div>
    )
  }

  constructor(props) {
    super(props);
    const app = this.props.app;

    this.padding = 10;

    const upperAsideContainer = new Pixi.Container();
    upperAsideContainer.name = 'upperAsideContainer';

    this.contentWidth = this.props.width - 2 * this.padding;
    this.contentHeight = this.props.height - 2 * this.padding;

    const borderSize = this.padding / 2;
    const upperAsideBoard = new Pixi.Graphics();
    upperAsideBoard.beginFill(0x005577);
    upperAsideBoard.drawRoundedRect(this.props.x, this.props.y, this.props.width, this.props.height, 10);
    upperAsideBoard.beginFill(0x001122);
    upperAsideBoard.drawRoundedRect(this.props.x + borderSize, this.props.y + borderSize, this.props.width - 2 * borderSize, this.props.height - 2 * borderSize, 10);
    upperAsideBoard.endFill();
    upperAsideContainer.addChild(upperAsideBoard);

    app.stage.addChild(upperAsideContainer);
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.app
  };
}

export default connect(mapStateToProps)(UpperAsideBoard);
