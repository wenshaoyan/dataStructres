/**
 * Created by wenshao on 2017/7/21.
 * 优先队列
 */
'use strict';


const PriorityQueue = (function () {

    class QueueElement {
        constructor(_element, _priority) {
            this._element = _element;
            this._priority = _priority;
        }


        get element() {
            return this._element;
        }

        set element(value) {
            this._element = value;
        }

        get priority() {
            return this._priority;
        }

        set priority(value) {
            this._priority = value;
        }
        toJson(){
            const obj = {};
            obj.element=this._element;
            obj.priority=this._priority;
            return obj;
        }
        toString(){
            return JSON.stringify(this.toJson());
        }
    }

    const _items = Symbol('_items');
    class PriorityQueue {
        constructor() {
            this[_items] = [];
        }

        /**
         * 队列尾部添加一个或多个元素
         * @param element   添加的元素
         * @param priority  优先级
         * @returns {Number|*}
         */
        enqueue(element, priority) {
            const queueElement = new QueueElement(element, priority);
            if (this.isEmpty()) {
                this[_items].push(queueElement);
            } else {
                let isAdd = true;
                let index = 0;
                for (let val of this[_items]) {
                    if (queueElement.priority < val.priority) {
                        isAdd = false;
                        this[_items].splice(index, 0, queueElement);
                        break;
                    }
                    index++;
                }
                if (isAdd) {
                    this[_items].push(queueElement);
                }
            }


            return 1;
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
            let result = [];
            this[_items].forEach((item,index)=>{
                result.push(item.toString());
            });
            return result.toString();
        }

    }
    return PriorityQueue;

})();
module.exports = PriorityQueue;
