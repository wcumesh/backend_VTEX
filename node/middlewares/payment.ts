
export async function preOrderPayment(ctx: Context, next: () => Promise<any>) {

  const {
      clients: {stripeClient},
    } = ctx

  let path = ctx.request.url
  let params_array = path.split(':')

  let params = params_array[1]
  params = `/v1/customers`
  // const data={email:'hussainashif6@gmail.com'}
  const dataCL = await stripeClient.checkout(params);

  ctx.status = 200
  ctx.body = {
    dataCL
  }
 await next()
}
