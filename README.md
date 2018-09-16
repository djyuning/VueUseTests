# Vue.js 学习之测试篇

> Vue.js 学习之测试篇

## 关于
该工程是学习 Vue.js 工程测试的一次实战，涵盖了单元测试和自动化测试的配置和应用。关于本项目的教程总结，可参考：[URL](#)

## 常见问题

####

#### Error in config.errorHandler: "ReferenceError: Can't find variable: Promise"'
出现该问题是因为 Karma 配置的浏览器是 PhantomJS，并不支持Promise 函数。

**解决方法**

- 安装 es6-promise：`$ npm install es6-promise --save--dev`
- 在 test/unit/index.js 中引入 es6-promise，并执行 polyfill 方法

修改后的 test/unit/index.js 大致如：

```javascript
import Vue from 'vue'
import Promise from 'es6-promise'

Promise.polyfill()

Vue.config.productionTip = false

// 略···
```

