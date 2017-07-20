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
        constructor(a) { //构造函数
            this[_items] = [a];
            this[_func] = test1;
        }
        sayName(){
           console.log(this[_items]);
           this[_func]();
        }

    }



    return CustomStack;
})();


module.exports = CustomStack;