class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linkedlist{

    constructor(){
        this.head = null
    }

    insert_at_beginning(element){
        const node = new Node(element);
        node.next = this.head;
        this.head = node;
    }

    traverse(){
        let current = this.head;
        let output = "";

        while(current){
            output += current.value + " ";
            current = current.next;
        }
        return output;
    }

    insert_at_end(element){
        const node = new Node(element);

        if(!this.head){
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next){
            current = current.next;
        }

        current.next = node;
    }

    inser_after(target,element){
        let current = this.head;
        while(current){
            if(current.value === target){
                const node = new Node(element);
                node.next = current.next;
                current.next = node;
                return;
            }
            current = current.next;
        }

        console.log("Target not found");
    }
}

//
let list1 = new Linkedlist();
list1.insert_at_end(4);
list1.insert_at_end(3);
list1.insert_at_end(5);
list1.inser_after(5,2);
console.log(list1.traverse());
