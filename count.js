
const arr = [2, 2, 2, 2, 6, 6, 6, 6, 3, 3,6, 7, 9];
const findMostFrequentElement = (array) => {
  const countStorage = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    let item = arr[i];
    if (countStorage.hasOwnProperty(item)) {
      countStorage[item]++;
    } else {
      countStorage[item] = 1;
    }
  }

  const sortingCallback = (a, b) => b[1] - a[1];
  let sorted = Object.entries(countStorage).sort(sortingCallback);
  let max = sorted[0][0];
  let min = sorted[sorted.length - 2][0];

  return [parseInt(max), parseInt(min)];
};

console.log(findMostFrequentElement(arr));