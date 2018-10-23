import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  newProduct: any;
  allCategories:any;
  @Output() backToProduct = new EventEmitter;
  //event emitter to send signal to the dashboard component to switch back to products page
  targetCategory:any;
  image:any;
  

  constructor(
    private _httpService : HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.newProduct = {title:"", manufacturer:"",category_id:"Device Type"};
    //initialize our model used in the template form
    this.getAllCategories();
    this.targetCategory="";
  }

  getAllCategories(){
    this._httpService.getCategories().subscribe((data)=>{
      this.allCategories = data;
    })
  }
  //grabs all categories from db
  goBackToProducts() {
    this.backToProduct.emit("data");
  }
  addProduct(product){
    console.log(product)
    this._httpService.postNewProduct(product).subscribe((data)=>{
      console.log(data)
      this.goBackToProducts();
    })
  }
  //calls service to post our model to back end product creation route


}
