/*
 * @Description:
 * @Author: ZY
 * @Date: 2021-02-02 15:32:28
 * @LastEditors: ZY
 * @LastEditTime: 2021-02-02 17:23:31
 */
import https from './http';
import { Method, ContentType } from '../src/type';
import { RootObject } from './model';
import { LoginRoot } from './loginModel';

// https.request<RootObject>('/json').then((res)=>{
//     console.log(res?.slideshow);
// })

const userInfo = {
  username: 'admin',
  password: 'admin',
};

describe('post', () => {
  it('works', () => {
    https
      .request<LoginRoot>(
        'account/login',
        Method.POST,
        userInfo,
        ContentType.form
      )
      .then(res => {
        console.log(res);
      });
  });
});

describe('get', () => {
  it('works', () => {
    https.request<RootObject>('/json').then(res => {
      console.log(res?.slideshow);
    });
  });
});
