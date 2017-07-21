/**
 * Created by wenshao on 2017/7/21.
 * 深拷贝的方法
 */
const Log = require('./modules/log');
const lodash = require('lodash');

const sourceArray = [1, 2, {b: {c: 1}}];
const sourceJson = {a: 2, b: {c: 1}};
let copyArray;
let copyJson;
// 1 es6的assign方法
const log1 = new Log(false);
copyArray = Object.assign([], sourceArray);
copyJson = Object.assign({}, sourceJson);
copyArray[2].b.c = 2;
copyArray[0] = 222;
copyJson.b.c = 3;
log1.i(sourceArray, sourceJson);    // sourceArray 和sourceJson只能第一层的深拷贝 并不是真正的深拷贝

// 2-JSON.parse
const log2 = new Log(false);
copyArray = JSON.parse(JSON.stringify(sourceArray));
copyJson = JSON.parse(JSON.stringify(copyJson));
copyArray[2].b.c = 333;
copyArray[0] = 333;
copyJson.b.c = 333;
log2.i(sourceArray, sourceJson);    // 能做到真正的深拷贝 但是只能对Number, String, Boolean, Array, 扁平对象，即那些能够被 json 直接表示的数据结构
// 不能对RegExp和function进行转换


// 3-递归拷贝
const log3 = new Log(true);

function deepClone(source, target) {
    const obj = target || {};
    for (let key in source) {
        const currentObj = source[key];
        if (obj === currentObj) {
            continue;
        }
        if (typeof currentObj === 'object') {
            obj[key] = currentObj instanceof Array ? [] : {};
            arguments.callee(currentObj,obj[key]);  //
        } else {
            obj[key] = currentObj;
        }
    }
    return obj;
}
deepClone(sourceArray,copyArray);
deepClone(sourceJson,copyJson);
copyArray[2] = 222222;
copyJson.b.c = 33333;
log3.i(sourceArray,sourceJson);

// 4-lodash
const log4 = new Log(true);
const test4 = {
    a: function (val) {
        return 1;
    }
};
let test4Copy;
test4Copy = lodash.cloneDeep(test4);
log4.i(test4Copy.a());
