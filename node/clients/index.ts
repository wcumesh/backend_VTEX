import { IOClients } from '@vtex/api'
import { Catalog } from '@vtex/clients'
import Status from './status'
import productlist from './productlist'
import checkout from './paymint'
import customerList from './customer_list'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }
  public get catalog() {
          return this.getOrSet('catalog', Catalog)
        }
  public get nameClassClient() {
          return this.getOrSet('productlist', productlist)
        }
  public get stripeClient() {
          return this.getOrSet('checkout', checkout)
        }
   public get TreviPayClient() {
          return this.getOrSet('customerList', customerList)
        }
}
