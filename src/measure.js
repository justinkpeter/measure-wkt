export function GetDistanceBetweenPoints(startPoint, endPoint) {
  let xDistance = startPoint[0] - endPoint[0];
  let yDistance = startPoint[1] - endPoint[1];

  // TODO: add an edge case to consider more than one input parameter

  //
  return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
}

export function GetLineLength(line) {
  // compare coordinate pairs
  // get line length of said pair.. store that in a temp var
  // keep a running sum of calculated dists

  console.log(line);

  let totalLength = 0; // running sum
  let noCoordinateParams = line.coordinates.length; // no. of coordionate pairs

  for (let x = 0; x < noCoordinateParams - 1; x++) {
    let distance = GetDistanceBetweenPoints(
      line.coordinates[0],
      line.coordinates[line.coordinates.length - 1]
    );

    totalLength += distance;
  }

  return totalLength;

  // return GetDistanceBetweenPoints(
  //   line.coordinates[0],
  //   line.coordinates[line.coordinates.length - 1]
  // );
}

export function GetPerimeter() {
  throw new Error("Not Implemented");
}
