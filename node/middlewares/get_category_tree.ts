


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







