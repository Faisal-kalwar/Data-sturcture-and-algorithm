class Queues{
    constructor(){
        this.items = ["Faisal","Sabahat","Saeed"]
        this.size = 4
    }
    PrintQueues(){
        for(let i = 0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }
    Size(){
        this.Size = this.items.length;
        console.log(this.Size);
    }
}

let myQueue = new Queues();

myQueue.PrintQueues();
myQueue.Size();