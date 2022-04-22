export async function getBrand(ctx: Context, next: () => Promise<any>) {

  const {
      clients: {nameClassClient},
    } = ctx

  let path = ctx.request.url
  let params_array = path.split(':')

  let url = params_array[1]

const key = url.replace(/[^a-zA-Z0-9]/g, '');

    const params = `api/catalog_system/pvt/brand/list`
  const dataCL = await nameClassClient.productlist(params);

const data=dataCL.find((element: any) => {
 return element.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()==key

});

console.log(data.id)
const url2=`api/dataentities/BD/search?brandId=${data.id}&_fields=_all`
  const BrandData=await nameClassClient.productlist(url2);
   const BrandDataNew={...data, ...BrandData[0]};

   console.log(BrandDataNew);


  ctx.status = 200
  ctx.body = {
    BrandDataNew
  }
 await next()
}
