export class GoodsBaseInfo{
  constructor(columns , itemInfo , shopInfo){
    this.columns = columns;
    this.discountBgColor = itemInfo.discountBgColor;
    this.discountDesc = itemInfo.discountDesc;
    this.oldPrice = itemInfo.oldPrice;
    this.price = itemInfo.price;
    this.title = itemInfo.title;
    this.services = shopInfo.services;
  }
}

export class Shop{
  constructor(shopInfo){
    this.cGoods = shopInfo.cGoods;
    this.cSells = shopInfo.cSells;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.shopLogo = shopInfo.shopLogo;
    this.shopUrl = shopInfo.shopUrl;
  }
}

export class GoodsParams{
  constructor(info , rule){
    this.images= info.images?info.images[0]:'';
    this.info = info.set;
    this.rule = rule;
  }
}