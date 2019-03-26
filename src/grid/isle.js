import {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

class Isle extends Component {
  componentDidMount() {
    const {
      app,
      isle
    } = this.props;

    const isleEllipse = new PIXI.Ellipse();

    tile.beginFill(0xAAEEEF);
    tile.drawCircle(0, 0, size / 2);
    tile.alpha = 0.1;
    tile.endFill();
    tile.x = x;
    tile.y = y;
    app.stage.addChild(tile);
  }

  render() {
    return null;
  }
}
Isle.propTypes = {
  app: PropTypes.object.isRequired,
  isle: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  app: state.app,
});

export default connect(mapStateToProps)(Isle);
