import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
  } //connecting to the backend routes
  getCustomers() {
    return this._http.get('/customers');
  } //this route will return allUsers.
  getThisCustomer(username) {
    return this._http.get('/customer/'+ username);
  } //this route will return getOneUser. Specific user is queried here
  postNewCustomer(newcustomer) {
    return this._http.post('customer/new', newcustomer);
  } //this route will create a new user through createUser
  getLoginCustomer(username) {
    return this._http.get('customer/login/'+ username);
  } //this route logs in the user through loginUser
  getOrders(id) {
    return this._http.get('/customer/' + id + 'orders');
  } //this route will return all of the orders from a specific customer
  getThisOrder(order_id) {
    return this._http.get('/order/' + order_id);
  } //this route will return oneOrder. Specific order is queried here
  postNewOrder(username, neworder) {
    return this._http.post('/customer/' + username + '/order/new', neworder);
  } //this route will post a new order through newOrder
  getDeleteOrder(order_id) {
    return this._http.get('/order/' + order_id + '/delete');
  } //this route will delete the order through deleteOrder
  postNewProduct(order_id, newproduct) {
    return this._http.post('/order/' + order_id + '/product/new', newproduct);
  } //this route will add a new product base on the order id through newProduct
  postEditProduct(product_id, product) {
    return this._http.post('/product/' + product_id + '/edit', product);
  } //this route should allow the user to edit the product info through editProduct
  getDeleteProduct(product_id) {
    return this._http.get('/product/' + product_id + '/delete');
  } //this route will delete the selected product through deleteProduct
}