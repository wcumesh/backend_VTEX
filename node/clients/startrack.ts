
import { InstanceOptions,IOContext,ExternalClient } from '@vtex/api'

export default class nameClassClient extends ExternalClient {
	constructor(ctx: IOContext, options ? : InstanceOptions) {
		super(`http://${ctx.account}.vtexcommercestable.com.br`, ctx, {
			...options,
			headers: {
					'Accept': 'application/json',
					'content-type': 'application/json',
          'X-VTEX-API-AppToken': 'GMPGZXSEALVHXDROITWHCYHCOXEDJSLRLCHACQWVBTKXHGHXPPLDFMUIFMSBSPVHADVUWQMSXAFJNJVHQGOTHHLZIYVPXVCMYCXEKMBYCSGFGLVVRKKMBBASRWLXVWUB',
					'X-VTEX-API-AppKey': 'vtexappkey-whola-OXCYYA'
			},
		})
}
	public async startrack(path: string): Promise < any > {
		let response = await this.http.get(path.toString(), {
		// metric: 'catalog-getSkuMetric',+
		});
		return response
	}

}
