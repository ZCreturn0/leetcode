/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    // 进位
    var and = a & b;
    // 单次计算留1
    var xor = a ^ b;
    // 进位左移(做进位)
    var result;
    if(and === 0){
        result = xor;
    }
    else{
        result = and << 1;
    }
    while(and != 0){
        and = xor & result;
        xor = xor ^ result;
        if (and === 0) {
            result = xor;
        }
        else{
            result = and << 1;
        }
    }
    return result;
};

