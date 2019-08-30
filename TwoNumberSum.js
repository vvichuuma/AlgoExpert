//The code should return the first pair of two numbers which would return the targetnumber: 

function twoNumberSum(array, targetSum) {
    // Write your code here.
    var l = array.length;
    var h = {};
    var ans = [];

    for (let i = 0; i < l; i++) {
        let t = targetSum - array[i];
        if (t in h) {
            ans.push(t);
            ans.push(array[i]);
            return ans.sort((a, b) => a - b);
        } else {
            h[array[i]] = true;
        }
    }


    return ans;

}
//since 5 and 6 return 11 first , it should return the pair.
console.log(twoNumberSum([3, 4, 5, 6, 7, 8, 9], 15));

