/*
 * @Description: network request json transform model (网络请求直接返回model)
 * @Author: ZY
 * @Date: 2020-12-11 09:40:18
 * @LastEditors: ZY
 * @LastEditTime: 2021-09-10 16:07:43
 */
import { RequestParams, Method, ContentType } from './type';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Convert } from './json2Model';
import DuplicateRequest from './duplicate';
import qs from 'qs';

export * from './type';

export interface HttpClientConfig extends AxiosRequestConfig {
  defaultParams?: RequestParams;
  //是否开启打印
  log?: boolean;
  //是否开启检查快速点击事件
  checkQuickClick?: boolean;
  //click interval (点击间隔时间)
  clickInterval?: number;
}

export default class HttpClient {
  public defaultConfig: HttpClientConfig;
  public httpClient: AxiosInstance;

  constructor(options: HttpClientConfig = {}) {
    this.httpClient = axios.create(options);
    this.defaultConfig = options;
  }

  /**
   * @description: 封装请求类
   * @param {Method} method 请求方式
   * @param {APIPath} path 请求路径
   * @param {RequestParams} params 参数
   * @param {ContentType} contentType http配置
   * @param {RequestOptions} optionsSource
   * @return {*}
   */
  async request<T>(
    path: string = '',
    method: Method = Method.GET,
    params?: RequestParams,
    contentType: ContentType = ContentType.json,
    optionsSource?: HttpClientConfig
  ) {
    const options: HttpClientConfig = Object.assign(
      {},
      this.defaultConfig,
      optionsSource
    );
    const { headers, clickInterval } = options;
    headers['Content-type'] = contentType;
    const allParams = Object.assign(
      {},
      this.defaultConfig.defaultParams,
      params
    );

    const requestConfig: HttpClientConfig = {
      url: `${path}`,
      method,
      headers,
    };

    if (
      options.checkQuickClick === true &&
      DuplicateRequest.hashUrlAndParams(
        requestConfig.url ?? '',
        method,
        allParams,
        clickInterval
      )
    ) {
      options.log && console.log('click quick');
      return null;
    }

    if (method === Method.GET) {
      requestConfig.params = allParams;
    } else {
      if (contentType === ContentType.form) {
        requestConfig.data = qs.stringify(allParams);
      } else {
        requestConfig.data = JSON.stringify(allParams);
      }
    }
    return this.httpClient
      .request(requestConfig)
      .then(res => {
        options.log && console.log(res);
        const data: string = JSON.stringify(res.data);
        if (res.status >= 200 && res.status < 300) {
          return Convert.jsonToModel(data) as T;
        } else {
          return Promise.reject(data);
        }
      })
      .catch(async error => {
        return Promise.reject(error);
      });
  }
}
