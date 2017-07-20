/**
 * Created by wenshao on 2017/7/20.
 */
'use strict';
const Log = require('./modules/log');
const customStruct = require('./modules/custom-struct');
const CustomStack = customStruct.CustomStack;


const log1 = new Log(true);
let customStack1 = new CustomStack("1");
let customStack2 = new CustomStack("1222");
// customStack1.test()
customStack1._items=2;
customStack1.sayName();
customStack2.sayName();
