//  string: ‘Karachi’. Convert it to ‘Kolachi’
let str = "Karachi";
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}
str = str.replaceAt(1,'o');
str = str.replaceAt(2,'l')
console.log(str);

//  last three characters removed
let course = "Node.js";
course = course.slice(0,course.length-3);
console.log(course);

// add s to its last index to make it a complete name
var a = "React.j";
var b = "s";
var output = [a.slice(0, a.length), b, a.slice(a.length)].join('');
console.log(output);