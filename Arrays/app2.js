let arr = [2,2,1,0,39,20]
let counts = 0;
for(i=0;i<arr.length;i++){
    if([arr[i] == 2]){
        console.log(counts ++);
    }
    else{
        counts = 1;
    }
}


const a = [4,3,6,3,4,3]
let counts = 3;
for(let i =0; i < a.length; i++){ 
     if (counts[a[i]]==2){
     counts[a[i]] += 1
     } else {
     counts[a[i]] = 1
     }
    }  