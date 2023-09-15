/**
 * @return {number}
 */
var argumentsLength = function(...args) {
 return args.length;
};

var argsArr1 = [5,6,7,8];
var result1 = argumentsLength(...argsArr1);
console.log(result1); 
/**
 * argumentsLength(1, 2, 3); // 3
 */