class Stack{
    constructor(){
        this.items = [];
        this.size = 5;
    }
    // add element to top of stac
    push(item){
        this.items.push(item);
        this.size++;
    }

    //remove top element in stack
    pop(){
        this.items.pop();
        this.size--;
        
    }
    // print last element of array
    peek(){
        console.log(this.items[this.items.length-1]);
    }
    //check if the stack is empty 
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

// myStack.isEmpty();

myStack.isFull();
