export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  addressUrl: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Xiaomi Redmi Note 10 Pro',
    price: 128350,
    description: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-chernyi-106362731/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 2,
    name: 'Мышь Logitech G102',
    price: 10990,
    description: 'Мышь Logitech G102 Lightsync черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 3,
    name: 'Шкаф',
    price: 134480,
    description: 'Шкаф Гранд Турин 5Д, 225x50x218 см, белый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/h65/51132067053598/skaf-grand-turin-5d-225x50x218-sm-ldsp-belyj-105072998-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/grand-turin-5d-225x50x218-sm-belyi-105072998/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toritd-favdZZRphCwdV68sxOLFyrhZLfAhkrj0sdCJ5p4cq9OCZmS7jRoCBIkQAvD_BwE#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 4,
    name: 'Электрочайник',
    price: 15090,
    description: 'ARG ZY-8001W серебристый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/hf8/49988638244894/arg-zy-8001w-serebristyj-101378035-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/arg-zy-8001w-serebristyi-101378035/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toritd-favdZZRphCwdV68sxOLFyrhZLfAhkrj0sdCJ5p4cq9OCZmS7jRoCBIkQAvD_BwE#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 5,
    name: 'Тостер',
    price: 11053,
    description: 'Тостер CENTEK СТ-1432 черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hf3/32725893414942/centek-st-1432-cernyj-100295343-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/centek-st-1432-chernyi-100295343/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toritd-favdZZRphCwdV68sxOLFyrhZLfAhkrj0sdCJ5p4cq9OCZmS7jRoCBIkQAvD_BwE#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 6,
    name: 'Соковыжималка',
    price: 55990,
    description: 'Соковыжималка Kitfort КТ-1110-1 зеленый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h82/h3a/33925432573982/kitfort-kt-1110-1-zelenyj-101387309-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/kitfort-kt-1110-1-zelenyi-101387309/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toritd-favdZZRphCwdV68sxOLFyrhZLfAhkrj0sdCJ5p4cq9OCZmS7jRoCBIkQAvD_BwE#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 7,
    name: 'Кухонный комбайн',
    price: 885800,
    description: 'Кухонный комбайн Thermomix TM6 белый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/ha5/33399277027358/thermomix-tm6-belyj-101073636-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/thermomix-tm6-belyi-101073636/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toritd-favdZZRphCwdV68sxOLFyrhZLfAhkrj0sdCJ5p4cq9OCZmS7jRoCBIkQAvD_BwE#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 8,
    name: 'Блендер',
    price: 12000,
    description: 'Блендер Fresh Juice Blend12 белый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h51/69222679281694/fresh-juice-portable-blender-stakan-blend12-belyi-prozrachnyi-105722831-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/fresh-juice-blend12-belyi-105722831/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toritd-favdZZRphCwdV68sxOLFyrhZLfAhkrj0sdCJ5p4cq9OCZmS7jRoCBIkQAvD_BwE#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 9,
    name: 'Кофеварка',
    price: 60875,
    description: 'Кофеварка CENTEK CT-1164 серебристый, черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h13/h18/51251427639326/centek-ct-1164-serebristyj-100358682-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/kofevarka-centek-ct-1164-serebristyi-chernyi-100358682/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toritd-favdZZRphCwdV68sxOLFyrhZLfAhkrj0sdCJ5p4cq9OCZmS7jRoCBIkQAvD_BwE#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 10,
    name: 'Мультиварка',
    price: 392498 ,
    description: 'Мультиварка Midea MW-3808 ST серебристый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8e/h4e/32409927155742/midea-mw-3808-st-serebristyj-100092230-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/midea-mw-3808-st-serebristyi-100092230/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toritd-favdZZRphCwdV68sxOLFyrhZLfAhkrj0sdCJ5p4cq9OCZmS7jRoCBIkQAvD_BwE#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
];



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/