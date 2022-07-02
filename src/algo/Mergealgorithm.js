export function mergeSortAlgorithm(array){
const animations=[];
if(array.length<=1) return array;
const auxiliaryArray= array.slice();
 mergeSort(array,0,array.length-1,auxiliaryArray,animations)
 return animations;
}


function mergeSort(
    mainArray,
   left,
    right,
    auxiliaryArray,
    animations
){
    if(left==right) return;
    const mid = Math.floor((left+right)/2);
    mergeSort(auxiliaryArray,left,mid,mainArray,animations);         
    mergeSort(auxiliaryArray,mid+1,right,mainArray,animations);
    doMerge(mainArray,left,mid,right,auxiliaryArray,animations);
}

function doMerge(
mainArray,
left,
mid,
right,
auxiliaryArray,
animations
){

   let i=left;
   let j= mid+1;
   let k=left;             //for merging in main array
 while(i<=mid && j<=right){
    
    if(auxiliaryArray[i]<=auxiliaryArray[j]){
        animations.push([i,j]);             //for changing colour of testing bar
        animations.push([i,j]);             // reverting back to base colour 

        animations.push([k,auxiliaryArray[i]]);      //for overriding values of auxiliary to main array 
        mainArray[k++]=auxiliaryArray[i++];          


    }
    else{
        animations.push([i,j]);
        animations.push([i,j]);
        animations.push([k,auxiliaryArray[j]]);
        mainArray[k++]=auxiliaryArray[j++];

    }
}

while(i<=mid){
    animations.push([i,i]);
    animations.push([i,i]);
    animations.push([k,auxiliaryArray[i]]);
    mainArray[k++]=auxiliaryArray[i++];

}

while(j<=right){
    animations.push([j,j]);
    animations.push([j,j]);
    animations.push([k,auxiliaryArray[j]]);
    mainArray[k++]=auxiliaryArray[j++];
}

}