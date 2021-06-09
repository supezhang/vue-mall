import {baseRequest} from './request'

export function detailData(iid){
  return baseRequest({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getRecommend(){
  return baseRequest({
    url:'/recommend'
  })
}

export class BaseInfo{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.lowNowPrice = itemInfo.lowNowPrice

  }
}

export class Shop {
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
export class itemParams{
  constructor(info,rule){
    this.info = info
    this.rule = rule
  }
}