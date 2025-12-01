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

    is_empty(){
        return this.frontIndex > this.rearIndex;
    }

    front(){
        //Correction Statement
        if(this.is_empty()) return null;
        return this.data[this.frontIndex];
    }

    size(){
        return this.rearIndex - this.frontIndex +1;
    }
}

//
let queue1 = new Queue();
queue1.enqueue(4);
queue1.enqueue(2);
queue1.enqueue(3);
//queue1.traverse();
console.log(queue1.is_empty());
console.log(queue1.front());
console.log(queue1.size());