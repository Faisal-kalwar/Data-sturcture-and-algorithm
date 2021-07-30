class Queues{
    constructor(){
        this.items = [];
        this.size = 4;
    }
    // by customise method
    enqueueCustomised(item){
        this.items.length = this.items.length+1;
        for(let i = 0; i < this.items.length; i++){
            this.items[this.items.length-1] = item;
        }
    }
    // by bulit in method add item
    enqueueBuiltIn(item){
        if(this.items.length+1 > this.size){
            console.log('overflow')
        }
        else{
            this.items.push(item);
        }
    }
    peek(){
        console.log(this.items[0]);
    }
    
    dequeueBuiltIn(){
        if(this.items.length == 0){
            console.log("underflow")
        }
        else{
            this.items.shift();
        }
    }

    dequeueCustomise(){
        for(let i=0; i<this.items.length;i++){
            this.items[i] = this.items[this.items.length+1]
        }
        this.items.length = this.items.length-1;
    }
    PrintQueue(){
        for(let i = 0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }

}
let myQueue = new Queues();
myQueue.enqueueBuiltIn("Faisal kalwar");;
myQueue.enqueueCustomised("Sir Saeed");
myQueue.enqueueBuiltIn("maam Sabahat");
myQueue.PrintQueue();

myQueue.dequeueBuiltIn();
myQueue.dequeueCustomise();
myQueue.PrintQueue();