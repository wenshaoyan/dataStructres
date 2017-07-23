/**
 * Created by wenshao on 2017/7/22.
 */
'use strict';

const Log = require('./modules/log');
const customStruct = require('./modules/custom-struct');
const CustomSet = customStruct.CustomSet;
const HashTable = customStruct.HashTable;

const log1 = new Log(false);
const customSet1 = new CustomSet();
customSet1.add("wx1");
customSet1.add("wx2");
customSet1.add("wx3");

const customSet2 = new CustomSet();
customSet2.add("wx4");
customSet2.add("wx2");
const customSet3 = customSet1.union(customSet2);
const customSet4 = customSet1.intersection(customSet3);
const customSet5 = customSet1.diff(customSet2);
const bool = customSet4.sub(customSet5);
log1.i(customSet3.values());
log1.i(customSet4.values());
log1.i(customSet5.values());
log1.i(bool);



const log2 = new Log(true);

const HashTable1 = new HashTable();
HashTable1.put("wx1",1);
HashTable1.put("wx2",1);
HashTable1.put("wx3",1);
log2.i(HashTable1.get("wx1"),HashTable1.get("wx10"));
log2.i("===========")
log2.i(HashTable1.toString());




