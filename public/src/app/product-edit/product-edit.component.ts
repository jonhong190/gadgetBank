import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadEvent, UploadFile, FileSystemFileEntry } from 'ngx-file-drop';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';


const URL = 'http://localhost:8033/api/upload';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product:any;
  @Output() backToProduct = new EventEmitter();
  //output emitter to send a signal to parent dashboard component to switch back to the products page
  allCategories:any;
  @Input() getProduct :any;
  //input received from the dashboard component with ID of the current product
  editPriceVal:any;
  currentCategory:any;
  allConditions:any;
  allCarriers :any;
  sizes:any;
  prices:any;
  currentSize:any;
  att:any;
  verizon:any;
  tmobile:any;
  sprint:any;
  unlocked:any;
  carrierPrices:any;

  


  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.product = {title:"", manufacturer:"", category_id:"", size:"", has_cracked_back: ""};
    this.getAllSizes();
    //initialize model to be used on template to submit form
    this.getAllCategories();
    //on load call function to grab all current categories
    this.getCategoryName();
    this.getAllCarriers();
    this.getAllConditions();
    // this.startgetPrices(this.getProduct.id,1);
    this.getPricesBySizeAndCarrier(this.getProduct.id, 1)
  }
  getAllConditions(){
    this._httpService.getAllConditions().subscribe(data=>{
      this.allConditions=data;
      console.log("all conditions", data)
    })
  }
  getAllCarriers(){
    this._httpService.getAllCarriers().subscribe(data=>{
      this.allCarriers = data;
      console.log("all carriers", data)
    })
  }
  goBackToProducts() {
    this.backToProduct.emit("data");
  }
  //function called ot send output event to signal dashboard component to go to the products component
  getAllCategories(){
    this._httpService.getCategories().subscribe((data)=>{
      this.allCategories= data;
    })
  }
  getAllSizes(){
    this._httpService.getAllSizes().subscribe(data=>{
      this.sizes=data;
      console.log("sizes" , data)
      console.log("size 1", data[0]['id'])

    })
  }
  getPricing(){
    this._httpService.getPriceForProduct(this.getProduct.id).subscribe(data=>{
      
      for(var i in data){
        if(data[i]['price_value'] == null){
          data[i]['price_value'] = 0;
        }
      }
      this.prices = data;
      console.log("pricing table", this.prices)
    })
  }
  //function that calls service to communicated with backend to grab all categories
  editProduct(product_id, targetProduct){
    if(this.product.has_cracked_back == "Cracked Back"){
      this.product.has_cracked_back = true;
      this.product.condition += "/Cracked Back";
    }
    if(this.product.title == ""){
      this.product.title = this.getProduct.title;
    }
    if(this.product.carrier == ""){
      this.product.carrier = this.getProduct.carrier;
    }
    if(this.product.category_id == ""){
      this.product.category_id = this.getProduct.category_id;
    }
    if(this.product.size == ""){
      this.product.size = this.getProduct.size;
    }
    if(this.product.manufacturer ==""){
      this.product.manufacturer = this.getProduct.manufacturer;
    }
    if(this.product.condition == ""){
      this.product.condition = this.getProduct.condition;
    }

    //if statements allow the product to keep it's original attributes if nothing was entered through the form
    targetProduct = this.product;
    product_id = this.getProduct.id;
    // id from getProduct.id is used to send to backend so correct querry can occur
    this._httpService.getAllProductsByTitle(this.getProduct.title).subscribe((data)=>{
      console.log("products by title", data);
      
      
    })


    this._httpService.postEditProduct(this.getProduct.title, targetProduct).subscribe((data)=>{
      console.log("data received", data);
      this.goBackToProducts();
      
    })
  }
  // this function calls service to the update product back end route
  getCategoryName(){

    this._httpService.getOneCategory(this.getProduct.category_id).subscribe((data)=>{
      this.currentCategory = data[0]['name'];
    })
  }
  // this function will get the current category of the target product and display the name as a placeholder in our form input
  toggleSize(id){
    this._httpService.getPriceByProductAndSize(this.getProduct.id, id).subscribe(data=>{
      this.prices = data;
      console.log("current prices", data)
    })
  }
  nextItem(arr){
    arr = this.sizes;
    var i = i+1;
    i = i % arr.length;
    return arr[i];
  }
  startgetPrices(product,size){
    return this._httpService.getPriceByProductAndSize(product,size).subscribe(data=>{
      this.prices = data;
      console.log("Prices", data)
    })
  }
  getPricesBySize(product_id, size_id){
    return this._httpService.getPriceByProductAndSize(product_id, size_id).subscribe(data=>{
      for (var i in data) {
        if (data[i]['price_value'] == null) {
          data[i]['price_value'] = 0;
        }
      }
      this.prices = data;
      console.log("in get prices by size" , this.prices)
    })
  }
  getPricesBySizeAndCarrier(product_id, size_id){
    return this._httpService.getPriceBySizeAndCarrier(product_id, size_id).subscribe(data=>{
      this.carrierPrices = data;
      console.log("grouped prices", data)
    })
  }
  editPrices(){

  }
}

