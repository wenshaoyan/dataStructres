/**
 * Created by wenshao on 2017/7/23.
 * 二叉搜索树
 */
'use strict';


const BinarySearchTree = (function () {
    class Node {
        constructor(key) {
            this._key = key;
            this._left = null;
            this._right = null;

        }

        get key() {
            return this._key;
        }

        set key(value) {
            this._key = value;
        }

        get left() {
            return this._left;
        }

        set left(value) {
            this._left = value;
        }

        get right() {
            return this._right;
        }

        set right(value) {
            this._right = value;
        }
    }

    const _root = Symbol("_root");
    const _func_insert_node = Symbol("Symbol");
    const _func_inOrderTraverseNode = Symbol("_func_inOrderTraverseNode");
    const _func_preOrderTraverseNode = Symbol("_func_preOrderTraverseNode");
    const _func_postOrderTraverseNode = Symbol("_func_postOrderTraverseNode");
    const _func_searchNode = Symbol("_func_searchNode");
    const _func_removeNode = Symbol("_func_removeNode");
    const insertNode = function (parentNode, newNode) {
        if (newNode.key < parentNode.key) {  // 插入的节点小于父节点
            if (parentNode.left === null) {  // 父节点左边为空
                parentNode.left = newNode;

            } else {
                this[_func_insert_node](parentNode.left, newNode);
            }
        } else {  // 插入的节点大于或等于父节点
            if (parentNode.right === null) {  // 父节点左边为空
                parentNode.right = newNode;

            } else {
                this[_func_insert_node](parentNode.right, newNode);
            }
        }

    };
    const inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);

        }

    };
    const preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };
    const postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };
    const searchNode = function (node, key) {
        if (!node || !key) {
            return false;
        }
        if (key < node.key) {    // left
            return searchNode(node.left, key);

        } else if (key > node.key) {  //  right
            return searchNode(node.right, key);
        } else {
            return true;
        }


    };
    const removeNode = function (node, key) {
        if (!node || !key) {
            return null;
        }
        if (key < node.key) {    // left
            node.left = removeNode(node.left, key);
            return node;

        } else if (key > node.key) {  //  right
            node.right = removeNode(node.right, key);
            return node;

        } else {
            if (node.left === null && node.right === null) { // 叶节点
                node = null;
                return node;
            }
            if (node.left === null) {    // 只有右节点
                node = node.right;
                return node
            } else if (node.right === null) { //  只有左节点
                node = node.left;
                return node
            }
            const aux = findMindNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right,aux.key);
            return node;
        }
    };
    const findMindNode = function (node) {  // 找到最小的节点
        while (node && node.left) {
            node = node.left;
        }

        return node ? node : null;
    };
    class BinarySearchTree {
        constructor() {
            this[_root] = null;
            this[_func_insert_node] = insertNode;
            this[_func_inOrderTraverseNode] = inOrderTraverseNode;
            this[_func_preOrderTraverseNode] = preOrderTraverseNode;
            this[_func_postOrderTraverseNode] = postOrderTraverseNode;
            this[_func_searchNode] = searchNode;
            this[_func_removeNode] = removeNode;


        }

        insert(key) {
            const node = new Node(key);
            if (this[_root] === null) {  // 根节点
                this[_root] = node;
            } else {
                this[_func_insert_node](this[_root], node);
            }
        }


        /**
         * 中序遍历 从最小到最大的顺序访问所有节点 应用就是对树进行排序操作
         * @param callback
         */
        inOrderTraverse(callback) {
            this[_func_inOrderTraverseNode](this[_root], callback);
        }

        /**
         * 先序遍历 最优先顺序(根左右)  应用就是打印一个结构化的文档
         * @param callback
         */
        preOrderTraverse(callback) {
            this[_func_preOrderTraverseNode](this[_root], callback);
        }

        /**
         * 后序遍历 先访问节点的后代节点,再访问节点本身  应用是计算一个目录和他的子目录所占空间的大小
         * @param callback
         */
        postOrderTraverse(callback) {
            this[_func_postOrderTraverseNode](this[_root], callback);
        }

        /**
         * 返回数的最小值
         * @return {number}
         */

        min() {
            let current = this[_root];
            while (current && current.left) {
                current = current.left;
            }

            return current ? current.key : null;
        }

        /**
         * 返回树的最大值
         * @return {number}
         */
        max() {
            let current = this[_root];
            while (current && current.right) {
                current = current.right;
            }

            return current ? current.key : null;
        }

        /**
         * 判断key是否存在
         * @param key
         */
        search(key) {
            return this[_func_searchNode](this[_root], key);
        }

        /**
         * 删除节点
         * @param key
         */
        remove(key) {
            this[_func_removeNode](this[_root], key);

        }


        /**
         * 访问方式  1 inOrderTraverse 2 preOrderTraverse
         * @param order
         * @return {*|string}
         */
        toString(order) {
            const arr = [];
            if (order == 2) {
                this.preOrderTraverse(function (value) {
                    arr.push(value);
                });
            } else if (order == 3) {
                this.postOrderTraverse(function (value) {
                    arr.push(value);
                });
            } else {
                this.inOrderTraverse(function (value) {
                    arr.push(value);
                });
            }

            return arr.toString();
        }
    }
    return BinarySearchTree;
})();
module.exports = BinarySearchTree;
