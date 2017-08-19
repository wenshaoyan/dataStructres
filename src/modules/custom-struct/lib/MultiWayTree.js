/**
 * Created by wenshao on 2017/8/19.
 * 多叉树的实现
 */
'use strict';

const MultiWayTree = (function () {

    class Node {
        constructor(key, parent) {
            this._key = key;
            this._parent = parent;
            this._childes = [];
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
    }
    const _root = Symbol("_root");
    const _head = Symbol('_head');
    const _func_insert_node = Symbol('_func_insert_node');

    const insertNode = function(root,node) {
        if (root.key === node.parent) {
            return;
        }
        for (let val of root.childes){
            return insertNode(val,node);
        }

    };
    class MultiWayTree {
        constructor(keyName) {
            this[_root] = new Node(_head, null);
            this._keyName = keyName;
            this[_func_insert_node] = insertNode;
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
            const node = new Node(value[this._keyName], value.parent);
            if (!value.parent) {    // 一级
                node.parent = this[_root];
                this[_root].childes.push(node);
            } else {
                this[_func_insert_node](this[_root],node);
            }


        }

        print() {

        }


    }
    return MultiWayTree;
})();
module.exports = MultiWayTree;