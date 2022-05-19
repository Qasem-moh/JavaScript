let ar = [19, 5, 42, 2, 77]
let ar2 = [10, 343445353, 3453445, 3453545353453]
function sumTwoSmallestNumbers(numbers){
    numbers = numbers.sort(function(a, b){return a - b; });
    // return numbers[0] + numbers[1];
    console.log(numbers)
    console.log(numbers[0])
    console.log(numbers[1])


};

console.log(sumTwoSmallestNumbers(ar));
console.log(sumTwoSmallestNumbers(ar2));