/**
 * Created by wenshao on 2017/7/24.
 */
'use strict';
const Log = require('./modules/log');
const customStruct = require('./modules/custom-struct');
const ArrayList = customStruct.ArrayList;


const log1 = new Log(true);
const list1 = new ArrayList();
// list1.insert(5,4,3,2,1);
log1.i(list1.toString());
//log1.i(list1.bubbleSort());
// log1.i(list1.modifiedBubbleSort());
log1.i(list1.selectSort());
log1.i(list1.toString());
