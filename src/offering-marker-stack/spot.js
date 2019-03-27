import {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

class MarkerSpot extends Component {
  constructor(props) {
    super(props);
    const {
      app,
      id,
      x,
      y
    } = this.props;

    const spotText = new Pixi.Text(`${id}`, {
      fontFamily: 'Arial',
      fontSize: 30,
      fill: 0xaa1010,
      align: 'center'
    });
    spotText.anchor.set(0.5, 0.5);
    spotText.x = x;
    spotText.y = y;
    const markerContainer = app.stage.getChildByName('markerContainer');
    markerContainer.addChild(spotText);
  }

  render() {
    return null;
  }
}

MarkerSpot.propTypes = {
  app: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};
const mapStateToProps = state => ({
  app: state.app
});

export default connect(mapStateToProps)(MarkerSpot);
