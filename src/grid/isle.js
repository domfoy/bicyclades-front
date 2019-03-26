import {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

class Isle extends Component {
  componentDidMount() {
    const {
      app,
      isle,
      size
    } = this.props;

    const isleGraph = new Pixi.Graphics();

    isleGraph.beginFill(0xAA00EF);

    for (const tile of isle.tiles) {
      isleGraph.drawCircle(tile.x, tile.y, size / 2);
    }
    isleGraph.endFill();
    app.stage.addChild(isleGraph);
  }

  render() {
    return null;
  }
}
Isle.propTypes = {
  app: PropTypes.object.isRequired,
  isle: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  app: state.app,
});

export default connect(mapStateToProps)(Isle);
