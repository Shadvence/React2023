/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function toBe(res){
        if(val === res){
            return true;
        }
        else{
            throw new Error('Not Equal');
        }
    }
    function notToBe(res){
        if(val === res){
            throw new Error('Equal');
        }
        else{
            return true;
        }
    }
    return {
        toBe, notToBe
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */