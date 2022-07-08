// void insertion(int Arr[], int n){
//     for(int i=1;i<n;i++){
//         int key = arr[i];
//         int j=i-1;
//         while(j>=0 && arr[j]>key){
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j+1]=key;
//     }

// }

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function insertionSortAlgorithm(array) {
  const animations = [];
  const n = array.length;
  let ANIMATION_SPEED = document.getElementById("DELAY").value;                 
  //   console.log(ANIMATION_SPEED)
  var blocks = document.querySelectorAll(".array-bar");                //selecting all bar to make changes later 
  // console.log(blocks);
  // console.log(array);
  if (n == 1) return array;
  insertionSort(array, n, blocks, ANIMATION_SPEED);
  
}

const insertionSort = async (array, n, blocks, ANIMATION_SPEED) => {
  // console.log("inside sort")

  for (let i = 1; i < n; i++) {
    let key = array[i];
    blocks[i].style.backgroundColor = "red";                   //changing colour of key value 

    let j = i - 1;
    var height = blocks[i].style.height;                       //storing height of key 
    while (j >= 0 && array[j] > key) {
      await sleep(ANIMATION_SPEED);
      array[j + 1] = array[j];                                 //overwriting value of j to j+1, i.e shifting value
      blocks[j + 1].style.height = blocks[j].style.height;     //setting height of j and j+1 block , animating shifting
      blocks[j].style.height = key;                            //setting height of jth block to key height, animating shifting
      blocks[i].style.backgroundColor = "#069A8E";             //changing color of key if it is shifting  

      blocks[j].style.backgroundColor = "red";                 //changing colour of jth block when shifting
      await sleep(100);                                        //waiting 100ms for changing jth bar color
      blocks[j].style.backgroundColor = "#069A8E";             //changing jth block colour back to base color
      j--;
    }

    array[j + 1] = key;                                        //placing key at right osition
    blocks[j + 1].style.height = height;                      //changing height of block of key 
    await sleep(ANIMATION_SPEED);
    blocks[i].style.backgroundColor = "#069A8E";              // changing colour of key if it doesnt go inside while loop
  }
  // console.log("done")
  // console.log(array);
};
