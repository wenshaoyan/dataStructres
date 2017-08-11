/**
 * Created by wenshao on 2017/7/21.
 * 单向链表
 */
'use strict';
const LinkedList = (function () {

    class Node {
        constructor(element) {
            this._element = element;
            this._next = null;  // 下一个元素
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
    }
    const _length = Symbol('_length');
    const _head = Symbol('_head');

    class LinkedList {
        constructor() {
            this[_length] = 0;
            this[_head] = null;

        }

        /**
         * 尾部添加新的元素
         * @param element   元素
         */
        append(element) {
            const node = new Node(element);
            if (this[_head] === null) {
                this[_head] = node;
            } else {    // 查找到最后一个元素
                let current = this[_head];
                while (current.next) {
                    current = current.next;
                }
                current.next = node;

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
            if (position >= this.size()) {
                this.append(element);
            } else if (position == 0) {
                const node = new Node(element);
                let nextTemp = this[_head];
                this[_head]=node;
                node.next = nextTemp;
                this[_length]++;

            } else {
                const node = new Node(element);
                let index;
                let previous;   // 上一个节点
                for (index = 0; index < position; index++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.next = current;
                this[_length]++;
            }


        }

        /**
         * 按位置删除对应的元素
         * @param position  指定的位置
         */
        removeAt(position) {
            let current = this[_head];
            if (typeof position != "number" || position < 0 || position >= this.size()) {
                return null;
            }
            let index;
            let previous;   // 上一个节点
            for (index = 0; index < position; index++) {
                previous = current;
                current = current.next;
            }
            if (index == 0 && current) { // 根节点
                this[_head] = current.next;
            } else {
                previous.next = current.next;

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
            return this[_head];
        }

        toString() {
            let current = this[_head];
            let str = '';
            while (current) {
                str += ','+current.element;
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
