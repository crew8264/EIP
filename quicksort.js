/* https://www.programiz.com/javascript/online-compiler/ */

const partition = (array, left, right, pivotIndex) => {
    let temp;
    let pivot = array[pivotIndex];
    console.log("pivot : ", pivot);
    
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }
      if (left <= right) {
        temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
      }
    }
    temp = array[left];
    array[left] = pivot;
    array[pivotIndex] = temp;
    console.log("left : ", left); 
    console.log("right : ", right);
    return left;
  };
  
  const quickSort = (array, left = 0, right = array.length - 1) => {
  
    console.log(array);
    let pivotIndex = right;
    pivotIndex = partition(array, left, pivotIndex - 1, pivotIndex);
    if (left < pivotIndex - 1) {
      quickSort(array, left, pivotIndex - 1);
    }
    if (right > pivotIndex + 1) {
      quickSort(array, pivotIndex + 1, right);
    }
    return array;
  };
  
  let asd = [2, 8, 7, 1, 3, 5, 6, 4]
  console.log(quickSort(asd));