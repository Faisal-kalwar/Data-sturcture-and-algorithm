function sum(number1, number2){
    result = number1 + number2;
    switch(result){
    case 11: 
        return true;
        break;
    default:
        console.log(false);
    }
}
sum(4,7)