import type { ClientsConfig, ServiceContext, RecorderState } from '@vtex/api'
import { LRUCache, method, Service } from '@vtex/api'

import { Clients } from './clients'
import { status } from './middlewares/status'
import { list,detail } from './middlewares/products'
import { preOrderPayment } from './middlewares/payment'
import { customer_list } from './middlewares/customer_list'
import { getCategoryTree } from './middlewares/products'
import { validate } from './middlewares/validate'
// import { CronJob } from 'cron';
//   let cron= new CronJob("* * * * * *", ()=> {
//     console.log("Executing...Tushar")
// })

// cron.start()
const TIMEOUT_MS = 800

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({ max: 5000 })

metrics.trackCache('status', memoryCache)

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<Clients> = {
  // We pass our custom implementation of the clients bag, containing the Status client.
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    // This key will be merged with the default options and add this cache to our Status client.
    status: {
      memoryCache,
    },
  },
}

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients, State>

  // The shape of our State object found in `ctx.state`. This is used as state bag to communicate between middlewares.
  interface State extends RecorderState {
    code: number,
    text:string
  }
}

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  routes: {
    // `status` is the route ID from service.json. It maps to an array of middlewares (or a single handler).
    status: method({
      GET: [validate, status],
    }),
    // productListbrand
    productList: method({
      GET: [list],
    }),

    productDetail: method({
      GET: [detail],
    }),
    category_tree: method({
      GET: [getCategoryTree],
    }),
    stripe: method({
      GET: [preOrderPayment],
    }),
    treviPay: method({
      GET: [customer_list],
    })
  },
})
// startrack productSkuList
//
