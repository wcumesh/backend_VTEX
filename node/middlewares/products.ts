import {findNestedObj} from '../helpers/helper'
export async function list(ctx: Context, next: () => Promise<any>) {

    const {
        clients: {nameClassClient},
      } = ctx

    let path = ctx.request.url
    let params_array = path.split(':')

    let params = params_array[1]
    params = `api/catalog_system/pvt/sku/stockkeepingunitids?page=1&pagesize=50000`
    const dataCL = await nameClassClient.productlist(params);
const productList = await Promise.all(dataCL.map(async (element: any) => {
	const params1 = `api/catalog_system/pvt/sku/stockkeepingunitbyid/${element}`
      const product= await nameClassClient.productlist(params1);

      return product
}));
    ctx.status = 200
    ctx.body = {
      productList
    }
   await next()
  }

  export async function detail(ctx: Context) {

    const {
        clients: {nameClassClient},
      } = ctx

    let path = ctx.request.url
    let params_array = path.split(':')

    let params = params_array[1]
    params = `api/catalog_system/pub/products/search/${params}/p`
    const dataCL = await nameClassClient.productlist(params);
    console.log(dataCL[0].productId )
    params = `api/dataentities/PS/search?productSkuId=${dataCL[0].productId}&_fields=_all`
    const product = await nameClassClient.productlist(params);


    ctx.status = 200
    ctx.body = {
      product
    }
  //  await next()
  }
  export async function getCategoryTree(ctx: Context, next: () => Promise<any>) {

    const {
        clients: {nameClassClient},
      } = ctx

    let path = ctx.request.url
    let params_array = path.split(':')

    let textt = params_array[1]

      const params = `api/catalog_system/pub/category/tree/15`
    const dataCL = await nameClassClient.productlist(params);


  let re = /\./gi;
           const text= textt.replace(re,"/");
  const url=`https://whola.vtexcommercestable.com.br${text}`
  

const data=findNestedObj(dataCL, 'url', url);

    ctx.status = 200
    ctx.body = {
      data
    }
   await next()
  }






