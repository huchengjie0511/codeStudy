async function fn1(){
    console.log(1);
    await fn2();
    console.log(2);
}

async function fn2(){
    console.log("fn2");
}

fn1();
console.log(3);

// 1 fn2 3 2


async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
   }
   async function async2() {
    console.log('async2')
   }
   console.log('script start')
   setTimeout(function () {
    console.log('settimeout')
   })
   async1()
   new Promise(function (resolve) {
    console.log('promise1')
    resolve()
   }).then(function () {
    console.log('promise2')
   })
   console.log('script end')

   // script start async1 start async2 promise1 script end async2 promise2 async1 end settimeout