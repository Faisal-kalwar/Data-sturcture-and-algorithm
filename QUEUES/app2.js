class Queues{
    constructor(){
        this.items = [];
        this.size = 4;
    }
    enqueue(item){
        if(this.items.lenght+1 > this.size){
            console.log("Overflow");
        }
        else{
            this.items.push(item);
        }
    }
    dequeue(){
        if(this.items.lenght==0){
            return true;
        }
        else{
            this.items.shift();
        }
    }
    isEmpty(){
        if(this.items.lenght == 0){
            console.log("ture");
        }
        else{
            console.log("false");
        }
    }
    isFull(){
        if(this.items.lenght == this.size){
            console.log("Full");
        }
        else{
            console.log("have space");
        }
    }
}
let myQueue = new Queues();
 myQueue.isEmpty();
 myQueue.enqueue();
 myQueue.enqueue(0);
 myQueue.enqueue(1);
 myQueue.enqueue(2);
 myQueue.enqueue(3);
 myQueue.enqueue(4);
 myQueue.enqueue(5);
 myQueue.isFull();