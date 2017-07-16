/**
 * Created by wenshao on 2017/7/16.
 * 自定义数组
 */
class CustomArray extends Array{
    constructor(){
        let args = Array.prototype.slice.call(arguments);
        console.log(args)
        super(args);
    }


}
module.exports = CustomArray;