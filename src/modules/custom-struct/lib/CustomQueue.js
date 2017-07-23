/**
 * Created by wenshao on 2017/7/21.
 * 自定义队列 先进先出
 */
'use strict';

const CustomQueue = (function () {

    const _items = Symbol('_items');
    class CustomQueue {
        constructor() {
            this[_items] = [];
        }

        // 队列尾部添加一个或多个元素
        enqueue() {
            return this[_items].push(...arguments);
        }

        // 移除队列首部的第一个元素
        dequeue() {
            return this[_items].shift();

        }

        // 查看队列的第一个元素
        front() {
            return this[_items][0];
        }

        // 判断队列是否为空
        isEmpty() {
            return this.size() === 0;
        }

        // 返回队列的长度
        size() {
            return this[_items].length;
        }

        // 返回队列的元素字符串
        print() {
            return this[_items].toString();
        }

    }
    return CustomQueue;

})();
module.exports = CustomQueue;
