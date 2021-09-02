/*
 * @Description:  httpClient
 * @Author: ZY
 * @Date: 2020-12-11 13:42:27
 * @LastEditors: ZY
 * @LastEditTime: 2021-09-02 16:54:25
 */

import HttpClient, { HttpClientConfig } from '../src/index';

const config: HttpClientConfig = {
  baseURL: 'http://flash-admin.enilu.cn/prod-api',
  headers: {
    token: '',
  },
};

const https = new HttpClient(config);

// Add a request interceptor
https.httpClient.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.httpClient.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default https;
