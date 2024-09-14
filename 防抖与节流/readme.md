
### 1. 防抖（Debounce）
**概念**：防抖是一种策略，**当事件触发后，一定时间内不再触发，事件处理函数才会执行**。如果在规定的时间内再次触发该事件，计时器会重置，从而推迟执行函数的时间。常见场景有搜索框输入，用户停止输入后才发送请求。

**防抖函数的实现**：
```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);  // 每次事件触发时，清除上一次的计时器
    timer = setTimeout(() => {
      fn.apply(context, args);  // 延迟执行函数
    }, delay);
  };
}
```

#### 解释：
- **fn**：传入的函数，即需要防抖处理的函数。
- **delay**：防抖时间间隔，表示在多长时间内不触发事件，函数才会执行。
- **clearTimeout(timer)**：每次函数触发时，都会先清除之前的计时器，确保在 `delay` 时间内只执行最后一次事件。
- **setTimeout**：在 `delay` 时间后执行传入的函数。

#### 使用示例：
假设你有一个搜索框，每次用户停止输入 500 毫秒后发送请求：
```js
const search = debounce(function(query) {
  console.log('Search query:', query);
}, 500);

inputElement.addEventListener('input', (e) => {
  search(e.target.value);
});
```

### 2. 节流（Throttle）
**概念**：节流是一种策略，**当事件持续触发时，保证一定时间间隔内只执行一次事件处理函数**，而不是在事件不断触发时每次都执行。常见场景包括滚动事件监听、页面缩放、频繁点击按钮等。

**节流函数的实现**：
```js
function throttle(fn, limit) {
  let lastTime = 0;
  return function (...args) {
    const context = this;
    const now = Date.now();
    if (now - lastTime >= limit) {
      fn.apply(context, args);  // 在时间间隔内执行函数
      lastTime = now;  // 记录最后一次执行的时间
    }
  };
}
```

#### 解释：
- **fn**：传入的函数，即需要节流处理的函数。
- **limit**：节流的时间间隔，表示每隔多长时间最多执行一次函数。
- **now - lastTime >= limit**：通过判断当前时间与上一次执行函数的时间差来决定是否执行函数。如果超过了 `limit`，才允许执行。

#### 使用示例：
假设你有一个滚动事件，每次用户滚动间隔 1 秒内只记录一次位置：
```js
const logScroll = throttle(function() {
  console.log('Scroll event triggered:', window.scrollY);
}, 1000);

window.addEventListener('scroll', logScroll);
```

### 3. 防抖和节流的区别
- **触发条件**：
  - **防抖**：在事件停止触发一段时间后才执行一次处理函数，期间多次触发会重置定时器。
  - **节流**：事件在规定的时间间隔内只能执行一次处理函数，即使事件持续触发，也只能按照固定的时间间隔来执行。
  
- **应用场景**：
  - **防抖**：适合应用在高频触发但需要**最终操作**的场景，比如搜索框输入、调整窗口大小等。只有在用户停止一段时间后，才会触发操作。
  - **节流**：适合应用在高频触发但需要**持续操作**的场景，比如滚动、按钮点击等。每隔一段时间就会执行一次。


### 总结：
- **防抖**：用户停止操作后，才会执行一次操作，常用于输入框搜索等场景。
- **节流**：一段时间内只能触发一次操作，常用于滚动事件等高频操作场景。
