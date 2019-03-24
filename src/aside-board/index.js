import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

import UpperAsideBoard from '../upper-aside-board';
import Gods from '../god';

class AsideBoard extends Component {
  render() {
    return (
      <div>
        <UpperAsideBoard
          x={this.padding}
          y={this.padding}
          width={this.contentWidth}
          height={250}
        />
        <Gods
          x={this.padding}
          y={this.padding + 250}
          width={this.contentWidth}
          height={this.contentHeight - 250}
        />
      </div>
    )
  }

  constructor(props) {
    super(props);
    const app = this.props.app;

    this.padding = 10;

    const asideContainer = new Pixi.Container();
    asideContainer.name = 'asideContainer';
    asideContainer.width = app.screen.width / 3;
    asideContainer.height = app.screen.height;

    this.contentWidth = asideContainer._width - 2 * this.padding;
    this.contentHeight = asideContainer._height - 2 * this.padding;

    const asideBoard = new Pixi.Graphics();
    asideBoard.beginFill(0x005500);
    asideBoard.drawRoundedRect(0, 0, asideContainer._width, asideContainer._height, 10);
    asideBoard.beginFill(0x001100);
    asideBoard.drawRoundedRect(5, 5, asideContainer._width - 10, asideContainer._height - 10, 10);
    asideBoard.endFill();
    asideContainer.addChild(asideBoard);

    app.stage.addChild(asideContainer);
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.app
  };
}

export default connect(mapStateToProps)(AsideBoard);
