

typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'




let Car = function() {}
let benz = new Car()
benz instanceof Car // true

let car = new String('xxx')
car instanceof String // true

let str = 'xxx'
str instanceof String // false


// 实现instanceof
    function myInstanceof(left, right) {
        // typeof false
        // 先看看基本数据类型是不是object 因为左边必须为实例对象
        if(typeof left !== 'object' || left === null) return false;
        // getProtypeOf Object API
        // 如果为对象就获取左边的原型对象
        let proto = Object.getPrototypeOf(left);
        // 如果原型对象为空 返回false
        // 如果原型对象等于右边的原型对象 返回true
        while(true) { 
        if(proto === null) return false;
        if(proto === right.prototype) return true;// true
        // 如果不等于就继续往上找
        proto = Object.getPrototypeof(proto);
        }
    }
    let text = new String('xxx')
    console.log(myInstanceof (text,String)) // true



    // 通用展示数据类型
    Object.prototype.toString({}) // "[object Object]"
    Object.prototype.toString.call({}) // call ok
    Object.prototype.toString.call(1) // "[object Number]"
    Object.prototype.toString.call('1') // "[object String]"
    Object.prototype.toString.call(true) // "[object Boolean]"
    Object.prototype.toString.call(function(){}) // "[object Function]"
    Object.prototype.toString.call(null) //"[object Null]"
    Object.prototype.toString.call(undefined) //"[object Undefined]"
    Object.prototype.toString.call(/123/g) //"[object RegExp]"
    Object.prototype.toString.call(new Date()) //"[object Date]"
    Object.prototype.toString.call([]) //"[object Array]"
    Object.prototype.toString.call(document) //"[object HTMLDocument]"
    Object.prototype.toString.call(window) //"[object Window]"