/*
 * @Description: demo
 * @Author: ZY
 * @Date: 2020-12-11 13:37:52
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-14 15:29:12
 */
import  https  from "./http";
import {Method} from '../src/type'
import { RootObject ,RootObjectPost} from "./model";

https.request<RootObject>('/json').then((res)=>{
    console.log(res?.slideshow);
})

https.request<RootObjectPost>('/anything',Method.POST).then((res)=>{
    console.log(res);
})