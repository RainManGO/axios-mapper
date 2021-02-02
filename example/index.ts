/*
 * @Description: demo
 * @Author: ZY
 * @Date: 2020-12-11 13:37:52
 * @LastEditors: ZY
 * @LastEditTime: 2021-02-02 16:40:02
 */
import  https  from "../test/http";
import {Method,ContentType} from '../src/type'
// import { RootObject ,RootObjectPost} from "./model";
import { LoginRoot } from "../test/loginModel";



const userInfo = {
    username:'admin',
    password:'admin'
}

https.request<LoginRoot>('/account/login',Method.POST,userInfo,ContentType.form).then((res)=>{
    console.log(res);
})