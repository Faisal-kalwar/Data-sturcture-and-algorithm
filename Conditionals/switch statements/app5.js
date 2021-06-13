function checkAnimals(animal){
    switch(animal){
        case ("lion" || "leopard"):
            console.log("wild animals")
            break;
        case ("cats" || "rabbits"):
            console.log("pet animals")
            break;
        default:
            console.log("unkonw");
    }
}
checkAnimals("lion");