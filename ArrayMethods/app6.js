let numbers = [1, 9, 20, 20, 4, 0, 3, 4];
function customInsertAtend(usernum){
    numbers.length = numbers.length+1;
    numbers[numbers.length-1] = usernum;
}
customInsertAtend(9)
console.log(numbers);


let Arr = [0, 3, 4, 5, 6, 9, 0];
// Arr.length = Arr.length-1;
function customInsertAtend(UserNumber){
    for(let i = Arr.length; i >= 0; i--){
       Arr[i+1] = Arr[i]; 
    }
    Arr[0] = UserNumber;
}
customInsertAtend(1);
console.log(Arr);