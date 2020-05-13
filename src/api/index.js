// 接口函数,返回值promise

import ajax from "./ajax"

// mSite

const BASE_URL = "/api"

export const reqAddress=(geohash)=>ajax(`${BASE_URL}/position/${geohash}`)
export const reqFoodCategorys=()=>ajax(BASE_URL+'/index_category')
export const reqShops=(latitude,longitude)=>ajax(BASE_URL+'/shops',{latitude,longitude})