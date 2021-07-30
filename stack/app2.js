class Stack{
    constructor(){
        this.items = [];
        this.size = 5;
    }
    push(item){
        this.items.push(item);
        this.size++;
    }
    pop(){
        this.items.pop();
        this.size--;
        
    }
    peek(){
        console.log(this.items[this.items.length-1]);
    }
    isEmpty(){
        if(this.items.length == 0){
            return true;
        }
        else{
            return false;
        }
    }
    isFull(){
        return this.items.length = this.size;
    }
    printStack(){
        for(let i=0; i<this.items.length;i++){
            console.log(this.items[i]);
        }
    }


}
//creating object for stack class
let myStack = new Stack();

// myStack.push("karachi");
// myStack.push("Ghotki");
// myStack.push("Lahore");
// myStack.printStack();

// myStack.pop();
// myStack.printStack();

// myStack.peek();
// myStack.printStack();

myStack.isEmpty();
myStack.printStack();

// myStack.isFull();
// myStack.printStack();