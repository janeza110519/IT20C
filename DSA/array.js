class Array{

    constructor(initialData = []){
        this.data = {};
        this.length = 0;

        for(let i=0 ; i < initialData.length; i++){
            this.data[i] = initialData[i];
            this.length++;
        }
    }

    traverse(){
        let ouput = "";

        for (let i=0; i<this.length ; i++){
            ouput += this.data[i] + " ";
        }

        console.log(ouput);
    }

    insert(index,element){
        //Correcting statement
        if(index < 0 || index > this.length){
            console.log("Invalid index");
            return;
        }

        //Shifting conditon
        for(let i = this.length; i > index; i--){
            this.data[i] = this.data[i-1];
        }

        this.data[index] = element;
        this.length;
    }

    search(element){
        for(let i=0; i < this.length;i++){
            if(this.data[i] === element){
                console.log(element + " is found at index "+ i);
                return i;
            }
        }

        console.log(element + " is found at any index ");
        return -1;
    }

    update(index,element){

        //Correcting statement
        if(index < 0 || index >= this.length){
            console.log(" Invalid Index ");
        }

        this.data[index] = element;
    }

    delete(index){

        //Correcting statement
        if(index < 0 || index >= this.length){
            console.log(" Invalid Index");
            return;
        }

        //Shifting
        for(let i = index; i < this.length; i++){
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length-1];
        this.length--;
    }
}

//
arr1 = new Array([4,2,3]);

arr1.traverse();
arr1.update(1,50);
arr1.traverse();
arr1.delete(0);
arr1.traverse();