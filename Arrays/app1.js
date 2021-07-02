let arr = [9,7,75,32,3234,5,3]
// for(i=0; i<arr.length;i++){
//     if(arr[i]==3){
//         console.log(true)
//         break;
//     }
//     else{
//         console.log(false)
//     }
// }
i = 0;
while ( i < arr.length){
    if(arr[i]==3){
       console.log(true);
       break;
    }
    else{
        console.log(false);
    }
    i++;
}