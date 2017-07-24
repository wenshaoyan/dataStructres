/**
 * Created by wenshao on 2017/7/24.
 */
'use strict';
const Log = require('./modules/log');
const customStruct = require('./modules/custom-struct');
const ArrayList = customStruct.ArrayList;


const log1 = new Log(true);
const list1 = new ArrayList();
list1.insert(15, 225, 34, 42, 52, 6, 7856, 865, 954, 10);
log1.i(list1.toString());
//log1.i(list1.bubbleSort());
log1.i(list1.modifiedBubbleSort());
log1.i(list1.toString());
