import React, {Component} from 'react';

import Tile from '../tile';

const rowCount = 11;

function computeTiles(x, y, width, height) {

    const tileSize = Math.min(width / 7, height / (1 + 5 * Math.sqrt(3)));
    const res = [];

    for (let i = 1; i <= rowCount; i++) {
      const columnCount = i <= 6 ? i + 1 : 13 - i;
      const rowWidth = tileSize * columnCount;

      for (let j = 1; j <= columnCount; j++) {
        res.push({
          x: x + ((width / 2) - (rowWidth / 2)) + ((j - 0.5) * tileSize),
          y: i === 1 ? y + ((i - 0.5) * (tileSize)) : y + ((1 - 0.5) * (tileSize)) + (i - 1) * (tileSize / 2 * Math.sqrt(3)),
          i,
          j,
          tileSize
        })
      }
    }

    return res;
}

class Grid extends Component {
  render() {
    const tiles = this.tiles.map(({x,y,i,j,tileSize: size}, index) => <Tile
      key={index.toString()}
      x={x}
      y={y}
      i={i}
      j={j}
      size={size}
    />);

    return (
      <div>
        {tiles}
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.padding = 20;
    const {x, y, width, height} = props;

    this.tiles = computeTiles(x + this.padding, y + this.padding, width - 2 * this.padding, height - 2 * this.padding);
  }
}

export default Grid;
