/**
 * Created by wenshao on 2017/7/20.
 */
'use strict';
const Log = require('./modules/log');
const customStruct = require('./modules/custom-struct');
const CustomStack = customStruct.CustomStack;


const log1 = new Log(true);
let customStack1 = new CustomStack();
customStack1.push(1,2,3);
log1.i(customStack1.print());
log1.i(customStack1.pop(),customStack1.pop(),customStack1.pop(),customStack1.pop(),customStack1.peek());
customStack1.clear();
log1.i(customStack1.size());




