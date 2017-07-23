/**
 * Created by wenshao on 2017/7/21.
 */
'use strict';


const Log = require('./modules/log');
const customStruct = require('./modules/custom-struct');
const CustomQueue = customStruct.CustomQueue;
const PriorityQueue = customStruct.PriorityQueue;

// 1-队列
const log1 = new Log(false);
const customQueue1 = new CustomQueue();

customQueue1.enqueue(1, 2, 3);
customQueue1.dequeue();
log1.i(customQueue1.front());
log1.i(customQueue1.print());

// 2-优先队列


const log2 = new Log(false);
const Queue2 = new PriorityQueue();
Queue2.enqueue("ws1", 4);
Queue2.enqueue("ws1", 2);
Queue2.enqueue("ws1", 3);
log2.i(Queue2.print());


// 3-循环队列
const log3 = new Log(true);
function hotPotato(nameList, num) {
    const customQueue3 = new CustomQueue();
    nameList.forEach((item, index) => {
        customQueue3.enqueue(item);
    });

    while (customQueue3.size() > 1) {
        for (let i = 0; i < num; i++) {
            customQueue3.enqueue(customQueue3.dequeue());
        }

        log3.i(`${customQueue3.dequeue()}退出了`);
    }
    log3.i(`${customQueue3.dequeue()}获胜`);


}

hotPotato(["ws1", "ws2", "ws3", "ws4", "ws5"],2);