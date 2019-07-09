/*
 * @lc app=leetcode.cn id=201 lang=javascript
 *
 * [201] 数字范围按位与
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var result = m & n;
    for(var i=m+1;i<n;i++){
        if(result == 0){
            break;
        }
        result = result & i;
    }
    return result;
};

