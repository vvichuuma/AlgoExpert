
//This is the code for bst in function: 
let Node = function (data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

let Bst = function () {

    let root = new Node();

    this.insert = function (data) {
        //If the root node is null: 
        if (root.data === null) {
            root.data = data;
        } else if (root.data !== null) {

            const insertTerm = function (data, node) {
                if (data > node.data) {
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

            insertTerm(data, root);

        }
    }

    this.deletion = function (data) {

        const deleteTerm = function (data, node) {

            if (node.data === data) {

                if (node.left === null && node.right === null) {
                    return null;
                } else if (node.left === null) {
                    node = node.right;
                    return node;
                } else if (node.right === null) {
                    node = node.left;
                    return node;
                } else if (node.left !== null && node.right !== null) {
                    var tempNode = node.right;
                    while (tempNode.left !== null) {
                        tempNode = tempNode.left;
                    }
                    node.data = tempNode.data;
                    node.right = deleteTerm(node.data, node.right);
                    return node;
                }

            } else if (data > node.data) {
                node.right = deleteTerm(data, node.right);
                return node;
            } else if (data < node.data) {
                node.left = deleteTerm(data, node.left);
                return node;
            }
        }

        deleteTerm(data, root);
    }


    //prints the node: 
    this.print = function () {
        console.log(root);
    }

}

const n1 = new Bst();
n1.insert(100);
n1.insert(120);
n1.insert(80);
n1.insert(95);
n1.insert(70);
n1.insert(105);
n1.deletion(120);
n1.print();
