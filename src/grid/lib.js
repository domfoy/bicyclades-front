import _ from 'lodash';

const rowCount = 11;

function getTileSize(width, height) {
  return Math.min(width / 7, height / (1 + 5 * Math.sqrt(3)));
}

function getColumnCount(i) {
  return i <= 6 ? i + 1 : 13 - i;
}

function getTileCoord({
  i,
  j,
  tileSize,
  width,
  x,
  y,
}) {
  const columnCount = getColumnCount(i);
  const rowWidth = tileSize * columnCount;
  return {
    x: x + ((width / 2) - (rowWidth / 2)) + ((j - 0.5) * tileSize),
    y: i === 1
      ? y + ((i - 0.5) * (tileSize))
      : y + ((1 - 0.5) * (tileSize)) + (i - 1) * (tileSize / 2 * Math.sqrt(3))
  };
}

function computeTiles(x, y, width, tileSize) {
  const tiles = [];

  for (let i = 1; i <= rowCount; i++) {
    const columnCount = getColumnCount(i);

    for (let j = 1; j <= columnCount; j++) {
      const {x: tileX, y: tileY} = getTileCoord({
        i,
        j,
        width,
        tileSize,
        x,
        y,
      });
      tiles.push({
        x: tileX,
        y: tileY,
        i,
        j,
      });
    }
  }

  return tiles;
}

function getAugmentedTile({tiles}, rawTile) {
  const [i, j] = rawTile;
  const tile = _.find(tiles, {i, j});

  return {
    raw: [i, j],
    x: tile.x,
    y: tile.y
  };
}

// function getNeighbourhoods(tiles) {
//   return _.map(tiles, tile => {
//     const neighbours = _.filter(tiles, other => {
//       const isSelf = (other[0] === tile[0] && other[1] === tile[1]);
//       const isNeighbour = other[];
//       return !isSelf && isNeighbour;
//     })
//   });
// }

function computeIsles(tiles, rawIsles) {
  const isles = [];

  for (const rawIsle of rawIsles) {
    // const neighbouringCouples = getNeighbourhoods(tiles);

    const augmentedTiles = _.map(rawIsle.tiles, getAugmentedTile.bind(null, {tiles}));

    const isle = Object.assign({}, rawIsle, {
      tiles: augmentedTiles,
    });

    isles.push(isle);
  }

  return isles;
}

export default function computeGrid(x, y, width, height, rawIsles) {
  const tileSize = getTileSize(width, height);
  const tiles = computeTiles(x, y, width, tileSize);
  const isles = computeIsles(tiles, rawIsles);

  return {
    isles,
    tiles,
    tileSize
  };
}
