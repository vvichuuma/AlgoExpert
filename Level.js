//This is the code for Breath - in - first - search: 

let Node = function (data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

let Bst = function () {

    let root = new Node();

    this.insert = function (data) {
        const node = root;
        if (node.data === null) {
            node.data = data;
        } else if (node.data !== null) {

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

    this.level = function () {
        let Q = [];
        var r = [];
        Q.push(root);
        while (Q.length > 0) {
            let node = Q.shift();
            r.push(node.data);
            if (node.left !== null) {
                Q.push(node.left);
            }
            if (node.right !== null) {
                Q.push(node.right);
            }
        }

        console.log(r);
    }

    this.print = function () {
        console.log(root);
    }

}

const n1 = new Bst();
n1.insert(100);
n1.insert(80);
n1.insert(70);
n1.insert(120);
n1.insert(130);
n1.level();