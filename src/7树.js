/**
 * Created by wenshao on 2017/7/23.
 */
'use strict';
const Log = require('./modules/log');
const customStruct = require('./modules/custom-struct');
const BinarySearchTree = customStruct.BinarySearchTree;

const binarySearchTree1 = new BinarySearchTree();
const log1 = new Log(true);
binarySearchTree1.insert(11);
binarySearchTree1.insert(7);
binarySearchTree1.insert(15);
binarySearchTree1.insert(5);
binarySearchTree1.insert(3);
binarySearchTree1.insert(9);
binarySearchTree1.insert(8);
binarySearchTree1.insert(10);
binarySearchTree1.insert(13);
binarySearchTree1.insert(12);
binarySearchTree1.insert(14);
binarySearchTree1.insert(20);
binarySearchTree1.insert(18);
binarySearchTree1.insert(25);
binarySearchTree1.insert(6);
log1.i(binarySearchTree1.toString(1));
log1.i(binarySearchTree1.toString(2));
log1.i(binarySearchTree1.toString(3));
const binarySearchTree2 = new BinarySearchTree();

log1.i(binarySearchTree2.min(),binarySearchTree1.min());
log1.i(binarySearchTree2.max(),binarySearchTree1.max());

log1.i(binarySearchTree1.search(11));
binarySearchTree1.remove(6);
binarySearchTree1.remove(5);
binarySearchTree1.remove(15);
log1.i(binarySearchTree1.toString(1));
