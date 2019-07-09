/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var conbine = [...nums1, ...nums2].sort((a, b) => a - b);
    if ((conbine.length / 2) % 1 != 0) {
        return conbine[(conbine.length - 1) / 2];
    }
    else{
        return (conbine[conbine.length / 2] + conbine[conbine.length / 2 - 1]) / 2;
    }
};

