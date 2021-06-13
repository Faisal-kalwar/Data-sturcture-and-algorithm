function checkAnimals(animals){
    if (animals == "lion" || animals == "leopard"){
        console.log("wildAnimals")
    }
    else if (animals == "cat" || animals == "rabbits"){
        console.log("pet Animals")
    }
    else{
        console.log("unkown");
    }
}
checkAnimals("lion");