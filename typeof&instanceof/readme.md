# typeof & instanceof 的区别与使用
typeof 返回一个字符串 表示未经计算的操作数的类型
    typeof(1) || type 1

instanceof 用于检测构造函数的prototype属性是否出现在某个实例对象的原型上面

## 区别
    - typeof 返回一个基本类型  instanceof返回一个布尔值
    - instanceof 可以准确地判断复杂引用数据类型但是不能判断基础数据类型
    - typeof 虽然可以判断基础数据类型（null）除外，但是引用数据类型中除了function类型以外其他的也无法判断

## 其他检测数据类型的办法
    Object.prototype.toString
