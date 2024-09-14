// 使用闭包实现函数柯里化
// 获取长方形面积
function getArea(width, height) {
  return width * height;
}
// 发现长都是10
const area1 = getArea(10, 20);
const area2 = getArea(10, 30);
const area3 = getArea(10, 40);
// 使用闭包柯里化函数
// 获取width 
// 这个函数的作用是返回一个函数，返回的函数接受height参数，返回width * height
function getArea(width) {
  return (height) => {
    return width * height;//这里面的width是外部函数的width 实际上是getArea的参数
  };
}
const getTenWidthArea = getArea(10);

const area = getTenWidthArea(20);
const getTwentyWidthArea = getArea(20);
