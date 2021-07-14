let Arr =  [3, 8, 10, 12, 45, 34, 34, 34, 2, 2, 0];
Arr.length = Arr.length+1;
while(i>=2){
    Arr[i+1] = Arr[i];
    i = i -1;
}
Arr[2] = item;
console.log(Arr);