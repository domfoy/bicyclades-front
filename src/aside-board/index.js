import {Component} from 'react';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

class AsideBoard extends Component {
  render() {
    return null;
  }

  componentDidMount() {
    const app = this.props.app;

    const asideBoard = new Pixi.Graphics();

    asideBoard.beginFill(0x00CC00);
    asideBoard.drawRect(0, 0, window.innerWidth / 3, window.innerHeight);
    asideBoard.endFill();
    asideBoard.x = 0;
    asideBoard.y = 0;
    app.stage.addChild(asideBoard);
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}

export default connect(mapStateToProps)(AsideBoard);
