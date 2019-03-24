import {Component} from 'react';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

class Tile extends Component {
  render() {
    return null;
  }

  componentDidMount() {
    const {
      app,
      x,
      y,
      size
    } = this.props;

    const tile = new Pixi.Graphics();

    tile.beginFill(0xAAEEEF);
    tile.drawCircle(0, 0, size / 2);
    tile.alpha = 0.1;
    tile.endFill();
    tile.x = x;
    tile.y = y;
    app.stage.addChild(tile);
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}

export default connect(mapStateToProps)(Tile);
