//This is the code for fibannaci series: 

function fibannaci(n) {

    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibannaci(n - 1) + fibannaci(n - 2);
    }

}

console.log(fibannaci(8)); 