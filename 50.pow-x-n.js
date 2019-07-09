/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var m = Math.abs(n);
    if(n == 0){
        return 1;
    }
    if(x == 2){
        return n > 0 ? x << (m - 1) : 1 / (x << (m - 1));
    }
    var result = x;
    for (var i = 1; i < m; i++) {
        result *= x;
    }
    return n > 0 ? result : 1 / result;
};

