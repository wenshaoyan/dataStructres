/**
 * Created by wenshao on 2017/8/19.
 * 多叉树的实现
 */
'use strict';

const MultiWayTree = (function () {

    class Node {
        constructor(key, parent, value) {
            this._key = key;
            this._parent = parent;
            this._childes = [];
            this._value = value;
        }

        get key() {
            return this._key;
        }

        set key(value) {
            this._key = value;
        }

        get parent() {
            return this._parent;
        }

        set parent(value) {
            this._parent = value;
        }

        get childes() {
            return this._childes;
        }

        set childes(value) {
            this._childes = value;
        }

        get value() {
            return this._value;
        }

        set value(value) {
            this._value = value;
        }
    }

    const _root = Symbol("_root");
    const _head = Symbol('_head');
    const _func_insert_node = Symbol('_func_insert_node');
    const _func_recursion_node = Symbol('_func_recursion_node');
    const _wait_allot = Symbol('_wait_allot');
    const _wait_allot_set = Symbol('_wait_allot_set');

    const insertNode = function (root, node) {
        if (root.key === node.parent) {
            root.childes.push(node);
            return true;
        }
        for (let val of root.childes) {
            return insertNode(val, node);
        }
        return false;

    };
    const recursion = function (list, root) {
        console.log(list,JSON.parse(JSON.stringify(root.value)));
        list.push(JSON.parse(JSON.stringify(root.value)));
        for (let val of root.childes) {
            recursion(list[0].next, val);
        }
    };

    class MultiWayTree {
        constructor(keyName) {
            this[_root] = new Node(_head, null, {next: []});
            this._keyName = keyName;
            this[_func_insert_node] = insertNode;
            this[_func_recursion_node] = recursion;
            this[_wait_allot] = new Map();
            this[_wait_allot_set] = new Set();
        }

        get keyName() {
            return this._keyName;
        }

        set keyName(value) {
            this._keyName = value;
        }


        insert(value) {
            if (!(this._keyName in value) || !('parent' in value)) {
                return false;
            }

            let valueCopy = JSON.parse(JSON.stringify(value));
            valueCopy.next = [];
            const node = new Node(value[this._keyName], value.parent, valueCopy);
            if (!valueCopy.parent) {    // 一级
                node.parent = this[_root];
                this[_root].childes.push(node);
            } else {
                const newVar = this[_func_insert_node](this[_root], node);
                if (!newVar) {  // 添加到待分配中
                    if (this[_wait_allot].has(node.value.parent)) {
                        this[_wait_allot].get(node.value.parent).push(node);
                    } else {
                        this[_wait_allot].set(node.value.parent, [node]);
                    }
                    this[_wait_allot_set].add(node);
                } else {
                    if (this[_wait_allot].has(node.key)) {  //
                        // node.childes = node.childes.concat(this[_wait_allot]);
                    }
                }
            }
            this.clearWait(node);
        }

        clearWait(node) {
            let isRecursion = false;
            let nodeList =  [];
            for (let values of this[_wait_allot_set]) {
                if (values.value.parent === node.key) {
                    // console.log(node.childes)
                    // console.log("=============")
                    // console.log(values)
                    node.childes = node.childes.concat(values);
                    this[_wait_allot_set].delete(values);
                    isRecursion = true;
                    nodeList.push(values);
                }
            }
            if (isRecursion && this[_wait_allot_set].size !== 0) {
                for (let val of nodeList){
                    this.clearWait(val);
                }
            }
        }

        toArray() {
            const list = [];
            this[_func_recursion_node](list, this[_root]);

            return list[0].next;
        }


    }

    return MultiWayTree;
})();
module.exports = MultiWayTree;