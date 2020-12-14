Language: [English](README.md) | [中文简体](README-ZH.md)

<p align="center">
  <img width="192" src="https://img-blog.csdnimg.cn/20201214142404283.png" alt="axios mapper">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/axios-mapper">
    <img src="https://img.shields.io/npm/v/axios-mapper?color=blue" alt="npm">
  </a>
   <a href="https://www.npmjs.com/package/axios-mapper">
    <img src="https://img.shields.io/node/v/axios-mapper" alt="npm">
  </a>
  <a href="https://www.npmjs.com/package/axios-mapper">
    <img src="https://img.shields.io/npm/dw/axios-mapper" alt="npm">
  </a>
   <a href="https://www.npmjs.com/package/axios-mapper">
    <img src="https://img.shields.io/bundlephobia/minzip/axios-mapper" alt="npm">
  </a>
  <a href="https://github.com/RainManGO/axios-mapper/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/axios-mapper" alt="License">
  </a>
</p>


>在移动端和后台进行数据操作的时候，我们往往会将网络请求抽象一个model层，便于维护和开发使用。


前端用TS做项目，抽象model层是非常有必要。


[axios-mapper](https://github.com/RainManGO/axios-mapper)是用来解决这个问题，让请求直接返回model。而且优化请求，防止过快点击重复请求。

## 功能
- [x] 更简单的axios请求返回自动转成model
- [x] 自定义间隔时间，防止重复快速点击


## 安装

```shell
  npm install  axios-mapper
```
or

```shell
  yarn add axios-mapper
```

## 简单使用
1、基础配置
```js
 import HttpClient,{HttpClientConfig} from "../src/index";
 const config:HttpClientConfig = {
    baseURL:'http://www.httpbin.org',
    headers:{
        token:'your token'
    }    
 }
const https = new HttpClient(config)
export default https
```

2 、自动化产生model

vscode extension : [json2ts](https://marketplace.visualstudio.com/items?itemName=GregorBiswanger.json2ts)
web：[http://json2ts.com](http://json2ts.com)

```javascript
// {
//     "slideshow": {
//       "author": "Yours Truly",
//       "date": "date of publication",
//       "slides": [
//         {
//           "title": "Wake up to WonderWidgets!",
//           "type": "all"
//         },
//         {
//           "items": [
//             "Why <em>WonderWidgets</em> are great",
//             "Who <em>buys</em> WonderWidgets"
//           ],
//           "title": "Overview",
//           "type": "all"
//         }
//       ],
//       "title": "Sample Slide Show"
//     }
//   }

export interface Slide {
	title: string;
	type: string;
}

export interface Slideshow {
	author: string;
	date: string;
	slides: Slide[];
	title: string;
}

export interface RootObject {
	slideshow: Slideshow;
}
```

3、请求时获得转换

```javascript
import  https  from "./http";
import { RootObject } from "./model";

https.request<RootObject>('/json').then((res)=>{
    console.log(res?.slideshow);
})
```

## 全部配置

配置基于AxiosRequestConfig类，扩展新增默认参数和间隔时间

```javascript
export interface HttpClientConfig extends AxiosRequestConfig {
 //所有请求可以带默认参数
  defaultParams?: RequestParams,
  //click interval (点击间隔时间)
  clickInterval?:number
}
```



## 依赖

 - axios
 - qs

## 脚本

use  [tsdx](https://github.com/formium/tsdx)  to publish

## License
axios-mapper: Axios is open-sourced software licensed under the [MIT license](./LICENSE).
