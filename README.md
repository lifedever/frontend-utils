Front Utils
----
[![npm version](https://badge.fury.io/js/%40gefangshuai%2Ffrontend-utils.svg)](https://badge.fury.io/js/%40gefangshuai%2Ffrontend-utils)

包含了一些常用的js工具方法及less样式

# Usage
## 全部引入
```javascript
import jsUtil from "./js";
```
## 部分引入
```javascript
import objectUtil from "./js/object";
```
或
```javascript
import checkEmail from "./js/validator/checkEmail";
```
# JS
## util
- appendPath: 拼接路径，自动判断被拼接的路径是否已'/'结尾
- delHtmlTag: 删除内容中的html标记
- setSiteTitle: 设置网站标题
- isWeChat: 当前网站是否在微信环境内
- sleep: 线程休眠

## object
- clearObj: 清理object中没有值的属性
- toArray: 将object转换为数组
- toFormData: 将对象转换成表单FormData
- toQueryString: 将对象转换成请求的query字符串

## list
- oneOf: 校验元素是否为数组中的一员

## validator
- checkEmail: 校验是否为邮箱
- checkMobile: 校验是否为手机号

## http
- checkErrorCode: 检查请求的返回错误码，遵循restful
- getErrorCode: 获取请求的错误码，遵循restful

# Less
## Margin
- mar-{position}-xs: 5px
- mar-{position}-sm: 10px
- mar-{position}: 15px
- mar-{position}-lg: 35px
- mar-{position}-lgg: 50px

## Padding
- pad-{position}-xs: 5px
- pad-{position}-sm: 10px
- pad-{position}: 15px
- pad-{position}-lg: 35px
- pad-{position}-lgg: 50px