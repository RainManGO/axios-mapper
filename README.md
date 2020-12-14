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
    <img src=" https://img.shields.io/npm/dw/axios-mapper" alt="npm">
  </a>
   <a href="https://www.npmjs.com/package/axios-mapper">
    <img src=" https://img.shields.io/bundlephobia/minzip/axios-mapper" alt="npm">
  </a>
  <a href="https://github.com/RainManGO/axios-mapper/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/axios-mapper" alt="License">
  </a>
</p>

axios-mapper can make  ts  project easy to transform model  🚀🚀 and   Prevent duplicate network requests


## Features

- [x] axios easy to request and  return data  auto  transform  model
- [x] prevent duplicate network requests


## Usage
&nbsp;
1、base  setting
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

2 、use  tool  get model

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

3、request

```javascript
import  https  from "./http";
import { RootObject } from "./model";

https.request<RootObject>('/json').then((res)=>{
    console.log(res?.slideshow);
})
```


### Dependency

 - axios
 - qs

### Scripts

use  [tsdx](https://github.com/formium/tsdx)  to publish

## License
axios-mapper: Axios is open-sourced software licensed under the [MIT license](./LICENSE).
