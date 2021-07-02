let myName = "Faisal";

// We can run loop on strings
for(i=0;i<myName.length;i++){
    console.log(myName[i]);
}
myName.length();
// Strings are indexable
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);
console.log(myName[3]);
console.log(myName[4]);
console.log(myName[5]);
//Strings are same like array in indexing 
console.log(myName[myName.length-2]);

var firstName = "Faisal";
var lastName = " kalwar";
var fullName = firstName.concat(lastName);