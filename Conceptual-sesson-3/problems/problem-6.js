function gemsToDiamond(x, y, z) {
  if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
    console.log("Please provied me a number");
  } else if (x < 0 || y < 0 || z < 0) {
    console.log("Please provied me all positive number");
  } else {
    const friend1 = 21;
    const friend2 = 32;
    const friend3 = 43;
    const totalDimond = x * friend1 + y * friend2 + z * friend3;
    if (totalDimond > 2000) {
      const restDimond = totalDimond - 2000;
      return restDimond;
    } else {
      return totalDimond;
    }
  }
}
const restOfGems = gemsToDiamond(100, 5, 1);
console.log(restOfGems);
