import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

import OfferingMarkerStack from '../offering-marker-stack';

class UpperAsideBoard extends Component {
  constructor(props) {
    super(props);
    const {
      app,
      width,
      height,
      x,
      y
    } = this.props;

    this.padding = 10;

    const upperAsideContainer = new Pixi.Container();
    upperAsideContainer.name = 'upperAsideContainer';

    this.contentWidth = width - 2 * this.padding;
    this.contentHeight = height - 2 * this.padding;

    const borderSize = this.padding / 2;
    const upperAsideBoard = new Pixi.Graphics();
    upperAsideBoard.beginFill(0x005577);
    upperAsideBoard.drawRoundedRect(x, y, width, height, 10);
    upperAsideBoard.beginFill(0x001122);
    upperAsideBoard.drawRoundedRect(
      x + borderSize,
      y + borderSize,
      width - 2 * borderSize,
      height - 2 * borderSize,
      10
    );
    upperAsideBoard.endFill();
    upperAsideContainer.addChild(upperAsideBoard);

    app.stage.addChild(upperAsideContainer);
  }

  render() {
    const {
      x,
      y
    } = this.props;

    return (
      <div>
        <OfferingMarkerStack
          x={x + this.padding}
          y={y + this.padding}
          width={this.contentWidth / 10}
          height={this.contentHeight}
        />
      </div>
    );
  }
}

UpperAsideBoard.propTypes = {
  app: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};
const mapStateToProps = state => ({
  app: state.app
});


export default connect(mapStateToProps)(UpperAsideBoard);
