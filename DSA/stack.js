class stack{
    constructor(){
        this.data ={};
        this.topIndex = -1;
    }

    traverse(){
        let ouput = "";
        for (let i=0; i<=this.topIndex; i++){
            ouput += this.data[i] + " ";
        }

        console.log(ouput);
    }

    push(element){
        this.topIndex++;
        this.data[this.topIndex] = element;
    }

    is_empty(){
        return this.topIndex ===-1;
    }

    peek(){
        //Correcting statement
        if(this.is_empty()) return null;
        return this.data[this.topIndex];
    }

    pop(){
        //Correcting statement
        if(this.is_empty()) return null;

        let value = this.data[this.topIndex];
        delete this.data[this.topIndex];
        this.topIndex--;
        return value;
    }

    size(){
        return this.topIndex;
    }
}

//

let stack1 = new stack();
stack1.push(2);
stack1.push(3);
stack1.push(1);
stack1.traverse();
//console.log("is the stack empty?" + stack1.is_empty()):
console.log("Top element of the stack is " + stack1.peek());
console.log("Top element " + stack1.pop() + " is popped, the new top element is " + stack1.peek());
console.log("New stack size: " + stack1.size());
stack1.traverse();