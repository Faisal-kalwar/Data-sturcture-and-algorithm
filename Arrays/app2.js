let arr = [2,2,1,0,39,20,39]
function SearchItems(arr, query) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
       if(arr[i] === query){
          count++;
          continue;
    };
    if(Array.isArray(arr[i])){
       count += calculateCount(arr[i], query);
    }
 };
 return count;
};

console.log(SearchItems(arr, 2));


const a = [4,3,6,3,4,3]
let counts = 3;
for(let i = 0; i < a.length; i++){ 
     if (counts[a[i]]==counts){
     counts[a[i]] += 1
     } else {
     counts[a[i]] = 1
     }
    }  