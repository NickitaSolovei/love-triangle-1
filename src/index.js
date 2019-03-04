/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var shech = 0;

  for (let i = 0; i < preferences.length; i++) {
    const firstPers = i;
    const secondPers = preferences[i] - 1;
    if (firstPers == secondPers){
      continue;
    }
    const thirdPers = preferences[secondPers] - 1;
    
    if (firstPers == (preferences[thirdPers] - 1)) {
      shech++;
    }
  }
  
  return shech / 3;
};
