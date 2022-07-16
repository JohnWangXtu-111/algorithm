function swap(i, j, arr) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
function partition(start, end, arr) {
  let i = start, j = end;
  const base = arr[start];
  while(i < j) {
    while(i < j && arr[j] >= base) {
      j--;
    }
    while(i < j && arr[i] <= base) {
      i++;
    }
   
    swap(i, j, arr);
  }
   //arr[j] < base 因为j先走
  swap(j, start, arr);

  return j;
}

function process(arr, start, end) {
  if(start >= end) return;
  let p = partition(start, end, arr);

  process(arr, start, p - 1);
  process(arr, p + 1, end);
}
function quickSort(arr) {
  process(arr, 0 , arr.length - 1);
}

let arr = [1, 3, 2, 4, 2, 3, 4];
quickSort(arr)
console.log(arr)