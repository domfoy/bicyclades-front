import {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

import {palette} from '../constants';

class OfferingMarker extends Component {
  constructor(props) {
    super(props);

    const {
      app,
      colour,
      x,
      y,
    } = props;

    const marker = new Pixi.Graphics();
    console.log(x, y);
    marker.beginFill(palette[colour]);
    marker.drawCircle(0, 0, 15);
    marker.endFill();
    marker.position.x = x;
    marker.position.y = y;

    marker.interactive = true;
    marker
      .on('mousedown', this.handleDragStart)
      .on('touchstart', this.onDragStart)
      .on('mouseup', this.onDragEnd)
      .on('mouseupoutside', this.onDragEnd)
      .on('touchend', this.onDragEnd)
      .on('touchendoutside', this.onDragEnd)
      .on('mousemove', this.onDragMove)
      .on('touchmove', this.onDragMove);

    app.stage.addChild(marker);

    this.marker = marker;
  }

  handleDragStart = (event) => {
    const {colour, turn} = this.props;
    const isDraggable = colour === turn.colour;

    if (!isDraggable) {
      return;
    }

    this.data = event.data;
    this.dragging = true;
  }

  onDragEnd = () => {
    this.data = null;
    this.dragging = false;
  }

  onDragMove = () => {
    if (!this.dragging) {
      return;
    }

    const newPosition = this.data.getLocalPosition(this.marker.parent);
    this.marker.position.x = newPosition.x;
    this.marker.position.y = newPosition.y;
  }

  render() {
    return null;
  }
}

OfferingMarker.propTypes = {
  app: PropTypes.object.isRequired,
  turn: PropTypes.object.isRequired,
  colour: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};
const mapStateToProps = state => ({
  app: state.app,
  turn: state.turn,
});

export default connect(mapStateToProps)(OfferingMarker);
