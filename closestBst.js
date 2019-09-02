//This is the code for the closest BST: 

class BST {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    addition(value) {
        if (this.value === null) {
            this.value = value;
        } else {
            if (value < this.value) {
                if (this.left === null) {
                    this.left = new BST(value);
                } else {
                    this.left.addition(value);
                }
            } else if (value >= this.value) {
                if (this.right === null) {
                    this.right = new BST(value);
                } else {
                    this.right.addition(value);
                }
            }
        }

        return this;
    }

    closestValue(value, closest = null, node = null) {

        if (this.value === value) {

            if (closest === null && node === null) {
                closest = Math.abs(this.value - value);
                node = this.value;
            } else {
                node = this.value;
            }

            return `Yes the node closest is ${node}`;

        } else if (value < this.value) {

            if (closest === null && node === null) {
                closest = Math.abs(this.value - value);
                node = this.value;

            } else if (Math.abs(this.value - value) < closest) {
                closest = Math.abs(this.value - value);
                node = this.value;
            }

            if (this.left !== null) {
                return this.left.closestValue(value, closest, node);
            } else if (this.left === null) {
                //node = this.value;
                return `The closest value is ${node}`;
            }


        } else if (value > this.value) {

            if (closest == null && node == null) {
                closest = Math.abs(this.value - value);
                node = this.value;
            } else if (Math.abs(this.value - value) < closest) {
                closest = Math.abs(this.value - value);
                node = this.value;
            }

            if (this.right !== null) {
                return this.right.closestValue(value, closest, node);
            } else if (this.right === null) {
                //node = this.value;
                return `The closest value is ${node}`;
            }

        }



    }


}

const n1 = new BST();
n1.addition(10);
n1.addition(5);
n1.addition(15);
n1.addition(4);
n1.addition(7);
n1.addition(3);
n1.addition(13);
n1.addition(20);
console.log(n1.closestValue(15));
//console.log(n1);