// void bubble(array,n){
//     for(int i=0; i<n-1; i++){
//        swapped =false;

//         for(int j=0; j<n-i-1; j++){
//             if(array[j]>array[j+1])
//              {
//                 swap(array[i], array[j]);
//                 swapped=True;
//         }
//     }
//     if(swapped==false)
//     break;
// }

// }

export function BubbleSortAlgorithm(array) {
  const animations = [];
  const n = array.length;
  if (n == 1) return array;
  bubbleSort(array, n, animations);
  return animations;
}

function bubbleSort(array, n, animations) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        animations.push([j, j + 1]);                            //changing colour to red
        animations.push([j, j + 1]);
        let temp = array[j];
        animations.push([j, array[j + 1]]);
        animations.push([j + 1, temp]);                          //for swapping values of bar
        array[j] = array[j + 1];
        array[j + 1] = temp;                                     //for swapping values in original array
       
      }
    }
  }
}
