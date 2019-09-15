

let Node = function (data = null, next = null) {
    this.data = data;
    this.next = next;
}

let ll = function () {

    let root;

    let a = [];

    this.insert = (data) => {
        root = new Node(data, root);
        a.push(root);
    }

    this.print = () => {
        console.log(a);
    }
}

const n1 = new ll();
n1.insert(100);
n1.insert(120);
n1.print();