/**
 * Created by wenshao on 2017/8/1.
 */
'use strict';
const Log = require('./modules/log');
class A {

}
// js继承的方法
// es5原型链法和构造函数，称为组合继承
const log1 = new Log(false);
function Animal(name) {
    this.name = name;
}
Animal.prototype.sayName = function () {
    return this.name;
};

function Person(name) {
    Animal.call(this, name);
}

Person.prototype = new Animal;
/*for (let val in Animal.prototype){
 Person.prototype[val] = Animal.prototype[val];
 }*/

Person.prototype.constructor = 'Person';
const person = new Person("a");
log1.i(person.sayName(), person instanceof Person);

Person.prototype.sayName = function () {
    return "=";
};

const animal = new Animal("1111");
log1.i(person.sayName(), animal.sayName());



// call apply bind 区别
// 共同点:三者都可以把一个函数应用到其他对象上 也就是修改this的指向 这里修改sayName的this指向obj
// 不同点: apply传的参数为数组  call为多个参数 bind为先绑定this指向后 在执行


const log2 = new Log(false);

function Student() {
}
Student.prototype.sayName = function (p1,p2,p3) {
    log2.i(this.name,p1,p2,p3);
}

var obj = {name: 'ws'}; // 注意这是一个普通对象，它不是Person的实例

Student.prototype.sayName.apply(obj, ["apply1", "apply2", "apply3"]);

Student.prototype.sayName.call(obj, "call1", "call2", "call3");

var sn = Student.prototype.sayName.bind(obj);
sn("bind1", "bind2", "bind3"); // bind需要先绑定，再执行

// EventEmitter是node中一个实现观察者模式的类，主要功能是监听和发射消息，用于处理多模块交互问题.
const log3 = new Log(true);
const events = require("events");
const eventEmitter = events.EventEmitter;

class MyEmitter1 extends eventEmitter{
    constructor(){
        super();
    }

}

function MyEmitter() {
    eventEmitter.call(this);
}
MyEmitter.prototype=new eventEmitter;

const myEmitter = new MyEmitter();
myEmitter.on("hello",function(data){
    console.log(data)

});
myEmitter.on("error",function (err) {
    console.log(err)

})
myEmitter.emit("hello","lalal");

const http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200,"text/html");
    res.write("hello");
    res.end();
}).listen(3000);
