import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
  } //connecting to the backend routes
  getCustomers() {
    return this._http.get('/customers');
  } //this route will return allUsers.
  getThisCustomerById(user_id){
    return this._http.get('/user/'+user_id);
  }
  getThisCustomer(username) {
    return this._http.get('/customer/'+ username);
  } //this route will return getOneUser. Specific user is queried here
  postNewCustomer(newcustomer) {
    return this._http.post('customer/new', newcustomer);
  } //this route will create a new user through createUser
  postLoginCustomer(user) {
    return this._http.post('/login',user);
  } //this route logs in the user through loginUser
  getSession(){
    return this._http.get('/session');
  }
  deleteSession(){
    return this._http.get('/session/delete');
  }
  getAllOrders(){
    return this._http.get('/orders');
  }
  getOrders(id) {
    return this._http.get('/orders');
  } //this route will return all of the orders from a specific customer
  getThisOrder(order_id) {
    return this._http.get('/order/' + order_id);
  } //this route will return oneOrder. Specific order is queried here
  getOrderByUserId(user_id){
    return this._http.get('/orders/'+user_id);
  }
  getActiveOrderByUserId(user_id){
    return this._http.get('/order-active/'+user_id)
  } //return the active order
  postNewProductToActiveOrderByUserId(user_id, product_id){
    return this._http.post('/order/active/new/'+user_id, product_id)
  }

  postNewOrder(username, newOrder) {
    return this._http.post('/customer/' + username + '/order/new', newOrder);
  } //this route will post a new order through newOrder
  getDeleteOrder(order_id) {
    return this._http.get('/order/' + order_id + '/delete');
  } //this route will delete the order through deleteOrder
  getAllProducts(){
    return this._http.get('/allProducts');
  }
  getAllProductsLikeTitle(title){
    return this._http.get('/products-contain/'+title)
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
  postNewProductToNewOrder(order_id, product) {
    return this._http.post('/order/' + order_id + '/product/new',product);
  } //this route will add a new product base on the order id through newProduct
  postEditProduct(id, product) {
    return this._http.post('/product/edit/'+id + '/' , product);
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
    return this._http.get('/carrier/'+carrier_id);
  }
  getOneCarrierByName(name){
    return this._http.get('/carrier/name/'+name);
  }
  getCarriersByCategory(category_id){
    return this._http.get('/carriers/'+category_id);
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
  getOneSizeByValue(value){
    return this._http.get('/size/value/'+value);
  }
  getSizesByCategory(category_id){
    return this._http.get('/sizes/'+category_id);
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
  getPriceBySizeAndConditions(product_id, size_id){
    return this._http.get('/prices/condition/'+product_id+'/'+size_id);
  }
  getOnePriceById(price_id){
    return this._http.get('/price/one/'+price_id);
  }
  postEditPrice(id,body){
    return this._http.post('/price/edit/'+id+'/',body);
  }
  upload(uri, body){
    return this._http.post('/'+uri, body);
  }
  getDeleteOneProduct(product_id){
    return this._http.get('/product/'+product_id+'/delete');
  }
  getPriceByAllConditions(product_id, size_id, condition_id, carrier_id, category_id){
    return this._http.get('/price/all-conditions/'+product_id+'/'+size_id+'/'+condition_id+'/'+carrier_id+'/'+category_id);
  }
  getAllProductsByOrderId(order_id){
    return this._http.get('/order/'+order_id+'/products');
  }
  postProductToOrder(product, order_id){
    return this._http.post('/order/'+order_id+'/product/new', product);
  }

  //address routes

  getAllAddressesByUserId(user_id){
    return this._http.get('/addresses/'+user_id);
  }
  postNewAddressToUser(address, user_id){
    return this._http.post('/address/'+user_id+'/new', address);
  }
  postUpdateAddressToUser(user_id, address_id, address){
    return this._http.post('/address/update/'+user_id+'/'+address_id, address);
  }
  deleteAddress(address_id){
    return this._http.get('/address/delete/'+address_id);
  }

  //shipping routes
  postFromAddressAndCreateLabel(address, user_id) {
    return this._http.post('/create-shipping/'+user_id, address)
  }
  getShipmentById(shipment_id){
    return this._http.get('/shipment/'+shipment_id);
  }
}