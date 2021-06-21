let arr = [ [1, 2], [3, 4], [5, 6] ]
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j< arr[i].length; j++){
        console.log(arr[i][j]);
    }
}

let arr = [ [1, 2], [3, 4], [5, 6] ];
let i = 0;
while (i < arr.length) {
    let j = 0;
    while (j < arr[i].length) {
        console.log(arr[i][j]);
        j++;
    }
    i++;
}