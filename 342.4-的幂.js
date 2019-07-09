/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num === 1){
        return true;
    }
    else if(num < 4){
        return false;
    }
    return (num & (num - 1)) == 0 && (num & 0xAAAAAAAA) == 0;
};

