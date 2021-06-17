let animals = ['cat','rabbit','parrot','goldfish'];
let findAnimal = prompt("Enter animal");
for(i = 0; i < animals.length; i++){
    if(findAnimal === 'cat'){
        console.log("yes cats are available")
        break;
    }
    else if(findAnimal === 'rabbit'){
        console.log('yes rabbits are available');
        break;
    }
    else if(findAnimal === 'parrot'){
        console.log("yes parrots are available");
        break;
    }
    else if(findAnimal === 'goldfish'){
        console.log("yes goldfish are available");
        break;
    }
    else{
        console.log("Not present in list")
    }
}