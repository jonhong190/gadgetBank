import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  getLoginCustomer(email) {
    return this._http.get('customer/login/'+ email);
  } //this route logs in the user through loginUser
  getOrders(id) {
    return this._http.get('/customer/' + id + 'orders');
  } //this route will return all of the orders from a specific customer
  getThisOrder(order_id) {
    return this._http.get('/order/' + order_id);
  } //this route will return oneOrder. Specific order is queried here
  postNewOrder(username, newOrder) {
    return this._http.post('/customer/' + username + '/order/new', newOrder);
  } //this route will post a new order through newOrder
  getDeleteOrder(order_id) {
    return this._http.get('/order/' + order_id + '/delete');
  } //this route will delete the order through deleteOrder
  getAllProducts(){
    return this._http.get('/allProducts');
  }
  getAllProductsByTitle(title){
    return this._http.get('/allProducts/'+title);
  }
  getOneProduct(product_id){
    return this._http.get('/product/'+product_id);
  }
  postNewProduct(newProduct){
    return this._http.post('/new',newProduct);
  }
  postNewProductToOrder(order_id, newproduct) {
    return this._http.post('/order/' + order_id + '/product/new', newproduct);
  } //this route will add a new product base on the order id through newProduct
  postEditProduct(product_id, product) {
    return this._http.post('/product/edit/'+product_id + '/' , product);
  } //this route should allow the user to edit the product info through editProduct
  getDeleteProduct(product_id) {
    return this._http.get('/product/' + product_id + '/delete');
  } //this route will delete the selected product through deleteProduct
  postNewCategory(category){
    return this._http.post('/category/new', category)
  } //this route will add new category through addCategory
  getCategories(){
    return this._http.get('/categories')
  } // this route will get all categorie through allCategories
  getDeleteCategory(category_id){
    return this._http.get('/category/'+category_id+'/delete')
  }
  getOneCategory(category_id){
    return this._http.get('/category/'+category_id)
  }
  getAllConditions(){
    return this._http.get('/conditions');
  }
  getOneCondition(condition_id){
    return this._http.get('/condition/'+condition_id);
  }
  getAllCarriers(){
    return this._http.get('/carriers');
  }
  postNewCarrier(carrier){
    return this._http.post('/new/carrier', carrier);
  }
  getOneCarrier(carrier_id){
    return this._http.get('/carrier/'+carrier_id)
  }
  getAllSizes(){
    return this._http.get('/sizes');
  }
  postNewSize(size){
    return this._http.post('/size/new',size);
  }
  getOneSize(size_id){
    return this._http.get('/size/'+size_id);
  }
  getAllPrices(){
    return this._http.get('/prices');
  }
  postNewPrice(price, product_id){
    return this._http.post('/price/new/'+product_id, price);
  }
  getPriceForProduct(product_id){
    return this._http.get('/price/'+product_id);
  }
  getPriceByProductAndSize(product_id, size_id){
    return this._http.get('/price/'+product_id+'/'+size_id);
  }
  getPriceBySizeAndCarrier(product_id,size_id){
    return this._http.get('/prices/group/'+product_id+'/'+size_id);
  }
  postEditPrice(price){
    return this._http.post('/price/edit', price);
  }
  

}