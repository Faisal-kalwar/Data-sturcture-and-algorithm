class Stack{
    constructor(){
        this.items = [1,2];
        this.size = 2;
    }
    Clear(){
        this.items = [];
        this.size = 0;
        return this.items
    }
    toString(){
        this.items.toString();
        console.log(typeof(this.items))
    }
    PrintStack(){
        for(let i = 0; i < this.items.length; i++){
            console.log(this.items[i])
        }
    }
}
let myStack = new Stack();

myStack.Clear();
myStack.PrintStack();

myStack.toString();
myStack.PrintStack()