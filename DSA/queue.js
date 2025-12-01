class Queue{
    constructor(){
        this.data ={};
        this.frontIndex = 0;
        this.rearIndex = -1;
    }

    enqueue(element){
        this.rearIndex++;
        this.data[this.rearIndex] = element;
    }

    traverse(){
        let ouput = "";
        for(let i=this.frontIndex; i <= this.rearIndex; i++){
            output += this.data[i] + " ";
        }

        console.log(output);
    }
}

//
let queue = new Queue();
queue1.enqueue(4);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue();