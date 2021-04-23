const outputs = [
  [10, 0.5, 16, 1],
  [200, 0.5, 16, 4],
  [350, 0.5, 16, 4],
  [600, 0.5, 16, 5],
];

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  // Ran every time a balls drops into a bucket
  outputs.push([dropPosition, bounciness, size, bucketLabel]);

  console.log(outputs);
}

const predictionPoint = 300;
const k = 3;

function distance(point) {
  return Math.abs(point - predictionPoint);
}

function runAnalysis() {
  // Write code here to analyze stuff
  _.chain(outputs)
    .map((row) => [distance(row[0]), row[3]])
    .sortBy((row) => row[0])
    .slice(0, k);
}
