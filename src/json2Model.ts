/*
 * @Description: json model transform (json model 相互转换)
 * @Author: ZY
 * @Date: 2020-12-11 09:52:30
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-11 09:59:51
 */

export class Convert {
    /**
     * @description:  json转model
     * @param {string} json
     * @return {*}
     */
    public static jsonToModel<T>(json: string): T {
      return JSON.parse(json) as T
    }
  
    /**
     * @description: model转json
     * @param {any} model
     * @return {*}
     */
    public static modelToJson(model: any): string {
      return JSON.stringify(model)
    }
  }
  