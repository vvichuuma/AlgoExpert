//This is the code for the closest value to a given number in the array: 

function closesValue(a, t) {

    var l = a.length;
    var value = null;
    var codeWord = 0;
    var f_array = [];
    for (let i = 0; i < l; i++) {

        let diff = Math.abs(t - a[i]);

        if (t === a[i]) {
            codeWord = a[i];
            break;
        }
        else if (value === null) {
            value = diff;
            codeWord = a[i];
        } else if (value > diff) {
            value = diff;
            codeWord = (a[i]);
        } else if (value === diff) {
            f_array.push(a[i]);
        }

    }

    f_array.push((codeWord));
    console.log(f_array);

    var l2 = f_array.length;
    var n2 = null;
    var f2 = [];
    var c2 = 0;
    for (let j = 0; j < l2; j++) {
        let d = Math.abs(f_array[j] - t);
        if (n2 === null) {
            n2 = d;
            c2 = f_array[j];
        } else if (n2 > d) {
            n2 = d;
            c2 = f_array[j];
        } else if (n2 === d) {
            f2.push(f_array[j]);
        }
    }

    f2.push(c2);
    console.log('---');
    console.log(f2);
}

closesValue([2, 4, 8, 1, 3, 6, 7.2, 10], 7);