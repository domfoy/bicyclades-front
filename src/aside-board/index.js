import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as Pixi from 'pixi.js';

import {withPixiApp} from '../context';
import UpperAsideBoard from '../upper-aside-board';
import Gods from '../gods';
import {Chat} from '../chat';

class AsideBoard extends Component {
  constructor(props) {
    super(props);

    const {app, height, width} = this.props;
    this.padding = 10;

    const asideContainer = new Pixi.Container();
    asideContainer.name = 'asideContainer';

    this.contentWidth = width - 2 * this.padding;
    this.contentHeight = height - 2 * this.padding;

    const asideBoard = new Pixi.Graphics();
    asideBoard.beginFill(0x005500);
    asideBoard.drawRoundedRect(0, 0, width, height, 10);
    asideBoard.beginFill(0x001100);
    asideBoard.drawRoundedRect(5, 5, width - 10, height - 10, 10);
    asideBoard.endFill();
    asideContainer.addChild(asideBoard);

    app.stage.addChild(asideContainer);
  }

  render() {
    const {x, y} = this.props;

    return (
      <div>
        <UpperAsideBoard
          x={x + this.padding}
          y={y + this.padding}
          width={this.contentWidth}
          height={250}
        />
        <Gods
          x={this.padding}
          y={this.padding + 250}
          width={this.contentWidth}
          height={this.contentHeight - 250}
        />
        <div style={{
          position: 'absolute',
          bottom: 0
        }}
        >
          <Chat

          />
        </div>
      </div>
    );
  }
}

AsideBoard.propTypes = {
  app: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default withPixiApp(AsideBoard);
