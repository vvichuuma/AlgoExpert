//This is the code for depth-in-search in BST: 

let Node = function (data = null, left = null, right = null, visited = false) {
    this.data = data;
    this.left = left;
    this.right = right;
}

let Bst = function () {

    let root = new Node();

    this.insert = function (data) {

        const insertTerm = function (data, node) {
            if (node.data === null) {
                node.data = data;
                return node;
            } else {
                if (data >= node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return node;
                    } else if (node.right !== null) {
                        node.right = insertTerm(data, node.right);
                        return node;
                    }
                } else if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return node;
                    } else if (node.left !== null) {
                        node.left = insertTerm(data, node.left);
                        return node;
                    }
                }
            }
        }
        insertTerm(data, root);

    }

    this.print = function () {
        console.log(root);
    }

    this.depth = function () {

        var array = [];
        const node = root;

        const depthTerm = function (node) {
            array.push(node.data);
            if (node.left) {
                depthTerm(node.left);
            }
            if (node.right) {
                depthTerm(node.right);
            }
        }
        depthTerm(node);

        console.log(array);
    }



}

const n1 = new Bst();
n1.insert(15);
n1.insert(13);
n1.insert(20);
n1.insert(11);
n1.insert(14);
n1.insert(18);
n1.insert(22);
//n1.print();
n1.depth();