/**
 * Created by wenshao on 2017/7/16.
 * 自定义数组
 */
class CustomArray extends Array{
    constructor(){
        let args = Array.prototype.slice.call(arguments);
        super(...args);
    }

    unshift(){
        super.unshift(1)
    }



}
module.exports = CustomArray;