//This is the code for Bst in class component: 

class Bst {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    insert(value) {
        if (this.value === null) {
            this.value = value;
        } else if (this.value !== null) {

            if (value > this.value) {
                if (this.right === null) {
                    this.right = new Bst(value);
                } else if (this.rigth !== null) {
                    this.right.insert(value);
                }
            } else if (value < this.value) {
                if (this.left === null) {
                    this.left = new Bst(value);
                } else if (this.left !== null) {
                    this.left.insert(value);
                }

            }

            return this;
        }

    }

    contains(value) {
        if (this.value === value) {
            return true
        } else if (value < this.value) {
            if (this.left !== null) {
                return this.left.contains(value);
            } else {
                return false;
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                return this.right.contains(value);
            } else {
                return false;
            }
        }

    }

    remove(value, parent = null) {

        if (value > this.value) {

            if (this.right !== null) {
                this.right.remove(value, this);
            }

        } else if (value < this.value) {

            if (this.left !== null) {
                this.left.remove(value, this);
            }

        } else {

            if (this.left !== null && this.right !== null) {
                this.value = this.right.getMinValue();
                this.right.remove(this.value, this);
            } else if (parent === null) {

                if (this.left !== null) {
                    this.value = this.left.value;
                    this.left = this.left.left;
                    this.right = this.left.right;
                } else if (this.right !== null) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                } else {
                    this.value = value;
                }

            } else if (parent.left === this) {
                parent.left = this.left !== null ? this.left : this.right;
            } else if (parent.right === this) {
                parent.right = this.left !== null ? this.left : this.right;
            }

        }

        return this;

    }


    getMinValue() {
        if (this.left !== null) {
            return this.left.getMinValue();
        } else if (this.left === null) {
            return this.value;
        }
    }

}

const n1 = new Bst();
n1.insert(100);
n1.insert(80);
n1.insert(120);
n1.insert(70);
n1.insert(95);
n1.insert(105);
n1.insert(130);
n1.remove(80);
n1.remove(95);
console.log(n1);


