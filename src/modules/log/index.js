/**
 * Created by wenshao on 2017/7/16.
 * Log统一输出
 */
'use strict';
function format (now,fmt) { //author: meizz
    const o = {
        "M+": now.getMonth() + 1, //月份
        "d+": now.getDate(), //日
        "h+": now.getHours(), //小时
        "m+": now.getMinutes(), //分
        "s+": now.getSeconds(), //秒
        "q+": Math.floor((now.getMonth() + 3) / 3), //季度
        "S": now.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (now.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
const dateFormat = "yyyy-MM-dd-hh:mm:ss:S";
class Log{
    constructor(_bool){
        this._bool = _bool;
    }

    get bool() {
        return this._bool;
    }

    set bool(value) {
        this._bool = value;
    }

    i(){
        if (this._bool){
            let arr = Array.prototype.slice.call(arguments);
            arr.unshift(format(new Date(),dateFormat));
            // console.log.apply(console, arr); // es5
            console.log(...arr);    // es6
        }
    }

}

module.exports = Log;

