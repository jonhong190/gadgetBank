import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


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

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.product = {title:"", manufacturer:"", category_id:"", size:"", carrier:"", condition:"", has_cracked_back: "", price:""};
    //initialize model to be used on template to submit form
    this.getAllCategories();
    //on load call function to grab all current categories
    this.getCategoryName();
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
  //function that calls service to communicated with backend to grab all categories
  editProduct(product_id, targetProduct){
    console.log(this.product.has_cracked_back)
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
    targetProduct = this.product;
    product_id = this.getProduct.id;
    this._httpService.postEditProduct(product_id, targetProduct).subscribe((data)=>{
      console.log(data);
      this.goBackToProducts();
      
    })
  }
  // this function calls service to the update product back end route
  getCategoryName(){

    this._httpService.getOneCategory(this.getProduct.category_id).subscribe((data)=>{
      this.currentCategory = data[0]['name'];
    })
  }
}
