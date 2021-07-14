let arr = ["Faisal","Ali","Saeed"];
function insert(){
    for(i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}
insert(arr.unshift("Sabahat"));
insert(arr.pop());
insert(arr.push("Aves"))
