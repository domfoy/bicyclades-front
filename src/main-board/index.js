import React, {Component} from 'react';

import Tile from '../tile';

const tilePositions = [
  {x: 200, y: 300},
  {x: 200, y: 364}
];

class MainBoard extends Component {
  render() {
    const list = tilePositions.map((pos, i) => <Tile key={i.toString()} x={pos.x} y={pos.y} />);

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default MainBoard;
