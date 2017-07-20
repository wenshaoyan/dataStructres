/**
 * Created by wenshao on 2017/7/16.
 * 自定义数组
 */
class CustomArray extends Array {
    constructor() {
        let args = Array.prototype.slice.call(arguments);
        super(...args);
    }

    unshift(args1) {
        for (let index = this.length; index >= 0; index--) {
            this[index] = this[index - 1];
        }
        this[0] = args1;
        return 1;
    }

    push() {
        for (let val of arguments) {
            this[this.length] = val;
        }
        return arguments.length;
    }

    shift() {
        for (let index = 0; index < this.length; index++) {
            this[index] = this[index + 1];
        }
        this.pop();
    }

    every(func) {
        let value = false;
        if (func instanceof Function) {
            for (let val of this) {
                if (!func(val)) {
                    value = false;
                    break;
                } else {
                    value = true;
                }
            }
        }
        return value;
    }
    //
    concat(item){
        const itemCopy = [];


    }


}
module.exports = CustomArray;