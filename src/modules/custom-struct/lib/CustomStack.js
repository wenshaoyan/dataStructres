/**
 * Created by wenshao on 2017/7/20.
 * 自定义栈
 */
'use strict';

const CustomStack = (function() {
    const _items =  Symbol("_items");   // 私有变量 保存栈的元素
    const _func = Symbol("");           // 私有方法

    const test1 = function () {
        console.log(this[_items]);
    };
    class CustomStack {
        constructor() { //构造函数
            this[_items] = [];
            this[_func] = test1;
        }
        sayName(){
           //console.log(this[_items]); // 调用私有属性
           //this[_func](); // 调用私有方法
        }
        // 添加一个或多个元素到栈顶
        push(){
            this[_items].push(...arguments);
        }
        // 弹出栈顶元素
        pop(){
            return this[_items].pop();
        }
        // 查看栈顶元素
        peek(){
            return this[_items][this.size()-1];
        }
        // 判断栈是否为空
        isEmpty(){
            return this[_items].isEmpty();
        }
        // 清空栈
        clear(){
            this[_items] = [];
            return true;
        }
        // 查看栈的长度
        size(){
            return this[_items].length;
        }
        // 输出栈元素
        print(){
            return this[_items].toString();
        }
    }

    return CustomStack;
})();
module.exports = CustomStack;