import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import computeGrid from './lib';
import Tile from './tile';
import Isle from './isle';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.padding = 20;
    const {x, y, width, height} = props;
    const {tiles, isles} = computeGrid(
      x + this.padding, y + this.padding,
      width - 2 * this.padding,
      height - 2 * this.padding,
      props.isles
    );

    this.tiles = tiles;
    this.isles = isles;
  }

  render() {
    const tiles = this.tiles.map(({x, y, i, j, tileSize: size}, index) => (
      <Tile
        key={index.toString()}
        x={x}
        y={y}
        i={i}
        j={j}
        size={size}
      />
    ));
    const isles = this.isles.map((isle, index) => (
      <Isle
        key={index.toString()}
        isle={isle}
      />
    ));

    return (
      <div>
        {tiles}
        {isles}
      </div>
    );
  }
}
Grid.propTypes = {
  isles: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  app: state.app,
  isles: state.isles
});

export default connect(mapStateToProps)(Grid);
