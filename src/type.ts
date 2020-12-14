/*
 * @Description: type
 * @Author: ZY
 * @Date: 2020-12-11 11:03:25
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-11 11:03:47
 */

export enum ContentType {
  form = 'application/x-www-form-urlencoded',
  json = 'application/json; charset=utf-8',
  multipart = 'multipart/form-data',
}

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

/**
 * 网络请求参数
 */
export interface RequestParams {
  [key: string]: any;
}
