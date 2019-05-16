/*
包括Api请求函数
 */

import ajax from './ajax'

export const reqAddress = (geohash)=>ajax(`/position/${geohash}`)
export const reqFoodCategorys = () => ajax('/index_category')
export const reqShops = (longitude, latitude) => ajax('/shops', {longitude, latitude})
