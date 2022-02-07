//example array

const arr = [1, 34, 23, 54, 67, 0, 89, 98, 34, 54, 66, 77, 90, 91, 11];

//find Minimum value function

function findMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

//find Maximum value function

function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// bubble sort on array

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log("Minimum value = " + findMin(arr));

console.log("Maximum value = " + findMax(arr));

console.log("Sorted array using bubble sorting = " + bubbleSort(arr));
