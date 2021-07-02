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

let course = "Node.js";
course = course.slice(0,course.length-3);
console.log(course);


var lastModule = "React.j";
String.prototype.insert = function(index, string) {
    if (index > 0) {
      return this.substring(0, index) + string + this.substr(index);
    }
  
    return string + this;
  };
  something = lastModule.insert(lastModule.length, "s");
  console.log(lastModule)