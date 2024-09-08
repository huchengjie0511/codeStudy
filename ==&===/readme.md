# == 操作符
## 原始类型与原始类型比较
    1. 如果任意一个操作数是布尔值，则将其转换为数值再比较是否相等
        console.log(true==1); // true
    2. 如果一个是字符串，另一个是数值，则把字符串转为数值再比较是否相等
        console.log('55'==55);// true
        console.log('44'==55);// false
    只要是简单类型 就会将字符串和布尔值转化为数值再比较
    如果发现无法转换为数值的话，例如：console.log('55asfa'==55);// false
    会将'55asfa'转化为NaN（代表未识别的数字）由于NaN和任何比较都是false所以一定展示false

    3.null和undefinded相等
        console.log(null==undefined);// true
        （1）undefined代表变量已经声明，但是未赋值（未定义）
        （2）null可以用来分配变量代表一个值为空或者不存在（null实际是个对象）
    
    4.NaN和任何变量比较都是NaN

## 原始类型与引用类型比较
    1. 如果一个数是对象，另一个不是，则使用valueOf（）获取原始值，再根据原始数据类型的规则进行比较

    const a={ name: 'a', age: 1}
    console.log(a==1); // false

    所有流程：
        1. 转换为原始类型（ToPrimitive）
            对象在需要被转换为原始值时，JavaScript 会调用内部的 [[ToPrimitive]] 函数，它会按照一定顺序调用对象的特定方法，将其转换为原始类型。
            具体来说，JavaScript 会尝试以下方法：
                valueOf()：首先尝试调用对象的 valueOf() 方法。如果它返回的是一个原始值（比如数字、字符串），则使用该值。
                toString()：如果 valueOf() 返回的不是原始值或不存在，则 JavaScript 会调用对象的 toString() 方法。如果 toString() 返回的是一个原始值，则使用该值。
        2. 对象与数字的比较 (==)
        当对象和数字进行比较时，JavaScript 会尝试将对象转换为原始类型（通常是数字）以进行比较。下面是转换的步骤：

        调用 valueOf()：如果对象的 valueOf() 返回的不是原始类型，则继续调用 toString()。
        调用 toString()：toString() 通常会返回对象的字符串表示（例如 "[object Object]"），然后 JavaScript 尝试将其转换为数字。如果转换失败（比如 "NaN"），则比较返回 false。

        const a = { name: 'a' };
        console.log(a == 1); 
            a.对象 a 参与比较，JavaScript 尝试将其转换为原始值。
            b.调用 a.valueOf()，默认的 valueOf() 返回对象本身 { name: 'a' }，这不是原始值。
            c.然后 JavaScript 调用 a.toString()，默认情况下返回 "[object Object]"。(注意，在这里我们可以重写toString()保证返回我们想要的值)
            d.JavaScript 尝试将 "[object Object]" 转换为数字，结果为 NaN。
            e.因为 NaN == 1 是 false，最终结果为 false。

## 引用类型与引用类型
        1. 对象之间的比较只比较对象之间的地址
            const b = { name:'b'}
            const c = { name:'b'}
            const d= b;
            console.log(b==c); // false
            console.log(d==b); // true

# ===操作符
    所有的比较必须一致才能 ===
    例如： true===1 结果是false


# 区别
    == 会做类型转换 ===不会