var enteredNumber = 12;
switch (enteredNumber % 2) {
    case 0:
        console.log(enteredNumber + " is an even number.");
        break;
    case 1:
        console.log(enteredNumber + " is an odd number.");
        break;
    default:
        console.log("Invalid input");
}