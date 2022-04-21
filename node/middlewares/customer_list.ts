
export async function customer_list(ctx: Context, next: () => Promise<any>) {

  const {
      clients: {TreviPayClient},
    } = ctx

  let path = ctx.request.url
  let params_array = path.split(':')

  let params = params_array[1]
  params = `customers?page_size=10&page_number=1&sort_column=-id`
  // const data={email:'hussainashif6@gmail.com'} 
  const dataCL = await TreviPayClient.customerList(params);

  ctx.status = 200
  ctx.body = {
    dataCL
  }
 await next()
}
