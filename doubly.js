
//set Head - 
//set Tail - 
//search - 
//remove a node - 
//contains node with value - 
//traverse the List - and use the loop. 
//node bindings. 
//insertion part. 

let Node = function (data = null, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
}

let Dbl = function (head = null, tail = null) {

    //inserting a data in the List: 
    this.insert = function (data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            //so we just move the tail node to the right: 
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }


    //Gives a list of data :  
    this.datas = function () {
        while (this.head) {
            console.log(this.head.data);
            this.head = this.head.next;
        }
    }

    //remove nodes: 
    this.remove = function (data) {
        while (this.head) {
            if (this.head.data === data) {
                this.removeBindings(this.head);
                return;
            }
            this.head = this.head.next;
        }
    }

    this.removeBindings = function (node) {
        if (node.prev === null) {
            node.next.prev = null;
        } else if (node.next === null) {
            node.prev.next = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
    }

}

const n1 = new Dbl();
n1.insert(1);
n1.insert(2);
n1.insert(3);
n1.insert(4);
n1.remove(1);
n1.datas();
//console.log(n1);
