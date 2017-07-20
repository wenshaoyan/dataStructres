/**
 * Created by wenshao on 2017/7/16.
 * 自定义数组
 */
'use strict';
class CustomArray extends Array {
    /**
     * 构造函数
     */
    constructor() {
        let args = Array.prototype.slice.call(arguments);
        super(...args);
    }

    /**
     * 数组头部插入一个元素
     * @param args1         插入的元素
     * @returns {number}    插入元素的个数
     */
    unshift(args1) {
        for (let index = this.length; index >= 0; index--) {
            this[index] = this[index - 1];
        }
        this[0] = args1;
        return 1;
    }

    /**
     * 数组尾部插入多个元素
     * @returns {Number}    插入的个数
     */
    push() {
        for (let val of arguments) {
            this[this.length] = val;
        }
        return arguments.length;
    }

    /**
     * 删除首部的元素
     * @returns {Number}    删除的元素
     */
    shift() {
        const firstMenu = this[0];
        for (let index = 0; index < this.length; index++) {
            this[index] = this[index + 1];
        }
        this.pop();
        return firstMenu;
    }

    /**
     * 对数组中的每个元素进行遍历,如果该函数每项都返回true 则返回true
     * @param func
     * @returns {boolean}   true or false
     */
    every(func) {
        let value = false;
        if (func instanceof Function) {
            for (let val of this) {
                if (!func(val)) {
                    value = false;
                    break;
                } else {
                    value = true;
                }
            }
        }
        return value;
    }

    /**
     * 遍历数组
     * @param func
     */
    forEach(func) {
        if (func instanceof Function) {
            let index = 0;
            for (let val of this) {
                func(val, index++);
            }
        }

    }

    /**
     * 返回每个元素执行func函数的返回值
     * @param func
     * @returns {Array}
     */
    map(func) {
        const arr = [];
        if (func instanceof Function) {
            this.forEach((val) => {
                arr.push(func(val));
            })
        }
        return arr;

    }

    /**
     * 返回执行func为true的新的元素数组
     * @param func
     * @returns {Array}
     */
    filter(func) {
        const arr = [];
        if (func instanceof Function) {
            this.forEach((val) => {
                if (func(val)) arr.push(val);
            })
        }
        return arr;
    }

    change(i, j) {
        let valI = this[i];
        this[i] = this[j];
        this[j] = valI;
    }

    /**
     * 逆序数组的元素
     * @returns {CustomArray}   新的数组
     */
    reverse() {
        if (this.length <= 1) {
            return this;
        }
        const max = this.length % 2 == 0 ? (this.length / 2) - 1 : this.length % 2;
        for (let i = 0, j = this.length; i <= max; i++, j--) {
            this.change(i, j - 1);
        }
        return this;
    }

    /*sort(func) {
        if (func instanceof Function) {
            if (this.length <= 1) {
                return this;
            }
            for (let index = 0; index < this.length - 1; index++) {
                let result = func(index, index + 1);
                if (typeof result === "number") {
                    if (result < -1) {
                        this.change(index, index + 1);
                    }
                }
                if (!result) {
                    this.change(index, index + 1);
                }

            }

        } else if (func === undefined) {
            for (let index = 0; index < this.length - 1; index++) {
                let result = this[index] > this[index + 1];
                if (result) {
                    this.change(index, index + 1);
                }

            }

        }
        return this;

    }*/

}
module.exports = CustomArray;