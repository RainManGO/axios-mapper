/*
 * @Description:  httpClient
 * @Author: ZY
 * @Date: 2020-12-11 13:42:27
 * @LastEditors: ZY
 * @LastEditTime: 2021-02-02 17:22:43
 */

import HttpClient, { HttpClientConfig } from '../src/index';

const config: HttpClientConfig = {
  baseURL: 'http://flash-admin.enilu.cn/prod-api',
  headers: {
    token: '',
  },
};
const https = new HttpClient(config);

export default https;
