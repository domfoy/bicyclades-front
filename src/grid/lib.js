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

function computeTiles(x, y, width, height) {
  const tileSize = getTileSize(width, height);
  const tiles = [];

  for (let i = 1; i <= rowCount; i++) {
    const columnCount = getColumnCount(i);

    for (let j = 1; j <= columnCount; j++) {
      const {x: tileX, y: tileY} = getTileCoord({
        i,
        j,
        tileSize,
        width,
        x,
        y,
      });
      tiles.push({
        x: tileX,
        y: tileY,
        i,
        j,
        tileSize
      });
    }
  }

  return tiles;
}

function getAugmentedTile({tileSize, width, x, y}, [i, j]) {
  const {x: tileX, y: tileY} = getTileCoord({
    i,
    j,
    tileSize,
    width,
    x,
    y,
  });

  return {
    raw: [i, j],
    x: tileX,
    y: tileY
  };
}

function computeIsles(x, y, width, height, rawIsles) {
  const isles = [];
  const tileSize = getTileSize(width, height);

  for (const rawIsle of rawIsles) {
    const tiles = rawIsle.tiles;

    const augmentedTiles = _.map(tiles, getAugmentedTile.bind({tileSize, x, y, width}));

    const isle = Object.assign({}, rawIsle, {
      tiles: augmentedTiles,
    });

    isles.push(isle);
  }

  return isles;
}

export default function computeGrid(x, y, width, height, rawIsles) {
  const tiles = computeTiles(x, y, width, height);
  const isles = computeIsles(x, y, width, height, rawIsles);

  return {
    isles,
    tiles
  };
}
