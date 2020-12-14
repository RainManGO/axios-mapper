/*
 * @Description: demo
 * @Author: ZY
 * @Date: 2020-12-11 13:37:52
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-14 11:17:00
 */
import  https  from "./http";
import { RootObject } from "./model";

https.request<RootObject>('/json').then((res)=>{
    console.log(res?.slideshow);
})

