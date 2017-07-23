/**
 * Created by wenshao on 2017/7/21.
 * 双向链表
 */
'use strict';
const LinkedList = (function () {

    class Node {
        constructor(element) {
            this._element = element;
            this._next = null;  // 下一个元素
            this._prev = null;   //上一个元素
        }


        get element() {
            return this._element;
        }

        set element(value) {
            this._element = value;
        }

        get next() {
            return this._next;
        }

        set next(value) {
            this._next = value;
        }

        get prev() {
            return this._prev;
        }

        set prev(value) {
            this._prev = value;
        }
    }
    const _length = Symbol('_length');
    const _head = Symbol('_head');
    const _tail = Symbol('_tail');
    const _func_middle_insert = Symbol('_func_middle_insert');  // 在current之前插入node


    const middleInsert = function (current, node) {
        let prevNode = current.prev;
        prevNode.next = node;
        node.prev = prevNode;
        node.next = current;
        current.prev = node;
    };


    class LinkedList {
        constructor() {
            this[_length] = 0;
            this[_head] = null;
            this[_tail] = null;
            this[_func_middle_insert] = middleInsert;

        }

        /**
         * 尾部添加新的元素
         * @param element   元素
         */
        append(element) {
            const node = new Node(element);
            if (this[_head] === null) {
                this[_head] = node;
                this[_tail] = node;
            } else {    // 添加到尾部
                const lastEle = this[_tail];    // 尾部元素
                lastEle.next = node;
                node.prev = lastEle;
                this[_tail] = node;

            }
            this[_length]++;
        }

        /**
         * 按位置插入指定的元素
         * @param position  指定的位置
         * @param element   元素
         */
        insert(position, element) {
            let current = this[_head];
            if (typeof position != "number" || position < 0) {
                return null;
            }
            const node = new Node(element);
            if (position >= this.size()) {  // 大于链表的长度则添加到末尾
                this.append(element);
            } else if (position == 0) { // 插入到头部
                let nextTemp = this[_head];
                this[_head] = node;
                node.next = nextTemp;
                nextTemp.prev = node;
                this[_length]++;

            } else if (position > this.size() / 2) { // 插入的位置大于1/2 长度 则从尾部开始遍历
                let index;
                current = this[_tail];  // 尾部节点
                for (index = (this.size() - position); index > 1; index--) {
                    current = current.prev;
                }
                this[_func_middle_insert](current, node);
                this[_length]++;

            } else {    // 从头部开始遍历
                let index;

                for (index = 0; index < position; index++) {
                    current = current.next;
                }
                this[_func_middle_insert](current, node);
                this[_length]++;
            }
        }


        /**
         * 按位置删除对应的元素
         * @param position  指定的位置
         */
        removeAt(position) {
            let current;
            if (typeof position != "number" || position < 0 || position >= this.size()) {
                return null;
            }
            let index;
            if (position == 0) {    // 头部
                current = this[_head];
                this[_head] = current.next;
                if (this.size() == 1){
                    this[_tail] = null;
                }
                this[_head].prev = null;

            } else if (position == this.size() - 1) {   // 尾部
                current = this[_tail];
                this[_tail] = current.prev;
                this[_tail].next =null;
            } else if (position > this.size() / 2) {    // 大于1/2 位置
                current = this[_tail];  // 尾部节点
                for (index = (this.size() - position); index > 1; index--) {
                    current = current.prev;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
            } else {
                current = this[_head];  // 头部节点
                for (index = 0; index < position; index++) {
                    current = current.next;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
            this[_length]--;
            return current.element;

        }

        /**
         * 按元素值删除
         * @param element   元素
         */
        remove(element) {
            return this.removeAt(this.indexOf(element));
        }

        /**
         * 按元素查找第一次出现的位置
         * @param element
         */
        indexOf(element) {
            let current = this[_head];
            let position = 0;
            while (current) {
                if (current.element == element) {
                    return position;
                }
                current = current.next;
                position++;
            }
            return -1;

        }

        /**
         * 判断是否为空
         */
        isEmpty() {
            return this.size() === 0;
        }

        /**
         * 返回链表的大小
         */
        size() {
            return this[_length];

        }

        /**
         * 获取头部的元素
         * @return {element}    元素值
         */
        getHead() {
            return this[_head].element;
        }

        toString() {
            let current = this[_head];
            let str = '';
            while (current) {
                str += ',' + current.element;
                current = current.next;
            }
            return str.slice(1);

        }

        print() {

        }

    }
    return LinkedList;
})();

module.exports = LinkedList;
