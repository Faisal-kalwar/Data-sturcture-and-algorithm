// let animals = [['cat', 'rabbit'],['pigeon','parrot'],['goldfish','whale']]
// for(let i = 0; i< animals.length; i++){
//     for(let j = 0; j <animals[i].length; j++){
//         console.log(animals[i][j]);
//     }
// }






let Animals = [['cat', 'rabbit'],['pigeon','parrot'],['goldfish','whale']]
for(let i = 0; i < Animals.length; i++){
    for(let j = 0; j< animals[i].length; j++){
        if(Animals[i][j] == 'cat' || Animals[i][j] == 'rabbit' ){
            console.log("pet animals")
            break;
        }
        else if(Animals[i][j] == 'pigoen' || Animals[i][j] == 'parrot'){
            console.log("pet birds");
            break;
        }
        else if(Animals[i][j] ==  'goldfish' || Animals[i][j] == 'whale'){
            console.log(" fish");
            break;
        }
    }
}