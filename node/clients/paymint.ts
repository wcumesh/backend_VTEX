import { InstanceOptions,IOContext,ExternalClient } from '@vtex/api'



export default class stripeClient extends ExternalClient {


	constructor(ctx: IOContext, options ? : InstanceOptions) {
		super(`https://api.stripe.com`, ctx, {
			...options,
			headers: {
					'Accept': 'application/json',
					'content-type': 'application/x-www-form-urlencoded',
          'Authorization':'Bearer sk_test_Sf9ksAqNZG2gjZV5kVS2l6KO00UXmyTqr0'
			},
		})
}
public async checkout(path: string): Promise < any > {
  let response = await this.http.get(path.toString(), {
  // metric: 'catalog-getSkuMetric',+
  });
  return response
}


}
// pk_test_8dCCml4hKggGD2QQZlk856BQ00n9cSB2mc
// sk_test_Sf9ksAqNZG2gjZV5kVS2l6KO00UXmyTqr0

// trevipay 0a8de137-f7ff-43f1-bda6-482f1d5c7418
