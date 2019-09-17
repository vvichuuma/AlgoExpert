//This is the code for product sum : 

let productSum = function (array, m = 1) {

    let sum = 0;

    array.forEach(function (e) {

        if (typeof (e) === "object") {
            let s = productSum(e);
            sum += (s * (m + 1));
        } else {
            sum += e;
        }

    });

    return sum;

}

console.log(productSum([1, 4, 6, [7, 8], 9]));