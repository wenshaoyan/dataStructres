/**
 * Created by yanshaowen on 2017/8/10
 */
'use strict';

const Log = require('./modules/log');

/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 给定一个整形数组nums,找出两个不重复的元素相加等于target 并返回对应两个数组的下标
 *
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * @param nums      给定的数组
 * @param target    目标值
 * @returns {Array} 计算后两个元素的下标
 */
const log1 = new Log(false);
let twoSum = (nums, target) => {  //    O(n^2)   O(1)
    const result = [];
    outerloop://命名外圈语句
        for (let i = 0; i < nums.length; i++) {
            innerloop:
                for (let j = i + 1; j < nums.length; j++) {
                    if (nums[i] + nums[j] === target) {
                        result.push(i);
                        result.push(j);
                        break outerloop;
                    }
                }
        }

    return result;
};
let twoSum1 = (nums, target) => {//    O(n)   O(n)
    let map = new Map();
    const result = [];
    nums.forEach((val, index) => map.set(val, index));
    for (let i = 0; i < nums.length; i++) {
        let values = target - nums[i];
        if (map.has(values)) {
            result.push(i);
            result.push(map.get(values));
            break;
        }

    }
    return result;
};

let twoSum2 = (nums, target) => {//    O(n)   O(n)
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let values = target - nums[i];
        if (map.has(values)) {
            return [i, map.get(values)];
        }
        map.set(nums[i], i);
    }
};
const result = twoSum2([1, 2, 3, 4, 6, 5], 8);
log1.i(result);


/**
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * 342+465=807
 * 两个数字求和，数字用链表表示，每一个结点代表一位。链表顺序与数字顺序相反，即表头存放数字的最低位。

 * @param l1
 * @param l2
 * @returns
 */
const log2 = new Log(true);
const addTwoNumbers = (l1, l2) => { // O(max(l1.length,l2.length)) O(max(l1.length,l2.length))
    let current1 = l1.getHead();
    let current2 = l2.getHead();
    const list = [];
    let pre = 0;
    while (true) {
        let sum;
        if (!current1 && !current2) {
            break;
        } else if (current1 && current2) {
            sum = current1.element + current2.element + pre;
            current1 = current1.next;
            current2 = current2.next;
        } else if (current1) {
            sum = current1.element + pre;
            current1 = current1.next;
        } else if (current2) {
            sum = current2.element + pre;
            current2 = current2.next;
        }
        if (sum > 9) {
            pre = Math.floor(sum / 10);
            list.push(sum % 10);
        } else {
            pre = 0;
            list.push(sum);
        }
    }
    if (pre !== 0) list.push(pre);


    return list;
};


let customStruct = require('./modules/custom-struct');
const LinkedList = customStruct.LinkedList;
const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();

/*linkedList1.append(2);
linkedList1.append(4);
linkedList1.append(3);


linkedList2.append(5);
linkedList2.append(6);
linkedList2.append(4);*/
linkedList1.append(5);
linkedList2.append(5);
/*let v1 = [2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 9];
let v2 = [5, 6, 4, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 9, 9, 9, 9];
v1.forEach((value) => {
    linkedList1.append(value);
})
v2.forEach((value) => {
    linkedList2.append(value);
})*/
log2.i(addTwoNumbers(linkedList1, linkedList2));

