import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadEvent, UploadFile, FileSystemFileEntry } from 'ngx-file-drop';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';


const uri = 'http://localhost:8888/upload';

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
  currentSizePrices:any;
  carrierPriceGroup:any;
  conditionPriceGroup:any;
  currentSize:any;
  prices:any;
  price:any;
  minusVal:any;
  image: any;
  uploader: FileUploader = new FileUploader({ url: uri });


  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log("ImageUpload: uploaded:", item, status, response);
      //built in function of uploader
   }
  }
  ngOnInit() {
    this.product = {title:"", manufacturer:"", category_id:""};
    this.price = [];
    this.getAllSizes();
    //initialize model to be used on template to submit form
    this.getAllCategories();
    //on load call function to grab all current categories
    this.getCategoryName();
    this.getAllCarriers();
    this.getAllConditions();
    this.getPricesBySize(this.getProduct.id,1);
    this.getPricesBySizeAndCarrier(this.getProduct.id, 1);
    this.getPricesBySizeAdCondition(this.getProduct.id, 1);
    
    
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
  editProduct(targetProduct){
    if(targetProduct == ""){
      targetProduct = this.getProduct.title;
    } else {
      let title = targetProduct.title.split("");
      let newTitle = "";
      if(title[0] != title[0].toUpperCase()){
        title[0] = title[0].toUpperCase();
      }
      for(var i = 0; i < title.length; i++){
        if(title[i] == " "){
          title[i]= "-";
        }
        newTitle += title[i];
      }
      targetProduct.title = newTitle;
    }
    if(targetProduct.category_id == ""){
      targetProduct.category_id = this.getProduct.category_id;
    }
    if(targetProduct.manufacturer ==""){
      targetProduct.manufacturer = this.getProduct.manufacturer;
    }
    

    //if statements allow the product to keep it's original attributes if nothing was entered through the form
  
    // id from getProduct.id is used to send to backend so correct querry can occur
    this.editPrices(this.price);
    //call editPrice to individually edit all price objects associated with this product
    
    //check if a file has been uploaded
    if(this.uploader.queue[0] == null){
      targetProduct['image'] = this.product.image;
    } else {
      targetProduct['image'] = this.uploader.queue[0].file.name;
    }
    
    this._httpService.postEditProduct(this.getProduct.id, targetProduct).subscribe((data)=>{
      console.log(data); 
      this.goBackToProducts();
    });
    
  }
  // this function calls service to the update product back end route
  getCategoryName(){
    this._httpService.getOneCategory(this.getProduct.category_id).subscribe((data)=>{
      this.currentCategory = data[0]['name'];
      console.log("category", data)
    })
  }
  // this function will get the current category of the target product and display the name as a placeholder in our form input
  toggleSize(id){
    this._httpService.getPriceByProductAndSize(this.getProduct.id, id).subscribe(data=>{
      for(var i in data){
        if(data[i]['price_value'] == null){
          data[i]['price_value'] = 0;
        }
      }
      this.prices = data;
      this.currentSize = data[0]['size_id'];
      console.log("current prices", data)
      this.currentSizePrices = data;
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
      console.log("Prices", data);
      this.currentSizePrices = data;
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
      this.generatePriceArray(data);
    })
  }
  getPricesBySizeAndCarrier(product_id, size_id){
    return this._httpService.getPriceBySizeAndCarrier(product_id, size_id).subscribe(data=>{
      this.carrierPriceGroup = data;
      for(var i in this.allCarriers){
        this.carrierPriceGroup[i]['name'] = this.allCarriers[i]['carrier_name']
      }
      
      console.log("grouped carrier prices", data)
    })
  }
  getPricesBySizeAdCondition(product_id, size_id){
    return this._httpService.getPriceBySizeAndConditions(product_id, size_id).subscribe(data=>{
      this.conditionPriceGroup=data;
      console.log("grouped condition prices", data)
    })

  }
  generatePriceArray(prices){
    let length = Object.keys(prices).length;
    let p = this.currentSizePrices;
    console.log("Length ", length);
    for(var i = 0; i < length; i++){
      let x = {"price_value":"", "id":"", "minus_value":""};
      this.price.push(x);
    }
    console.log("price  here", this.price);
  }
  onKey(value: string,x,y){
    console.log(value)
    if(x == 0 && y < 7){
      if(value == ""){

      }
      this.price[y]['price_value'] = value;
    }
    if(x == 1 ){
      this.price[y+7]['price_value']= value;
    }
    if (x == 2) {
      this.price[y+14]['price_value'] = value;
    }
    if (x == 3) {
      this.price[y+21]['price_value'] = value;
    }
    if (x == 4) {
      this.price[y + 28]['price_value'] = value;
    }
  }
  minusKey(value:string, x){
    this.minusVal = value;
    if(x == 0){
      for(var i = 0; i < this.allConditions.length; i++){
        this.price[i]['minus_value'] = value;
      }
    }
    if (x == 1) {
      for (var i = 0; i < this.allConditions.length; i++) {
        this.price[i + 7]['minus_value'] = value;
      }
    }
    if (x == 2) {
      for (var i = 0; i < this.allConditions.length; i++) {
        this.price[i + 14]['minus_value'] = value;
      }
    }
    if (x == 3) {
      for (var i = 0; i < this.allConditions.length; i++) {
        this.price[i + 21]['minus_value'] = value;
      }
    }
    if (x == 4) {
      for (var i = 0; i < this.allConditions.length; i++) {
        this.price[i + 28]['minus_value'] = value;
      }
    }    
  }
  editPrices(prices){
    var arr = this.currentSizePrices;
    for(var i = 0; i < arr.length; i++ ){
      if(prices[i]['price_value'] != ""){
        let body = prices[i];
        this._httpService.postEditPrice(arr[i]['id'], body).subscribe(data => {
          console.log(data);
        })
      } else {
        continue;
      } 
    }  
  }

}

