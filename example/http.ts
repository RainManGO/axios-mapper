/*
 * @Description:  httpClient
 * @Author: ZY
 * @Date: 2020-12-11 13:42:27
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-11 13:47:29
 */

 import HttpClient,{HttpClientConfig} from "../src/index";

 const config:HttpClientConfig = {
    baseURL:'http://www.httpbin.org',
    headers:{
        token:'your token'
    }    
 }
const https = new HttpClient(config)

export default https