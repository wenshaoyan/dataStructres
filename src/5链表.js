/**
 * Created by wenshao on 2017/7/21.
 * 链表的使用
 */
'use strict';



const Log = require('./modules/log');
const customStruct = require('./modules/custom-struct');
const LinkedList = customStruct.LinkedList;
const DoublyLinkedList = customStruct.DoublyLinkedList;

// 1-单向链表
const log1 = new Log(false);
const linkedList1 = new LinkedList();
linkedList1.append("ws1");
linkedList1.append("ws2");
linkedList1.append("ws3");
linkedList1.append("ws4");
log1.i(linkedList1.toString(),linkedList1.size());
log1.i(linkedList1.removeAt(3));
log1.i(linkedList1.indexOf("ws4"));
log1.i(linkedList1.toString(),linkedList1.size());

log1.i(linkedList1.remove('ws4'));
linkedList1.insert(0,'ws4');
log1.i(linkedList1.toString(),linkedList1.size());

// 双向链表
const log2 = new Log(true);
const doublyLinkedList1 = new DoublyLinkedList();
doublyLinkedList1.append("wx1");
doublyLinkedList1.append("wx2");
doublyLinkedList1.append("wx3");
doublyLinkedList1.append("wx4");
doublyLinkedList1.append("wx6");
doublyLinkedList1.insert(4,"wx5");
doublyLinkedList1.insert(4,"wx5.5");
doublyLinkedList1.insert(4,"wxtemp");
//doublyLinkedList1.insert(1,"wx1.5");

log2.i(doublyLinkedList1.toString());
doublyLinkedList1.removeAt(2);
doublyLinkedList1.removeAt(0);
doublyLinkedList1.removeAt(doublyLinkedList1.size()-1);
log2.i(doublyLinkedList1.toString());
doublyLinkedList1.removeAt(3);
log2.i(doublyLinkedList1.toString());






